const db=require('../db/config');
const { one } = require('../db/config');

class Departments{
    constructor(dep){
        this.id=dep.id;
        this.department_name=dep.department_name;
        this.location=dep.location;
        this.email=dep.email;
    }

    static getAll(){
        return db.manyOrNone
        (`SELECT * FROM departments`)
        .then((dep)=>{
            return dep.map((depart)=>{
                return new this(depart);
            });
        });
    }

    static getById(id) {
        return db
          .oneOrNone('SELECT * FROM departments WHERE id = $1', id)
          .then((dep) => {
            if (dep) return new this(dep);
            throw new Error('Department not found');
          });
      }

      save() {
        return db
          .one(
            `
          INSERT INTO departments (department_name,location,email)
          VALUES ($/department_name/, $/location/, $/email/)
          RETURNING *`,
            this
          )
          .then((dep) => {
            return Object.assign(this, dep);
          });
      }

      delete(){
        return db.oneOrNone('DELETE FROM departments WHERE id = $1', this.id);
      }

      update(changes){
        Object.assign(this,changes);
        return db.oneOrNone(
            `UPDATE departments SET
             department_name = $/department_name/,
             location = $/location/,
             email = $/email/
             WHERE id = $/id/
             RETURNING * `, this )
          Object.assign (this,changes)
        }
}
module.exports=Departments;