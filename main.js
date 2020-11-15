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
        }, 1000);         
        const direction= event.wheelDelta < 0 ? 1 : -1;
        scroll(direction)
    })        
    
    function scroll(direction){        
        if(direction === 1){  
          const isLast = sections.length-1 === currentSectionIndex;
          if(isLast) return;

        }else if(direction === -1){  
            const isFirst = 0 === currentSectionIndex;
            if(isFirst) return;
        }     
        currentSectionIndex =currentSectionIndex + direction; 
        scrollSection();
    }

    function scrollSection(){
        sections[currentSectionIndex].scrollIntoView({
             behavior: "smooth",
             block: "start",
        })
    }
})