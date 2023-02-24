const cnvrtBtn = document.querySelector(`button`);

cnvrtBtn.addEventListener(`click`, inchesToCm);

function inchesToCm() {
    let inches = document.querySelector(`#inputInches`).value;
    inches = Number(inches);

    const cm = document.querySelector(`#result`);
    cm.innerHTML = `${inches} inches = ${inches*2.54} centimeters`;
}