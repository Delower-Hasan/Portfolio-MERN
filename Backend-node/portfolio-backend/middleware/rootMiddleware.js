

const morgan = require('morgan');


const middlewares = [
    morgan('dev')
]

module.exports = app =>{
    middlewares.forEach(m=>{
        app.use(m)
    })
}