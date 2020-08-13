const db=require('../db/config');
const { one } = require('../db/config');

class Employees{
    constructor(emp){
        this.id=emp.id;
        this.name=emp.name;
        this.age=emp.age;
        this.title=emp.title;
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
          INSERT INTO employees (name,age,title)
          VALUES ($/name/, $/age/, $/title/)
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
}

module.exports=Employees;