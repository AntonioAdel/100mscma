// create node server

// require("express") b return mno function should be called
// to return object that contains all functions in express library

var express = require("express");
var app = express();
var mongoose = require("mongoose")
//Citizen APIS
var CitizenAPIS = require('./apis/citizen')
var DoctorAPIS = require('./apis/doctor')

//Medical Organization APIS
//Relations APIS
//Address APIS
var AddressAPIS = require('./apis/commonAPI/address.api')
var HospitalAPIS = require('./apis/hospital')

var MedicalOrgAPIS = require('./apis/medical_organization')


var cors = require('cors')
var session = require('express-session')
var uuid = require("uuid/v4")

// convert buffer data to json object with post requrests
app.use(express.json())
 app.use(session({ secret: "mysecret", genid: uuid }))
 app.use(cors({
  
   // origin:"https://mo3ty.com"
 }))

// db connection
//mongoose.connect("mongodb://admnin:admin123@ds239071.mlab.com:39071/mscmadb", { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect("mongodb+srv://Antonio:AntonioAdmin@cluster0-hy8tw.mongodb.net/100mscma?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })


//mongoose.connect("mongodb://localhost:27017/100mscmadb",{ useNewUrlParser: true, useUnifiedTopology: true })



CitizenAPIS(app)
DoctorAPIS(app)
HospitalAPIS(app)
AddressAPIS(app)
MedicalOrgAPIS(app)

// awl api or awl endpoint
app.get("/", (req, resp) => {
  resp.send("server is running tonton yess...");
});

app.get("/user", (req, resp) => {
  resp.json({ id: 1, name: "ahmed", age: 30 });
});

app.get("/users", (req, resp) => {
  resp.json([
    { id: 1, name: "ahmed", age: 30 },
    { id: 1, name: "ahmed", age: 30 },
    { id: 1, name: "ahmed", age: 30 },
    { id: 1, name: "ahmed", age: 30 },
    { id: 1, name: "ahmed", age: 30 },
    { id: 1, name: "ahmed", age: 30 },
  ]);
});


app.listen(process.env.PORT); // create node server
//app.listen(process.env.PORT||3000); // create node server
//app.listen(3000); // create node server
