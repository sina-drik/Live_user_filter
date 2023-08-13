
// DOM element
const userContainer =document.getElementById('result');
const filter=document.getElementById('filter');

// Event listener
filter.addEventListener('input',(e)=>filterUsers(e.target.value))

// Public variables
const api='https://randomuser.me/api/?results=50';
let usersList=[];

showReceivedUsers();


// Functions
async function showReceivedUsers(){
    const response=await fetch(api);
    const {results}= await response.json();
    userContainer.innerHTML=''
    results.forEach(user => {
        const li =document.createElement('li');
        usersList.push(li)
        li.innerHTML=`
        <img src="${user.picture.medium}">
        <div class="user-info">
            <h4 class="u-name">${user.name.first} , ${user.name.last}</h4>
            <p>${user.location.country} , ${user.location.city}</p>
        </div>
        `
        userContainer.appendChild(li)
    });
}

function filterUsers(inputTerms){
    usersList.forEach((item)=>{
        console.log(item.innerText)
        if(item.innerText.toLowerCase().includes(inputTerms.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}

