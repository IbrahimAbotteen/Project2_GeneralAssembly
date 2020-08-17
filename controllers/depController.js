const Departments=require('../models/departments');
const depController={};

depController.index=(req,res)=>{
    Departments.getAll()
    .then((dep)=>{
        res.render('departments/index',
        {message:'ok',
         data:{dep}
        })

    })   .catch((err) => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
      });
}

depController.show = (req, res,next) => {
    Departments.getById(req.params.id)
      .then((dep) => {
      res.locals.dep=dep;
      next();
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
      });
  };

  depController.create=(req,res)=>{
    new Departments({
        department_name: req.body.department_name,
        location: req.body.location,
        email: req.body.email     
      })
      .save().then(()=>{
          res.redirect('/dep')
      }) .catch((err) => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
      });
}

depController.delete=(req,res)=>{
    Departments.getById(req.params.id)
    .then((dep) => {
      return dep.delete();
    }).then(()=>{
        res.redirect('/dep')
}) 
    .catch((err) => {
    console.log(err);
    res.status(500).json({ err, message: err.message });
    });
}

depController.update=(req,res)=>{
    Departments.getById(req.params.id)
    .then((dep)=>{
        return dep.update(req.body)
    }).then((updatedDep)=>{
        res.redirect(`/dep/`)
    })   
    .catch((err) => {
    console.log(err);
    res.status(500).json({ err, message: err.message });
      });
}
module.exports=depController;