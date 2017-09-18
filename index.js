//Week2: In-class assignment

//change book title 
let el = document.querySelector('.item-page__main-title');
el.textContent = "I'm a book";
//change book image
let img = document.querySelector('.product-image__image--single');
img.src = "https://d30y9cdsu7xlg0.cloudfront.net/png/1009-200.png";
//change logo
let parent = document.querySelector('a.indigo-logo');
    //Thank you for posting your solution for the following, I was really stuck on the selector
let oldLogo = document.querySelector('[data-a8n=indigo-logo] svg');
let newLogo = document.createElement('img');
newLogo.src = "https://d30y9cdsu7xlg0.cloudfront.net/png/1009-200.png";
parent.replaceChild(newLogo, oldLogo);

//Change nav
let words = ['Books', 'More Books', 'Also Books', 'Paperback', 'Hardcover', 'Graphic Novels', 'Stationary', 'Gifts', 'Sale', 'Clearance'];
    //document.querySelectorAll('li[id^=""]'); was help from stack overflow - had a hard time selecting the 'li's
let items = Array.from(document.querySelectorAll('li[class^="top-nav"]'));
items.map( (item, index) => item.innerHTML = words[index]);

//Template literal - changing shipping content
const plants = { 'name' : 'African Violet', 'waterReq' : 'Daily', 'sunReq' : 'Full Sun'};
  function render(obj) {
    let myHTML = `
        <ul>
            <li>Name: ${obj.name}</li><br />
            <li>Water Requirement: ${obj.waterReq}</li><br />
            <li>Sun Requirement: ${obj.sunReq}</li><br />
        </ul>
    `;
    return myHTML;
  }

let pageHTML = document.querySelector('.shipping-text');
pageHTML.innerHTML = render(plants);

//Author link
let authorLink = document.querySelector('.item-contributor__link');
authorLink.innerHTML = `<a href="www.georgiancollege.ca">Georgian College</a>`;

//Cart
let cart = document.getElementById('add-to-cart-button');
cart.addEventListener('click', function () {
    document.documentElement.innerHTML = "";
});