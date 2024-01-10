// Object de-structuring and JSON API

const course = {
    courseName : "JS - Chai aur Code",
    courePrice : 999,
    courseInstructor : "Hitesh Choudhary"
}

const {courseInstructor : inst} = course // object de-structuring

console.log(course.courseInstructor);
console.log(inst);
 
