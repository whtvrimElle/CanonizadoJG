/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.home__scroll', { delay: 200 });
sr.reveal('.home__img', { origin: 'right', delay: 400 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 500 });
sr.reveal('.about__subtitle', { delay: 300 });
sr.reveal('.about__profession', { delay: 400 });
sr.reveal('.about__text', { delay: 500 });
sr.reveal('.about__cv', { delay: 600, interval: 200 });
sr.reveal('.about__social-icon', { delay: 600, interval: 200 });

/*SCROLL SKILLS*/

sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 });
sr.reveal('.skills__img', { delay: 400 });

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {});
sr.reveal('.contact__text', { interval: 200 });
sr.reveal('.contact__input', { delay: 400 });
sr.reveal('.contact__button', { delay: 600 });

/*GALLERY BOOTSTRAP*/
var numberArray = ['1', '2', '3', '4', '5', '6'];
for (var i = 0; i < numberArray.length; i++) {
  let imageIdTag = '#photo' + numberArray[i];
  $(imageIdTag).click(function () {
    let srcLink = $(imageIdTag + ' img').attr('src');
    $('#modalImage').attr('src', srcLink);
    $('#ex1').modal();
  });
}

/* VALIDATION */
const nameIn = document.forms["contact"]["nameIn"];
const emailIn = document.forms["contact"]["emailIn"];
const messageIn = document.forms["contact"]["messageIn"];

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

nameIn.addEventListener("blur", nameVerify, true);
emailIn.addEventListener("blur", emailVerify, true);
messageIn.addEventListener("blur", messageVerify, true);

function nameVerify(){
    if (nameIn.value != ""){
        nameIn.style.border = "";
        nameError.innerHTML = "";
      return true;
    }
  }
  
  function emailVerify(){
    if (emailIn.value != ""){
        emailIn.style.border = "";
        emailError.innerHTML = "";
      return true;
    }
  }
  
  function messageVerify(){
    if (messageIn.value != ""){
        messageIn.style.border = "";
        messageError.innerHTML = "";
      return true;
    }
  }

  function loadingChange(){

    var state = $("#submitContact");
    
    if (state.children().length >= 1) {
        $(state).empty();
        $(state).html('Send');
      }
    else{
        $(state).empty();
        var loadingElement = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
        $(state).append(loadingElement);
    }

  }

$( "#contactForm" ).submit(function() {
    
    if (nameIn.value == "" || emailIn.value == "" || message.value == ""){

        var variables = [nameIn, emailIn, messageIn];
        var errors = [nameError, emailError, messageError];
        var countErrors = [];

        for(i = 0; i < variables.length; i++){

          if (variables[i].value == ""){

            variables[i].style.border = "1.3px solid red";
              switch (i){

                case 0:
                    errors[i].textContent = "Please enter the Name";
                    break;
                case 1:
                    errors[i].textContent = "Please enter the Email";
                    break;
                case 2:
                    errors[i].textContent = "Please enter the Message";
                    break;

              }

            variables[i].focus();
            countErrors.push(i);

          }

        }

        if(countErrors.length > 0){
        
            return false;
        
        }
    
    }
 }
