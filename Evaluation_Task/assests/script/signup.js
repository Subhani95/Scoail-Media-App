/*
System: Social Media App
Developer:Hassan Subhani
Organization: Programmer Force
Purpose: This file signup.js is responsible to handle most of the validations required in Signup
We use localStorage to save users data
*/
function membersData() {
  //sign up fields
  var fname = document.getElementById('fullname').value
  var email = document.getElementById('email').value
  var pass = document.getElementById('password').value
  var confirmpass = document.getElementById('confirmpassword').value
  //reg defined for validation i used regular expression if user doesnot enter or entered data does not match the expression he/she wont log in
  var regexfname = /^[a-zA-Z ]{3,30}$/
  var regexemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  var regexpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,100}$/
  var regexconfpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,100}$/

  let membersrecord = new Array()
  membersrecord = JSON.parse(localStorage.getItem('users'))
    ? JSON.parse(localStorage.getItem('users'))
    : []
  if (
    membersrecord.some((e) => {
      return e.email === email
    })
  ) {
    alert('Email Already Taken')
  } else {
    //validation process //mutliple alerts
    if (fname === '' || !regexfname.test(fname)) {
      alert('Please Enter Valid Full name')
    } else if (email === '' || !regexemail.test(email)) {
      alert('Please Enter Valid Email')
    } else if (pass === '' || !regexpassword.test(pass)) {
      alert('Please Enter atleast 8 Chracters and One Capital Letter')
    } else if (confirmpass === '' || !regexconfpass.test(confirmpass)) {
      alert('Please Enter correct password again')
    } else if (confirmpass !== pass) {
      alert('Your Password is not Similar')
    } else if (pass !== '') {
      membersrecord.push({
        fullname: fname,
        email: email,
        password: pass,
        confirmpassword: confirmpass,
      })
      localStorage.setItem('users', JSON.stringify(membersrecord))
      window.location.href = 'signin.html'
    }
  }
}
