class Scroller{
    constructor(rootSelector){
        const rootElement=document.getElementById(rootSelector);
        this.sections = document.querySelectorAll('section');
        this.isThrottled = false;   
        const currentSection=[...this.sections]
        const currentSectionIndex= currentSection.findIndex((element) => {
            return this.isScrolledIntoView(element)
        })
        this.currentSectionIndex= currentSectionIndex < 0 ? 0 : currentSectionIndex;
        this.drawNavigation()
    
    }
    isScrolledIntoView(element){
        const rect = element.getBoundingClientRect();
        const elemTop= rect.top;
        const elemBottom= Math.floor(rect.bottom);
        const isVissible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
        return isVissible;
    }

    listenScroll=(event)=>{
        if (this.isThrottled) return;
        this.isThrottled = true;

        setTimeout(()=>{
            this.isThrottled = false;
        }, 1000);         
        const direction= event.deltaY > 0 ? 1 : -1;    
        this.scroll(direction);
        
    }
    scroll(direction){            
        if(direction === 1){  
          const isLast = this.sections.length-1 === this.currentSectionIndex;
          if(isLast) return;

        }else if(direction === -1){  
            const isFirst = 0 === this.currentSectionIndex;
            if(isFirst) return;
        }     
        this.currentSectionIndex =this.currentSectionIndex + direction; 
        
        this.scrollSection();
    }
    scrollSection(){
        this.sections[this.currentSectionIndex].scrollIntoView({
             behavior: "smooth",
             block: "start",
        })
        this.activeNavigation();
    }
    drawNavigation(){
        this.navigationContainer = document.createElement('aside');
        this.navigationContainer.classList.add('scroller__navigation');
        const list = document.createElement('ul');

        this.sections.forEach((section, index) =>{            
            const listItem = document.createElement('li')
            listItem.addEventListener("click",()=>{
                this.currentSectionIndex=index;
                
                this.scrollSection();
                
            })
            list.appendChild(listItem);
            
            
        })
        this.navigationContainer.appendChild(list);
        document.body.appendChild(this.navigationContainer)
        this.activeNavigation();
    }
    activeNavigation(){
        if(this.navigationContainer){
            const navigationItems = this.navigationContainer.querySelectorAll("li");
            navigationItems.forEach((item,index)=>{
           
                if(index===this.currentSectionIndex){
                    item.classList.add('active')
                }else{
                    item.classList.remove('active')
                }

             })
        }    
    }

}