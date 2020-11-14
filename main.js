document.addEventListener('DOMContentLoaded', ()=>{
    console.log("cos");
    const rootElement=document.getElementById("root");
    const sections = document.querySelectorAll('section');
    let currentSectionIndex=0;
    let isThrottled = false;    

    document.addEventListener('mousewheel', function (event){
        
        if (isThrottled) return;
        isThrottled = true;

        setTimeout(function(){
            isThrottled = false;
        }, 750);

        const direction= event.wheelDelta < 0 ? 1 : -1;
        if(direction === 1){  
          const isLast = sections.length-1 === currentSectionIndex;
          if(isLast) return;

        }
        if(direction === -1){  
            const isFirst = 0 === currentSectionIndex;
            if(isFirst) return;
            }     
        currentSectionIndex += direction;      
        console.log(currentSectionIndex)
        sections[currentSectionIndex].scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
    
})