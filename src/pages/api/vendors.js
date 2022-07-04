import * as fs from 'fs'

export default function handler(req,res){
    console.log(req.query.slug)
    fs.readFile(`DataBase/vendors.json`,'utf-8',(err,data)=>{
        if(err){
            res.status(500).json({error:"Data not available"})
        }
        
        res.status(200).json(JSON.parse(data))
    })
    
}