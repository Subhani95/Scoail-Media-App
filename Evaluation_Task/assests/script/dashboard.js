/*
System: Social Media App
Developer: Hassan Subhani
Organization: Programmer Force
Purpose: This file dashboard.js is responsible to handle all the required data to fetch from an api and show it against the specific user
*/
//fetching data from APi

//initializing my id to a variable globallay
var userId = '618617c97f5fa0da2b0240fd'
function users() {
  const userdata = fetch('https://dummyapi.io/data/v1/user?limit=12', {
    method: 'GET',
    headers: {
      'app-id': userId,
    },
  })
  userdata
    .then(function (response) {
      console.log(response)
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      everyuser = document.getElementById('userData')
      let user = ''
      data.data.forEach((element) => {
        user += `
        <div class="message">
              <div class="profile-photo">
               <button id="btn" type="button" onclick=userProfile('${element.profile}')> <a href="profile.html"><img src="${element.picture}" /></a>
              </div></button>
              <div class="message-body">
              <button id="btn" type="button" onclick=specificPost('${element.id}')>
                <h5>${element.firstName}</h5></button>
                <p class="text-muted">${element.lastName}</p>
              </div>
            </div>`
      })
      everyuser.innerHTML = user
    })
}
//this is a onclick function for assessing user Post after filtering
function specificPost(id) {
  const userPost = fetch(
    'https://dummyapi.io/data/v1/user/' + id + '/post?limit=10',
    {
      method: 'GET',
      headers: {
        'app-id': userId,
      },
    }
  )
  userPost
    .then(function (response) {
      console.log(response)
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      newuser = document.getElementById('postByUser')
      let post = ''
      data.data.forEach((element) => {
        post += `
        <div class="feed">
              <div class="head">
                <div class="user">
                  <div class="profile-photo">
                    <img src="${element.owner.picture}" />
                  </div>
                  <div class="ingo">
                    <h3>${element.owner.firstName} &nbsp${element.owner.lastName}</h3>
                  </div>
                </div>
                <span class="edit">
                  <i class="fas fa-ellipsis-h"></i>
                </span>
              </div>

              <div class="photo">
                <img src="${element.image}" />
              </div>
              <div class="tags">
              <span>${element.tags}</span>
              </div>
              <div class="text">
              <span>${element.text}</span>
              </div>

              <div class="liked-by">
                           <i class="fas fa-thumbs-up"></i>&nbsp<span class="likes">${element.likes}</span>
                        </div>
              
              <div class="textField">
                        <input type="text" placeholder="Comments" id="comment">
                    </div>

            </div>`
      })
      newuser.innerHTML = post
    })
}
//userprofile
users()

//post function this will allow to show every post of a User and its limit is 25
function post() {
  const userPost = fetch('https://dummyapi.io/data/v1/post?limit=25', {
    method: 'GET',
    headers: {
      'app-id': userId,
    },
  })
  userPost
    .then(function (response) {
      console.log(response)
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      newuser = document.getElementById('postByUser')
      let post = ''
      data.data.forEach((element) => {
        post += ` 
        <div class="feed">
              <div class="head">
                <div class="user">
                  <div class="profile-photo">
                    <img src="${element.owner.picture}" />
                  </div>
                  <div class="ingo" class="userdata">
                    <h3>${element.owner.firstName} &nbsp${element.owner.lastName}</h3>
                    <span>${element.publishDate}</span>
                  </div>
                </div>
                <span class="edit">
                  <i class="fas fa-ellipsis-h"></i>
                </span>
              </div>

              <div class="photo">
                <img src="${element.image}" />
              </div>
              <div class="tags">
              <h5>Tags &nbsp<span class="spanTags">${element.tags}</span></h5>
              </div>
              <div class="text">
              <span>${element.text}</span>
              </div>

              <div class="liked-by">
                           <i class="fas fa-thumbs-up"></i>&nbsp<span class="likes">${element.likes}</span>
                        </div>
                        
              <div class="textField">
                        <input type="text" placeholder="Comments" id="comment">
                    </div>

            </div>`
      })
      newuser.innerHTML = post
    })
}
post()
// post part ends here
//comments section

//tags javascript starts from here . Fetching data from an Api
function tags() {
  const userTags = fetch('https://dummyapi.io/data/v1/tag?limit=10', {
    method: 'GET',
    headers: {
      'app-id': userId,
    },
  })
  userTags
    .then(function (response) {
      console.log(response)
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      newuser = document.getElementById('userTags')
      let str = ''
      data.data.forEach((element) => {
        str += ` <div class="tags">
                  <button  onclick="specificTagPost('${element}')"><h4>${element}<h4></button>
                  </div>`
      })
      newuser.innerHTML = str
    })
}
//calling this function onClick for assessing different post which have a similar tag
function specificTagPost(tag) {
  const userPost = fetch(
    'https://dummyapi.io/data/v1/tag/' + tag + '/post?limit=15',
    {
      method: 'GET',
      headers: {
        'app-id': userId,
      },
    }
  )
  userPost
    .then(function (response) {
      console.log(response)
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      newuser = document.getElementById('postByUser')
      let post = ''
      data.data.forEach((element) => {
        post += `
        <div class="feed">
              <div class="head">
                <div class="user">
                  <div class="profile-photo">
                    <img src="${element.owner.picture}" />
                  </div>
                  <div class="ingo">
                    <h3>${element.owner.firstName} &nbsp${element.owner.lastName}</h3>
                  </div>
                </div>
                <span class="edit">
                  <i class="fas fa-ellipsis-h"></i>
                </span>
              </div>

              <div class="photo">
                <img src="${element.image}" />
              </div>
              <div class="tags">
              <h5>Tags:<span class="spanTags">${element.tags}</span></h5>
              </div>
              <div class="text">
              <span>${element.text}</span>
              </div>

              <div class="liked-by">
                           <i class="fas fa-thumbs-up"></i>&nbsp<span class="likes">${element.likes}</span>
                        </div>
              <div class="textField">
                        <input type="text" placeholder="Comments" id="comment">
                    </div>

            </div>`
      })
      newuser.innerHTML = post
    })
}

tags()
