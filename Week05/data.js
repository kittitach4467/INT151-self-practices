import { formatDate } from "./dateTime.js";

function c(...a) {
    console.log(...a)
}
export let students = [];

function addStudent(sid, name, major) {
    students.push({ sid: sid, name: name, major: major });
    
}

function ft(id) {
    return `${formatDate()} : ${JSON.stringify(students.filter(a => (a.sid === id)))}`
}

addStudent(101, "Kittitach", "IT")
addStudent(102, "May", "CS")
addStudent(103, "Bee", "CS")
addStudent(104, "Bee", "CS")


export { c, addStudent, ft as fil }
