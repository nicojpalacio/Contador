// const btnAdd = document.getElementById("botonsumar")
// const btnSubs = document.getElementById("botonrestar")

const quantityHtml = document.getElementById("quantity")
const inputSuma = document.getElementById("inputSuma")
const inputResta = document.getElementById("inputResta")
const btnReset = document.getElementById("reset")

let quantity = 0;
quantityHtml.innerHTML = quantity;

const add = () => {
    quantity++;
    quantityHtml.innerHTML = quantity;
}

const subs = () => {
    if (quantity===0) {
        return;
    } else {
        quantity--;
        quantityHtml.innerHTML = quantity;
    }
    
}

const addTen = () =>{
    quantity += 10;
    quantityHtml.innerHTML = quantity;
}

const subsTen = () =>{
    if (quantity<=9) {
        quantity=0;
        quantityHtml.innerHTML = quantity
    } else {
        quantity -= 10;
        quantityHtml.innerHTML = quantity;
    }
    
}

const addInput = () =>{
    quantity = quantity + parseInt(inputSuma.value);
    quantityHtml.innerHTML = quantity;
    
}

const subsInput = () =>{
    quantity = quantity - parseInt(inputResta.value);
    quantityHtml.innerHTML = quantity;
}

const reset = () =>{
    quantity = 0
    quantityHtml.innerHTML = quantity
}

// btnAdd.addEventListener("click", ()=>{
//     add();
//     quantityHtml.innerHTML = quantity;
//     console.log(quantity)
// })


