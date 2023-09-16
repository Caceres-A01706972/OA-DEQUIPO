/**
* Base controller
*/


exports.root = async(req,res,next) => {
    console.log("root Controller")
    res.render('test');

}