let Users = document.querySelectorAll(".ModeWrapper__User");
let TipoInput = document.querySelector(".LinkWrapper__TipoInput");
let ModeBorder = document.querySelector(".ModeWrapper__Border");
let LinkBtn = document.querySelector(".LinkWrapper__Btn");

TipoInput.value = "Petr KV-2";
ModeBorder.style.width = "69px";
ModeBorder.style.left = "155px";

Users[0].addEventListener("click", function(){
    if(TipoInput.value == "Ilya Death(666)"){
        LinkBtn.setAttribute("href", "");
        TipoInput.value = "";
        TipoInput.setAttribute("placeholder", "??????");
    }
    else{
        LinkBtn.setAttribute("href", "razrabs(Ilya).html");
        UserChange(110, -7, "Ilya Death(666)");
    }
    LinkBtn.setAttribute("target", "_self");
}); 

Users[1].addEventListener("click", function(){
    if(TipoInput.value == "Petr KV-2"){
        LinkBtn.setAttribute("href", "");
        TipoInput.value = "";
        TipoInput.setAttribute("placeholder", "??????");
    }
    else{
        UserChange(69, 155, "Petr KV-2");
        LinkBtn.setAttribute("href", "razrabs(Petr).html");
    }
    LinkBtn.setAttribute("target", "_self");
}); 

// let Param = [110, 69];

function UserChange(a, b, c){
    ModeBorder.style.width = a + "px";
    ModeBorder.style.left = b + "px";
    TipoInput.value = c;
}
