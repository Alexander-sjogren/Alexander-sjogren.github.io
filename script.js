'use strict'
let githubData;

fetch('https://api.github.com/users/Alexander-sjogren/repos')
.then(respone => respone.json())
.then(data => githubData = data)
.then(json => {
    //console.log(githubData)
    for (let i=0; i<githubData.length; i++) {
        document.getElementById("githubul").insertAdjacentHTML("beforeend", "<li class='list-group-item'><a href='"+ githubData[i].html_url +"' target='_blank'>"+ githubData[i].name +"</a></li>");
    }  
})

fetch('aboutme.JSON')
.then(response => response.json())
.then (json => {
   // console.log(json)
    for (let i = 0; i < json.length; i++) {
        console.log(json[i].myString);
        document.getElementById("list1").insertAdjacentHTML("afterbegin", "<li class='list-group-item'>"+json[i].myString+"</li>")
    }
})