const navbar = ()=> {
    return `
    <div id="header">

    <div id="header_left">
        <div id="containerData">

            <div id="main">
                <img  id="threeDot" src="./image/line.png" alt="">
                
                
                    <img id="cancelLogo" src="./image/cross.png"alt="">
                
                <img id="logo" src="./image/logo.png" alt="">
            </div>
           
          
    
    
    <div id="Container1">
        <button  id="btn0">WOMAN</button>
        <button id="btn1">MAN</button>
        <button  id="btn2">KIDS</button>
        <div id="women-Contents" >
            
            <a href="#">WOMEN</a>
            <a href="#">
              NIGHT POWER COLLECTION </a
            >
            <a href="#">BLAZERS</a>
            <a href="#">DRESSES | JUMPSUITS</a>
            <a href="#">TOPS|BODYSUITS</a>
            <a href="#">SHIRTS</a>
            <a href="#">TROUSERS</a>
            <a href="#">T-SHIRTS</a>
            <a href="#">JEANS</a>
            <a href="#">SHORTS</a>
            <a href="#">CO-ORD SETS</a>
    
            <a href="#">SUITS</a>
            <a href="#">KNITWEAR</a>
            <a href="#">SWEATSHIRTS</a>
             
        </div>
    
        <div id="man-Contents" >
                    <a href="#">MENS</a>
                    <a href="#">
                      ZARA ATHALETICZ <b style="font-size: 8px">NEW</b></a
                    >
                    <a href="#">COLLECTION</a>
                    <a href="#">HERITAGE <b style="font-size: 8px">NEW</b></a>
                    <a href="#">JACKETS</a>
                    <a href="#">OVERSHIRTS</a>
                    <a href="#"> GILETS</a>
                    <a href="#">BLAZERS</a>
                    <a href="#">SUITS</a>
                    <a href="#">T-SHIRTS</a>
                    <a href="#">HOODIES | SWEATSHIRTS</a>
                    <a href="#">TRACKSUITS</a>
                    <a href="#">KNITWEAR</a>
                    <a href="#">POLO SHIRTS</a>
                
        </div>
    
    
        <div id="kids-Contents" >
            <a href="#">GIRL | 6 - 14 YEARS</a>
            <a href="#"> BOY | 6 - 14 YEARS</a>
            <a href="#"> BABY GIRL | 6 MONTHS - 5 YEARS</a>
            <a href="#">BABY BOY | 6 MONTHS - 5 YEARS</a>
            <a href="#">ACCESSORIES</a>
            <a href="#">ZARASERIES</a>
            <a href="#">BESTSELLERS <b style="font-size: 8px">NEW</b></a>
          </div>
    
        </div>
          
       
    </div>
     </div>
    <div id="header_right">


    <a id="search" href="search.html"><p>SEARCH</p></a>



    <a href="login.html"> <p id="loginID"> LOGIN</p> </a>



    <a href="#"><p>HELP</p></a>
        
    </div>
  
   
      
   




</div> `
}

export { navbar }

let data = JSON.parse(localStorage.getItem("login_data"))

console.log("data",data);