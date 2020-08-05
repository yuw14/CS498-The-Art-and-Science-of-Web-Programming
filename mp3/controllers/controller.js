var mongoose = require('mongoose');
task = mongoose.model('tasks');
user = mongoose.model('users');

exports.list_users = function(req, res){
    console.log("list_users");
    // console.log(req.query);
    var where = req.query.where?(JSON.parse(req.query.where)):null;
    var sort = req.query.sort?(JSON.parse(req.query.sort)):null;
    var select = req.query.select?(JSON.parse(req.query.select)):null;
    var skip = req.query.skip?(JSON.parse(req.query.skip)):null;
    var limit = req.query.limit?(JSON.parse(req.query.limit)):null;
    var cnt = req.query.cnt?true:false;
    // console.log("where");
    // console.log(where);
    // console.log("2");
    // console.log(sort);
    // console.log("3");
    // console.log(select);
    // console.log("4");
    // console.log(skip);
    // console.log("5");
    // console.log(limit);
    // console.log("6");
    // console.log(cnt);
    user.find(where).sort(sort).select(select).skip(skip).limit(limit)
        .then((userdata)=>{
            console.log(userdata);
        if(cnt){
            return res.status(200).json({message:'OK',data:userdata.length});
        }
            console.log(userdata.length);
        if(userdata.length === 0){
            return res.status(404).json({massage:'Not Found',data:[]});
        }
        res.status(200).json({message:'OK',data:userdata});
        });
};

exports.create_a_user = function(req, res){
    console.log("create_a_user");
    if(!req.body.name && !req.body.email){
        return res.status(400).json({
            message:'Bad Request',
            data:'name and email can not be empty'
        });
    }
    user.findOne({email:req.body.email})
        .then((userdata) =>{
            if(userdata !=null){
                console.log("duplicate user");
                return res.status(403).json({
                    message:'Forbidden',
                    data:'This email already exists!'
                })
            }
            else {
                var username = new user(req.body);
                username.save()
                    .then((userdata) =>{
                        return res.status(201).json({
                            message:'Created',
                            data:userdata
                        })
                    })
                    .catch((err) =>{
                        return res.status(500).json({
                            message:'Error',
                            data:err});
                    });
            }
        })
        .catch((err)=>{
            return res.status(500).json({
                message:'Error',
                data:err
            })
        })
};

exports.find_a_user = function(req, res){
    console.log("find_a_user");
    user.findById(req.params.id)
        .then((userdata)=>{
            if(userdata == null){
                return res.status(404).json({
                    message:'Not Found',
                    data:[]
                });
            }
            else return res.status(200).json({
                message:'OK',
                data:userdata
            });
        })
        .catch((err)=>{
            return res.status(500).json({
                message:'Error',
                data:err
            });
        });
};

exports.replace_a_user = function(req, res){
    console.log("replace_a_user");
    user.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new:true})
        .then((userdata)=>{
            return res.status(200).json({
                message:'OK',
                data:userdata
            });
        })
        .catch((err)=>{
            return res.status(500).json({
                message:'Error',
                data:err
            });
        });
};

exports.delete_a_user = function(req, res){
    console.log("delete_a_user");
    user.deleteOne({_id:req.params.id})
        .then((result)=>{
            if(result.result.n == 0)
            return res.status(404).json({
                message:'Not Found',
                data:[]
            });
            return res.status(200).json({
                message:'OK',
                data:'Delete succesfully'
            })
        })
        .catch((err)=>{
            return res.status(500).json({
                message:'Error',
                data:err
            });
        });
};

exports.return_the_list = function(req, res){
    var skip = (req.query.skip == undefined) ? undefined : parseInt(req.query.skip);
    var limit = (req.query.limit == undefined) ? undefined : parseInt(req.query.limit);
    var where = (req.query.where == undefined) ? undefined :JSON.parse(req.query.where);
    var sort = (req.query.sort == undefined) ? undefined :JSON.parse(req.query.sort);
    var select = (req.query.select == undefined) ? undefined :JSON.parse(req.query.select);
    var count = (req.query.count == "true") ? true : false;
    task.find(where)
        .sort(sort)
        .select(select)
        .skip(skip)
        .limit(limit)
        .then( (taskdata) =>  {
            if (count) {
                return res.status(200).json({message:'OK',data:taskdata.length});
            }
            console.log(task.length);
            if (taskdata.length == 0){
                return res.status(404).json({message:'Not Found',data:[]});
            }
            res.status(200).json({message:'OK',data:taskdata});
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

exports.create_new_task = function(req, res){
    console.log("create_new_task");
    if(!req.body.name && !req.body.deadline){
        return res.status(400).json({
            message:'Bad Request',
            data:'name or deadline can not be empty'
        });
    }
    var taskname = new task(req.body);
    taskname.save()
        .then((taskdata)=>{
            return res.status(201).json({
                message:'Created',
                data:taskdata
            });
        })
        .catch((err)=>{
            return res.status(500).json({
                message:'Error',
                data:err
            });
        });
};

exports.find_a_task = function(req, res){
    console.log("find_a_task");
    task.findById(req.params.id)
        .then((taskdata)=>{
            if(taskdata == null){
                return res.status(404).json({
                    message:'Not Found',
                    data:[]
                });
            }
            else return res.status(200).json({
                message:'OK',
                data:taskdata
            });
        })
        .catch((err)=>{
            return res.status(500).json({
                message:'Error',
                data:err
            });
        });
};

exports.replace_a_task = function(req, res){
    console.log("replace_a_task");
    task.findOneAndUpdate({"_id":req.params.id},{$set:req.body},{new:true})
        .then((taskdata)=>{
            return res.status(200).json({
                message:'OK',
                data:taskdata
            });
        })
        .catch((err)=>{
            return res.status(500).status.json({
                message:'Error',
                data:err
            });
        });
};

exports.delete_a_task = function(req, res){
    console.log("delete_a_task");
    task.remove({_id:req.params.id})
        .then((result)=>{
            if(result.result.n == 0){
                return res.status(404).json({
                    message:'Not Found',
                    data:[]
                });
            }
            else return res.status(200).json({
                message:'OK',
                data:'Delete successfully'
            });
        })
        .catch((err)=>{
            return res.status(500).json({
                message:'Error',
                data:err
            });
        });
};
