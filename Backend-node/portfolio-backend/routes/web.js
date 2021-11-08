const RegisterRoute = require('./RegisterRoute');

const route = [
    {
        path:'/auth',
        handler: RegisterRoute
    },
    {
        path:'/',
        handler: function handle(req,res){
            res.send('This is home page')
        }
    },
]

module.exports = app=>{
    route.forEach(r=>{
        if(r.path == '/'){
            app.get(r.path, r.handler)
        }
        else{
            app.use(r.path, r.handler);
        }
    })
}