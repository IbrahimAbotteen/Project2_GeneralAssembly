const Employees=require('../models/employees');

const empController={};

empController.index=(req,res)=>{
    Employees.getAll()
    .then((emp)=>{
        res.render('employees/index',
        {message:'ok',
         data:{emp}
        }).catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: err.message });
    });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
      });
}


module.exports=empController;