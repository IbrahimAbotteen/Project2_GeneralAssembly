const db=require('../db/config');
const { one } = require('../db/config');

class Employees{
    constructor(emp){
        this.id=emp.id;
        this.name=emp.name;
        this.age=emp.age;
        this.title=emp.title;
        this.department=emp.department;
    }

    static getAll(){
        return db.manyOrNone
        (`SELECT * FROM employees`)
        .then((emp)=>{
            return emp.map((emplo)=>{
                return new this(emplo);
            });
        });
    }

    static getById(id) {
        return db
          .oneOrNone('SELECT * FROM employees WHERE id = $1', id)
          .then((emp) => {
            if (emp) return new this(emp);
            throw new Error('Employee not found');
          });
      }

      save() {
        return db
          .one(
            `
          INSERT INTO employees (name,age,title,department)
          VALUES ($/name/, $/age/, $/title/,$/department/)
          RETURNING *`,
            this
          )
          .then((emp) => {
            return Object.assign(this, emp);
          });
      }

      delete(){
        return db.oneOrNone('DELETE FROM employees WHERE id = $1', this.id);
      }

      update(changes){
          Object.assign(this,changes);
          return db.oneOrNone(
              `UPDATE employees SET
               name = $/name/,
               age = $/age/,
               title = $/title/,
               department=$/department/
               WHERE id = $/id/
               RETURNING * `, this )
            Object.assign (this,changes)}
}

module.exports=Employees;