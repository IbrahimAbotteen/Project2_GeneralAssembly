const db=require('../db/config');

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
}

module.exports=Employees;