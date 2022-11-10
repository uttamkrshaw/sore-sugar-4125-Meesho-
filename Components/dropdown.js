function dropdown(){
    document.querySelector("#threeDot").addEventListener("click",function(){
        document.querySelector("#Container1").style.display="block"
        document.querySelector("#threeDot").style.display="none"
        document.querySelector("#cancelLogo").style.display="block"
        document.querySelector("#containerData").style.background= "white"
    })
    
    document.querySelector("#cancelLogo").addEventListener("click",function(){
        document.querySelector("#Container1").style.display="none"
        document.querySelector("#threeDot").style.display="block"
        document.querySelector("#cancelLogo").style.display="none"
        document.querySelector("#containerData").style.background= "none"
    
    })
    document.querySelector("#btn0").addEventListener("click",function(){
    // document.querySelector("#btn0").innerHTML=null
    // document.querySelector("#btn01").innerHTML
    document.querySelector("#man-Contents").style.display="none"
    document.querySelector("#kids-Contents").style.display="none"
        document.querySelector("#women-Contents").style.display="block"
        document.querySelector("#women-Contents").style.display="grid"
        document.querySelector("#btn0").style.fontSize ="16px"
        document.querySelector("#btn1").style.fontSize ="12px"
    
    })
    document.querySelector("#btn1").addEventListener("click",function(){
        // document.querySelector("#btn01").innerHTML=null
        document.querySelector("#women-Contents").style.display="none"
        document.querySelector("#kids-Contents").style.display="none"
    document.querySelector("#man-Contents").style.display="block"
    document.querySelector("#man-Contents").style.display="grid"
    document.querySelector("#btn1").style.fontSize ="16px"
    document.querySelector("#btn0").style.fontSize ="12px"
    })
    
    
    document.querySelector("#btn2").addEventListener("click",function(){
    
        
        // document.querySelector("#btn01").innerHTML=null
        document.querySelector("#women-Contents").style.display="none"
        document.querySelector("#man-Contents").style.display="none"
    document.querySelector("#kids-Contents").style.display="block"
    document.querySelector("#kids-Contents").style.display="grid"
    })
}

export {dropdown}