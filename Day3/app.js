

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
console.log(generateRandomColor()); 

function changeBackgroundColor(){
    document.body.style.backgroundColor = generateRandomColor();
    
}










// function joined(){
//     let title=document.getElementById('title');
//     let btn=document.getElementById('btn');
//     console.log(title);
//     btn.style.display= 'none';
//     // title.innerText="Thank you";
//     title.innerHTML="Thank you";
// }

// let demo=document.getElementById('demo');
// console.log(demo);
// demo.innerHTML='<h1>Welcome to the JS BootCamp</h1>'