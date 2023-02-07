
const fs = require('fs')
const {filterUnecessaryUserData} = require('../utils/functions/filterData')

const getFilghts = async(req,res) =>{

    let obj;
    const {flights} = req.params
    try{

        fs.readFile(`./files/file${flights}.json`,'utf-8',(err,data) =>{
            obj = filterUnecessaryUserData(JSON.parse(data))
            res.json(obj)
        })
    }
    catch(e){
        console.log(e);
        res.json(e)
    }
}//


module.exports = {
    getFilghts
}