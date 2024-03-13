let calculation = localStorage.getItem('calculation') || '';

function displayOnPage() {
    document.querySelector('.js-calculation').innerHTML = calculation;
};
displayOnPage();

function updateCalculation(number) {
    calculation += number;
    console.log(calculation);
    localStorage.setItem('calculation', calculation);
    displayOnPage();
};