    //  store the card item into variabe 

    let cardVar = document.querySelector(".card-iteam");

    // store the main wrapper into the variable

    let bgChanger = document.querySelector(".main-wrapper");

    const images = ["url(img/row-1.jpg)", "url(img/row-2.jpg)" , "url(img/row-3.jpg)" , "url(img/row-4.jpg)", "url(img/row-5.jpg)"];

    function changeTheBg(index) {
      bgChanger.style.backgroundImage = images[index];
    
      if(bgChanger.style.backgroundSize == "100%"){
        bgChanger.style.backgroundSize = "110%";

      }
      else{
        bgChanger.style.backgroundSize = "100%";
      }
    }
