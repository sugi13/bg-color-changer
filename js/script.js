let Button = document.getElementById("change-btn");
let colorDetail = document.getElementById("detail");
let toChangeColor = document.body;

function changeBackground(){
    let color1 = generateColor();
    let color2 = generateColor();
    let color3 = generateColor();

    let colors = `rgb(${color1}, ${color2}, ${color3})`;
    
    colorDetail.textContent = colors;
    toChangeColor.style.backgroundColor = colors;
}


function generateColor(){
    return Math.floor(Math.random() * 256);
}


Button.addEventListener("click", changeBackground)