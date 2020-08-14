const bodyParser = require("body-parser");
const e = require("express");

const p=document.createElement('p');
p.innerText="hello world";

const add=document.getElementById('add');
add.addEventListener((e)=>{ 
     console.log(e);
     if(e.target.id==='add')
        document.body.appendChild(p);

})