var express=require('express');
var pwny=require('pwnedpasswords');
var app=express();


app.set('view engine','ejs');  // using ejs view engine 

//using public for static serving
app.use('/public', express.static('public')); 



// Get request handler

app.get('/',(req,res)=>{
    res.render('home');        //serving home view
});
app.get('/about',(req,res)=>{
    res.render('abt');         //serving about view
});
app.get('/login',(req,res)=>{   //serving login view
    res.render('login');
})
app.get('/signup',(req,res)=>{
    res.render('signup');       //serving signup view
})
app.get('/dashboard',(req,res)=>{
    res.render('dash');            //serving dashboard view
});
app.get('/passgen',(req,res)=>{
    res.render('password');         //serving password generator view
});
app.get('/database',(req,res)=>{
    res.render('social');          //serving social database view
})
app.get('/check',(req,res)=>{
    res.render('create',{result:''});    //serving checking pass view
})
app.get('/vault',(req,res)=>{
    res.render('vault');         //serving vault view
})

//post handler

app.use(express.urlencoded({    //handling post form data
    extended: true
  }))

  //creating a response of post request with count of password breached
app.post('/check',(req,res,next)=>{
    var pass=req.body.pass;
    pwny(pass,(err,count)=>{
        var data="Your Password was "+count+" times breached";
        res.render('create',{'result':data})
    });

})


app.listen(8080,()=>{
    console.log('server listening at http://localhost:8080');
});