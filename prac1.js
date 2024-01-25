let marks={pri: 45, avi: 34, kajal:56}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log(Object.keys(marks)[i]," : ",marks[Object.keys(marks)[i]]);
}

// same with for in loop
// for(key in marks){
//     console.log(key," : ",marks[key]);
// }