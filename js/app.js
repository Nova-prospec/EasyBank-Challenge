const flexContent = [
    {
        img: "images/icon-online.svg",
        heading: "Online Banking",
        text: "Our modern web and mobile applications allow you to keep track of your finanaces wherever you are in the world."
    },
    {
        img: "images/icon-budgeting.svg",
        heading: "Simple Budgeting",
        text: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
    },  
      {
        img: "images/icon-onboarding.svg",
        heading: "Fast Onboarding",
        text: "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
        img: "images/icon-api.svg",
        heading: "Open API",
        text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    }
    
]
const flexContainer = document.querySelector(".flex-container");
window.addEventListener("load", ()=>{
    loadContent()
})

function loadContent() {
    for (let i = 0; i < flexContent.length; i++) {
        let loopedText = `
        <div class="flex-items">
        <img src="${flexContent[i].img}" alt="">
        <h3>${flexContent[i].heading}</h3>
        <p>${flexContent[i].text}</p>  
    </div>
        
        `
        flexContainer.insertAdjacentHTML("beforeend", loopedText)
    }
}

const hamburger = document.querySelector(".hamburger");
const hiddenSection = document.querySelector(".hidden-section");
hamburger.addEventListener("click", ()=>{
    if (hamburger.classList.contains("is-active")) {
        hamburger.classList.remove("is-active")
        closeNav();
    }else{
        hamburger.classList.add("is-active");
        openNav();
    }
})

function openNav() {
    hiddenSection.classList.add("show-section");
}
function closeNav() {
    hiddenSection.classList.remove("show-section");
}