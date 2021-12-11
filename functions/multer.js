const multer  = require('multer')

let fileHandeler     = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, './../uploads/')
    },
    filename:(req, file, cb)=>{
        cb(null,file.originalname)
    }
})    

const uploads  = multer({storage: fileHandeler})

module.exports = uploads    
