//validation to check if the entered email and password against that email is present inside our look storage

function datavalidation() {
  email = document.getElementById('email').value
  pass = document.getElementById('password').value

  let membersrecord = new Array()
  membersrecord = JSON.parse(localStorage.getItem('users'))
  if (
    membersrecord.some((e) => {
      return e.email == email && e.password == pass
    })
  ) {
    window.location.href = 'dashboard.html' // successful login user moved toward dashboard
  } else {
    alert('Account Does Not Exist') //invalid
  }
}
