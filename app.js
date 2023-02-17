let screen = document.getElementById('output-screen');
let output = document.getElementById('output');
let p = document.getElementById('p');



/*  function display(params){
    p.innerHTML=screen.innerHTML+=params
}  */
 function display(dis){
    screen.innerHTML+=dis
    p.innerHTML+=dis
}
function Calculate(){
    try{
        screen.innerHTML=eval(screen.innerHTML)
        /* p.innerHTML="" */
    }
    catch(err){
        p.innerHTML=('Invalid')
    }
}
function Del(){
    p.innerHTML=screen.innerHTML.slice(0,-1)
    screen.innerHTML=screen.innerHTML.slice(0,-1)
}
function Clear(){
    screen.innerHTML=''
    p.innerHTML=''
} 



/* let typ =document.getElementById('typ')
let soo=document.getElementById('soo')

function hell(num2,num1){
    let c=num2+num1
    soo.innerHTML=typ.value
} */