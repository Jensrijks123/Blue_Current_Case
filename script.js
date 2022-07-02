
var inputCheckboxHidden = document.querySelector('#hidden');
const option1 = document.querySelector('.option1');
var inputCheckboxMove = document.querySelector('#umove');
const option2 = document.querySelector('.option2');
const euroSpan = document.querySelector('.span-euro');
const volgendeButton = document.querySelector('.volgende-button');
const volgendeButtonError = document.querySelector('.volgende-button-error');

// Hidden checkbox
inputCheckboxHidden.addEventListener('click', ()=>{
    inputCheckboxMove.checked = false;
    option2.className += " option-2";
    option1.classList.remove("option-1");
    if (inputCheckboxMove.checked == false && inputCheckboxHidden.checked == false) {
        option2.classList.remove("option-2");
        euroSpan.innerHTML = "&euro;0"
    }
    else if (inputCheckboxHidden.checked) {
        euroSpan.innerHTML = "&euro;1.519"
    }
});

// U:move checkbox
inputCheckboxMove.addEventListener('click', ()=>{
    inputCheckboxHidden.checked = false;
    option1.className += " option-1";
    option2.classList.remove("option-2");
    if (inputCheckboxMove.checked == false && inputCheckboxHidden.checked == false) {
        option2.classList.remove("option-2");
        option1.classList.remove("option-1");
        euroSpan.innerHTML = "&euro;0"
    }
    else if (inputCheckboxMove.checked) {
        euroSpan.innerHTML = "&euro;1.219"
    }
});

// Check if input is checked, only then go to the next page
volgendeButton.addEventListener('click', ()=>{
    if (inputCheckboxHidden.checked == true || inputCheckboxMove.checked == true) {
        window.location.href = "persoonsgegevens.html";
    } 
    else {
        volgendeButton.classList.add('volgende-button-error');
        setTimeout(() => {
            volgendeButton.classList.remove('volgende-button-error');
        
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
          }, 3000);
    }
});

