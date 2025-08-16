const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const loginPopBtn=document.querySelector('.loginPopUpButton');
const closeIcon=document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
loginPopBtn.addEventListener('click',()=>{
    wrapper.classList.add('active-PopUp');
});
closeIcon.addEventListener('click',()=>{
    wrapper.classList.remove('active-PopUp');
});