document.addEventListener('DOMContentLoaded', ()=>{
    console.log("cos");
    const rootElement=document.getElementById("root");
    const sections= document.querySelectorAll('section');
    
    document.addEventListener('mousewheel', function (event){
        console.log(event.wheelDelta)
    })
})