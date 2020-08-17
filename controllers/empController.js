const Employees=require('../models/employees');

const empController={};

empController.index=(req,res)=>{
    Employees.getAll()
    .then((emp)=>{
        res.render('employees/index',
        {message:'ok',
         data:{emp}
        })

    })   .catch((err) => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
      });
}

empController.show = (req, res,next) => {
    Employees.getById(req.params.id)
      .then((emp) => {
      res.locals.emp=emp;
      next();
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
      });
  };
empController.create=(req,res)=>{
    new Employees({
        name: req.body.name,
        age: req.body.age,
        title: req.body.title,
        department:req.body.department
      })
      .save().then(()=>{
          res.redirect('/emp')
      }) .catch((err) => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
      });
}

empController.delete=(req,res)=>{
    Employees.getById(req.params.id)
    .then((emp) => {
      return emp.delete();
    }).then(()=>{
        res.redirect('/emp')
}) 
    .catch((err) => {
    console.log(err);
    res.status(500).json({ err, message: err.message });
    });
}

empController.update=(req,res)=>{
    Employees.getById(req.params.id)
    .then((emp)=>{
        return emp.update(req.body)
    }).then((updatedEmp)=>{
        res.redirect(`/emp/`)
    })   
    .catch((err) => {
    console.log(err);
    res.status(500).json({ err, message: err.message });
      });
}
module.exports=empController;