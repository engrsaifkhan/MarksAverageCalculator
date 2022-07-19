function averagem() {

  let subject1marks = document.querySelector("#subject1marks").value;
  let subject2marks = document.querySelector("#subject2marks").value;
  let subject3marks = document.querySelector("#subject3marks").value;
let subject4marks = document.querySelector("#subject4marks").value;
let subject5marks = document.querySelector("#subject5marks").value;
let subject6marks = document.querySelector("#subject6marks").value;
let subject7marks = document.querySelector("#subject7marks").value;
let subject8marks = document.querySelector("#subject8marks").value;
let subject9marks = document.querySelector("#subject9marks").value;
let subject10marks = document.querySelector("#subject10marks").value;

subject1marks = Number(subject1marks)
subject2marks = Number(subject2marks)
subject3marks = Number(subject3marks)
subject4marks = Number(subject4marks)
subject5marks = Number(subject5marks)
subject6marks = Number(subject6marks)
subject7marks = Number(subject7marks)
subject8marks = Number(subject8marks)
subject9marks = Number(subject9marks)
subject10marks = Number(subject10marks)

let averagemarks = (subject1marks + subject2marks + subject3marks + subject4marks + subject5marks + subject6marks + subject7marks + subject8marks + subject9marks + subject10marks) / 10;


document.querySelector("#averagemarks").innerHTML = `${averagemarks}`;
 // alert(averagemarks);
}
