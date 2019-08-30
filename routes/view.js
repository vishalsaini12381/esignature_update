var express = require('express');
const axios = require('axios');
var branch = require('../model/branchSchema');
var staff = require('../model/staffSchema');
var document = require('../model/documentSchema');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET users listing. */
router.get('/admin', function(req, res, next) {
  res.render('admin/login');
});


router.get('/admin/dashboard', function(req, res, next) {
   res.render('admin/dashboard');
});



router.get('/admin/branch-list', function(req, res, next) {
  branch.find({}, function(err, data){
    if(err) throw err;
    // console.log('>>>>>>>>>>>>',data)
    res.render('admin/branch_list', {responceData : data});
   });
  });

router.get('/admin/branch-detail', function(req, res, next) {
  var staffList=[]
  var documentList=[]
  var mainData={};
  var hex = /[0-9A-Fa-f]{6}/g;
  checkId = (hex.test(req.query.id))? "success" : "fail";
  console.log('checkId',checkId)
  if(checkId=='success'){
    branch.findById({_id: req.query.id })
        .then(async (response)=>{
          const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
            if(response){
                staff.find({branchId: response._id })
                    .then(async (staffResponse)=>{
                      if(staffResponse){
                        staffList.push(staffResponse);
                        await waitFor(50);
                        }
                    },(e)=>{
                    })
                    await waitFor(50);

                    document.find({branchId: response._id })
                    .then(async (documentResponse)=>{
                      if(documentResponse){
                        documentList.push(documentResponse);
                        await waitFor(50);
                        }
                    },(e)=>{
                    })
                    await waitFor(50);
                    
                    mainData.response= response 
                    mainData.staffData= staffList
                    mainData.documentData= documentList
                    console.log("mainData",mainData);
                    res.render('admin/branch_detail',{code : 100,message:"Branch detail",data:mainData});
                }else{
                  res.render('admin/branch_detail',{code : 101,message:"No branch avaliable",data:[]});
                }
            
        },(e)=>{
          res.render('admin/branch_detail',{code : 999,message:"Some error found",data:[]});
        })
      }else{
        res.render('admin/branch_detail',{code : 101,message:"No branch avaliable",data:[]});
      }
});

router.get('/admin/add-new-branch', function(req, res, next) {
  res.render('admin/add_new_branch');
});

router.get('/admin/staff-list', function(req, res, next) {

    staff.find({})
    .populate('branchId','branchName branchMobile branchEmailId branchPostalCode branchCountry branchCity branchAddress')
        .then(async (response)=>{
          const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
            if(response){
              console.log("response",response)
                res.render('admin/staff/staff_list',{code : 100,message:"Document List",data:response});
            }else{
              res.render('admin/staff/staff_list',{code : 101,message:"No Document avaliable",data:[]});
            }
            
        },(e)=>{
          res.render('admin/staff/staff_list',{code : 999,message:"Some error found",data:[]});
        })

});
router.get('/admin/staff-detail', function(req, res, next) {
   //res.send('id: ' + req.query.id);
  console.log(req.query.id)
  res.render('admin/staff/staff_detail',{query : req.query.id});
});
router.get('/admin/add-new-staff', function(req, res, next) {
  res.render('admin/staff/add_new_staff');
});



router.get('/admin/document-list', function(req, res, next) {
  var staffList=[]
  var mainData={};
  document.find()
        .then(async (response)=>{
          const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
            if(response){
              console.log('================>>>>>>>>>',response)
                staff.findById({_id: response.staffId })
                    .then(async (staffResponse)=>{
                      if(staffResponse){
                        staffList.push(staffResponse);
                        await waitFor(50);
                        }
                    },(e)=>{
                    })
                    await waitFor(50);
                    mainData.response= response 
                    mainData.staffData= staffList
                    console.log("mainData",mainData);
                    res.render('admin/document_list',{code : 100,message:"Document List",data:mainData});
                }else{
                  res.render('admin/document_list',{code : 101,message:"No Document avaliable",data:[]});
                }
            
        },(e)=>{
          res.render('admin/document_list',{code : 999,message:"Some error found",data:[]});
        })
      
});
router.get('/admin/document-detail', function(req, res, next) {
  var staffList=[]
  var mainData={};
  document.findById({_id: req.query.id })
        .then(async (response)=>{
          const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
            if(response){
              console.log('================>>>>>>>>>',response)
                staff.findById({_id: response.staffId })
                    .then(async (staffResponse)=>{
                      if(staffResponse){
                        staffList.push(staffResponse);
                        await waitFor(50);
                        }
                    },(e)=>{
                    })
                    await waitFor(50);
                    mainData.response= response 
                    mainData.staffData= staffList
                    console.log("mainData",mainData);
                    res.render('admin/document_detail',{code : 100,message:"Document List",data:mainData});
                }else{
                  res.render('admin/document_detail',{code : 101,message:"No Document avaliable",data:[]});
                }
            
        },(e)=>{
          res.render('admin/document_detail',{code : 999,message:"Some error found",data:[]});
        })
});



router.get('/admin/logout', function(req, res, next) {
  res.render('admin/logout');
});

/////////////////////////////////////STAFF///////////////////////////////
router.get('/staff', function(req, res, next) {
  res.render('staff/login');
});
router.get('/staff/login', function(req, res, next) {
  res.render('staff/login');
});
router.get('/staff/dashboard', function(req, res, next) {
  res.render('staff/dashboard');
});
router.get('/staff/upload-document', function(req, res, next) {
  res.render('staff/uploaddoc');
});
router.get('/staff/my-profile', function(req, res, next) {
  res.render('staff/my_profile');
});
router.get('/staff/upload-new-document', function(req, res, next) {
  res.render('staff/upload_new_document');
});
router.get('/staff/exixting-document', function(req, res, next) {
  res.render('staff/exixting_document');
});
router.get('/staff/document-detail', function(req, res, next) {
  res.render('staff/document_detail',{query : req.query.id});
});

router.get('/staff/set-mark-area', function(req, res, next) {
  res.render('staff/set_mark_area',{query : req.query.id});
});

router.get('/staff/logout', function(req, res, next) {
  res.render('staff/logout');
});
/////////////////////////////////////STAFF///////////////////////////////








router.get('/admin/new', function(req, res, next) {
  res.render('admin/new');
});

module.exports = router;
