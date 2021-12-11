if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const moongose = require('mongoose')


function connect(){
    moongose.connect(process.env.MONGODB_URI)

    const db   = moongose.connection

    db.once('open',()=>{
        console.log('connected to database')
    })

    db.on('error',(err)=>{
        console.log(err)
    })

}

module.exports = connect