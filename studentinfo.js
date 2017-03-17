/**
 * Created by Kh Akash on 3/18/2017.
 */

const fs = require('fs');

var add = (name,email,address) => {

    try{
        var students = JSON.parse(fs.readFileSync('student.json').toString());

    }catch (error){
        var students = [];
    }

    var student = {
        name: name,
        email: email,
        address: address
    };

    students.push(student);

    fs.writeFile('student.json', JSON.stringify(students), (err) => {
        if (err) throw err;
        console.log("student insert successfully");
    });
};

var show_all = () => {
    try{
        var students = JSON.parse(fs.readFileSync('student.json').toString());

    }catch (error){
        var students = [];
    }
    console.log(students);
};

var show = (email) => {
    console.log("show a single student information");
};

var update = (previous_email, name=undifine, email=undifine, address=undifine) => {
    console.log("update a single student information");
};

var delete_student = (email) => {
    console.log("delete method call");
};

module.exports = {
    add,
    show_all,
    show,
    update,
    delete_student
};