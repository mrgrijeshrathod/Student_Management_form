const express = require('express')
const { getStudents, addStudent, getStudent, removeStudent, updateStudent } = require('../controller/studentController')
  const router = express.Router()


// METHOD : GET 
//ENDPOINT : "/api/student"
//DESC : VIEW ALL STUDENTS
//ACCESS : PUBLIC  
router.get("/",getStudents)

// METHOD : POST 
//ENDPOINT : "/api/student"
//DESC : CREATE STUDENTS
//ACCESS : PUBLIC  
router.post("/",addStudent)


// METHOD : GET 
//ENDPOINT : "/api/student"
//DESC : VIEW SINGLE STUDENTS/:ID
//ACCESS : PUBLIC  
router.get("/:id",getStudent)

// METHOD : GET 
//ENDPOINT : "/api/student/:ID"
//DESC : DELET STUDENT
//ACCESS : PUBLIC  
router.delete("/:id",removeStudent)

// METHOD : PUT
//ENDPOINT : "/api/student/:ID"
//DESC : UPDATE  STUDENT
//ACCESS : PUBLIC  
router.put("/:id",updateStudent)


module.exports = router