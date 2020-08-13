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

empController.show = (req, res) => {
    Employees.getById(req.params.id)
      .then((emp) => {
        res.render('employees/show', {
          message: 'ok',
          data: {emp},
        });
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
        res.redirect('/')
}) 
    .catch((err) => {
    console.log(err);
    res.status(500).json({ err, message: err.message });
    });
}
module.exports=empController;