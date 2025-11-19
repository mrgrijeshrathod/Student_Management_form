const getStudents =(req,res)=>{
    res.send("all students")
}


const addStudent = (req,res)=>{
    res.send(" students created")
}


const getStudent = (req,res)=>{
    res.send(" view students")
}

const updateStudent = (req,res)=>{
    res.send("update students ")
}
const removeStudent = (req,res)=>{
    res.send("remove students ")
}


module.exports = {getStudents,addStudent,updateStudent,removeStudent,getStudent}
