let Ava = document.querySelector(".AvatarWrapper__Ava");

Ava.addEventListener("click", function(){
    if(TipoInput.value == "plague"){
        LinkBtn.setAttribute("href", "https://www.youtube.com/watch?v=482tDopNzoc");
        LinkBtn.setAttribute("target", "_blank");
    }
});