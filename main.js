//Create map2 quite similar as map of Array

Array.prototype.map2 = function(callBack){  //polyfill
    var output = [], length = this.length; //output to save; length => length of array
    for(let i = 0; i<length; i++){
        var result = callBack(this[i],i);
        output.push(result);
    }
    return output;
}

var courses = [
    'Java',
    'Javascript',
    'PHP',
    'python'
];

// function myCallback(course, index){
//     return `<h2>${course}</h2>`;     
// }
// var htmls = courses.map2(myCallback);

var htmls = courses.map2(function (course, index){
    return `<h2>${course}</h2>`;
})
// console.log(htmls);
courses.map((course,i)=>{
    console.log(`${i}: ${course}`);
})

// courses.map(function (course){
//     console.log( `<h2> ${course} </h2>`);
// });
// console.log(htmls);

