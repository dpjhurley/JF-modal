'use strict';
//So my modal will only open when the item is out of stock, this will be fetched by an API in the real application
const itemAvaliable = false;

const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const emailBtn = document.querySelector('.emailBtn');
const submitBtn = document.querySelector('.modal__input--submitBtn');
const closeBtn = document.querySelector('.modal__content--closeBtn');
const emailAddress = document.querySelector('.modal__input--address');
const addToBasket = document.querySelector('.toBasketBtn')


const closeModal = () => ( backdrop? backdrop.style.display = 'none' : null )

const closeByWindow = (e) => (e.target == backdrop ? backdrop.style.display = 'none': null)

const openEmailModal = () => (backdrop.style.display = 'flex')

//checking if there is something in the input feild before submitting the form
//the email itself is best validated on the backend, better way to protect the database
const formValidate = () => {
    if (emailAddress.value.length > 0) {
        submitBtn.style.backgroundColor = 'rgb(182, 189, 0)';
        submitBtn.disabled = false;

        submitBtn.addEventListener('mouseenter', () => (submitBtn.style.backgroundColor = 'rgb(135, 139, 0)'))
        submitBtn.addEventListener('mouseleave', () => (submitBtn.style.backgroundColor = 'rgb(182, 189, 0)'))
    } else {
        submitBtn.style.backgroundColor = 'grey';
        submitBtn.disabled = true;
    }
}

//check to see if there is stock when the page loads, if there isnt the text states were out of stock and both buttons 
//take the user to the email alerts sign up modal
if (!itemAvaliable) {
    emailBtn.addEventListener('click', openEmailModal);
    addToBasket.addEventListener('click', openEmailModal);

    const modalTitle = document.querySelector('.modal__content--title');
    modalTitle.innerHTML = `Sorry we're out of stock at the moment, sign up for our stock alert!`;
}  

window.addEventListener('click', closeByWindow)

closeBtn.addEventListener('click', closeModal)

emailAddress.addEventListener('keyup', formValidate)

//this would also have to do an API fetch request to send the data in the form to the database and update the emailing list
submitBtn.addEventListener('click', closeModal)
