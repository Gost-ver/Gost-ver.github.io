let Ava = document.querySelector(".AvatarWrapper__Ava");

Ava.addEventListener("click", function(){
    if(TipoInput.value == "plague"){
        LinkBtn.setAttribute("href", "https://www.youtube.com/watch?v=482tDopNzoc");
    }
    if(TipoInput.value == "Chert"){
        LinkBtn.setAttribute("href", "https://www.youtube.com/watch?v=zmmICPynDXI");
    }
    LinkBtn.setAttribute("target", "_blank");
});

// LinkBtn.addEventListener("click", function(){
//     window.open("https://www.youtube.com/watch?v=nqDNiyP5o4Y", "_blank" );
// });
