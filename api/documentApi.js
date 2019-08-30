var docApis = require('../model/documentSchema');
var mongoose = require('mongoose');


function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

var uploadDocument = ((req,res)=>{
    try{
        const {staffId,document,document_name,plate_number,message,participant,branchId } = req.body
        console.log('req.body',req.body)
        if(staffId){
            if(branchId){
                if(document){
                    if(document_name){
                        if(plate_number){
                            if(message){
                                if(participant){
                                    
                                            var hex = /[0-9A-Fa-f]{6}/g;
                                            checkId = (hex.test(staffId))? "success" : "fail";
                                            // console.log('checkId',checkId)
                                            if(checkId=='fail'){
                                                return res.json({
                                                    status   : true,
                                                    code     : 101,
                                                    message  : 'User not exist',
                                                    data     : {}
                                                })
                                            }

                                        
                                            var staffRequest = new docApis ({
                                                staffId         : staffId,
                                                branchId        : branchId,
                                                document        : document,
                                                document_name   : document_name,
                                                plate_number    : plate_number,
                                                message         : message,
                                                participant     : participant
                                            });
                                            console.log('tttttttttt456545645656',staffRequest);
                                            staffRequest.save((err,resp)=>{
                                                // console.log('tttttttttt',resp);
                                                if (err){
                                                    return res.json({code:101,status: false, message: 'Error while adding staff.',data:{}});
                                                }else {
                                                    return res.json({code:100,status: true, message: 'Document SuccessFully Saved.',data:{}})
                                                }
                                            })
                                            
                                    }else{
                                        return res.json({
                                            status   : true,
                                            code     : 99,
                                            message  : 'Participant is required field.',
                                            data     : {}
                                        })
                                    }
                                }else{
                                    return res.json({
                                        status   : true,
                                        code     : 99,
                                        message  : 'Message is required field.',
                                        data     : {}
                                    })
                                }
                            }else{
                                return res.json({
                                    status   : true,
                                    code     : 99,
                                    message  : 'Plate No is required field.',
                                    data     : {}
                                })
                            }
                        }else{
                            return res.json({
                                status   : true,
                                code     : 99,
                                message  : 'Document Name is required field.',
                                data     : {}
                            })
                        }
                    }else{
                        return res.json({
                            status   : true,
                            code     : 99,
                            message  : 'Document is required field.',
                            data     : {}
                        })
                    }
            }else{
                return res.json({
                    status   : true,
                    code     : 99,
                    message  : 'branchId is required field.',
                    data     : {}
                })
            }
        }else{
            return res.json({
                status   : true,
                code     : 99,
                message  : 'staffId is required field.',
                data     : {}
            })
        }
    }catch(error){
        return res.json({
            status   : false,
            code     : 103,
            message  : 'SomeThing Went Wrong',
            data     : {}
        })
    }
})


var documentList = ((req,res)=>{
    try{
        const {staffId } = req.body
        console.log('req.body',req.body)
        if(staffId){
            var hex = /[0-9A-Fa-f]{6}/g;
            checkId = (hex.test(staffId))? "success" : "fail";
            // console.log('checkId',checkId)
            if(checkId=='fail'){
                return res.json({
                    status   : true,
                    code     : 101,
                    message  : 'User not exist',
                    data     : {}
                })
            }

            docApis.find({staffId:staffId}).then((response)=>{
                console.log('88888888888888',response);
                if(response){
                    return res.json({code:100,status: true, message: 'Document List',data : response});
                }else{
                    return res.json({code:101,status: false, message: 'No Document Avaliable',data : []});
                }
            })
                                    
        }else{
            return res.json({
                status   : true,
                code     : 99,
                message  : 'staffId is required field.',
                data     : {}
            })
        }
    }catch(error){
        return res.json({
            status   : false,
            code     : 103,
            message  : 'SomeThing Went Wrong',
            data     : {}
        })
    }
})

var documentDetail = ((req,res)=>{
    try{
        const {documentId } = req.body
        console.log('req.body',req.body)
        if(documentId){
            var hex = /[0-9A-Fa-f]{6}/g;
            checkId = (hex.test(documentId))? "success" : "fail";
            // console.log('checkId',checkId)
            if(checkId=='fail'){
                return res.json({
                    status   : true,
                    code     : 101,
                    message  : 'User not exist',
                    data     : {}
                })
            }

            docApis.findById({_id: mongoose.Types.ObjectId(documentId) })
            .then((response)=>{
                console.log('88888888888888',response);
                if(response){
                    return res.json({code:100,status: true, message: 'Document Detail',data : response});
                }else{
                    return res.json({code:101,status: false, message: 'No Document Avaliable',data : []});
                }
            },(e)=>{
                console.log('eeeeeeeeeeeeee',e);
                return res.json({status: false, message:'Some Error'})
            })
        }else{
            return res.json({
                status   : true,
                code     : 99,
                message  : 'Document Id is required field.',
                data     : {}
            })
        }              
    }catch(error){
        return res.json({
            status   : false,
            code     : 103,
            message  : 'SomeThing Went Wrong',
            data     : {}
        })
    }
})


var updateDocument = ((req,res)=>{
    console.log('///////////////////',req.body)
    try {
        const { documentId, document } = req.body
        if(documentId){
            docApis.findById({_id: mongoose.Types.ObjectId(documentId) }).then((documentData)=>{
                if(documentData=='' || documentData==null){
                    return res.json({code:101,status: false, message: 'No Document Avaliable',data : []});
                }else{
                    if(document){
                            var detail = {
                                document: document
                            };
                            docApis.findOneAndUpdate({_id: mongoose.Types.ObjectId(documentId)},detail).then((response)=>{
                                    console.log('88888888888888',response);
                                    if(response=='' ||  response==null){
                                        return res.json({code:101,status: false, message: 'Some error found',data : []});
                                    }else{
                                        return res.json({code:100,status: true, message: 'Document updaed successfully.',data : response});
                                    }
                                },(e)=>{
                                    console.log('eeeeeeeeeeeeee',e);
                                    return res.json({code:102,status: false, message: 'Some error found',data : []});
                                })
            }else{
                return res.json({
                    status   : false,
                    code     : 99,
                    message  : 'Document is required field.',
                    data     : {}
                })
            }
                }
            },(e)=>{
                return res.json({code:102,status: false, message: 'Some error found',data : []});
            })

        }else{
                return res.json({
                    status   : false,
                    code     : 99,
                    message  : 'Document-Id is required field.',
                    data     : {}
                })
            }
        }
     catch(error){
         console.log('99999999999',error);
         return res.json({code:102,status: false, message: 'Some error found',data : []});
     }
})


module.exports = {uploadDocument,documentList,documentDetail,updateDocument}