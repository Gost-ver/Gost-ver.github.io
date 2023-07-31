let Menu__Link = document.querySelectorAll(".LinksWrapper__Link");
let Input_UserName = document.querySelector(".InputWrapper__InputUser");
let InputButton = document.querySelector(".InputWrapper__Button");
let UserName = document.querySelector(".Points_Wrapper__UserName");
let GoodGame = document.querySelector(".Points_Wrapper__Header_GoodGame");
let BtnWrapper__Info = document.querySelector(".BtnWrapper__Info");
let BtnWrapper__Download = document.querySelector(".BtnWrapper__Download");
let SubscribePoint__Btn = document.querySelectorAll(".SubscribePoint__Btn");
let Warnning = document.querySelector(".Warnning ");
let Body = document.querySelector("body");
let Html = document.querySelector("html");

let InputValue;
InputValue = Input_UserName.value;
let Body_InnerHTML = Body.innerHTML;
let WindowWidth = window.innerWidth;
let WindowHeight = window.innerHeight;

let Experinent = 1928;
console.log(Experinent);
console.log(WindowWidth);

console.log(Html.innerHTML);
// console.log(Body_InnerHTML);

// alert(window.innerWidth);

Menu__Link.forEach(function(i){
    i.addEventListener('click', function(){
        console.log(i);
        for(let a = 0; a < Menu__Link.length; a = a + 1){
            Menu__Link[a].classList.remove("active");
        }
        console.log("Clear");
        i.classList.add("active");
        console.log("New_Active");
    });
});

InputButton.addEventListener("click", function(){
    InputValue = Input_UserName.value;
    console.log(InputValue);
    if(InputValue == ""){
        UserName.innerHTML = ' "Невыбрано (введите имя пользователя)" ';
        GoodGame.style.display = "none";
        GoodGame.hidden = true;
        UserName.classList.add("Underfind");
    }
    else{
        GoodGame.style.display = "inline-block";
        GoodGame.hidden = false;
        UserName.innerHTML = InputValue;
        UserName.classList.remove("Underfind");
    }
    Input_UserName.value = "";
});

function DownloadMouse_move(move){
    if(move == 'over'){
        if(InputValue == ""){
            BtnWrapper__Info.innerHTML = "Вы не вошли в систему, введите своё имя";
            // BtnWrapper__Download.style.background = "rgb(123 0 0)";
            BtnWrapper__Download.classList.remove('BtnWrapper__Download');
            BtnWrapper__Download.classList.add('NotUndefined');
            console.log("over");
        }
    }
    if(move == 'out'){
        if(InputValue == ""){
            BtnWrapper__Download.classList.remove('NotUndefined');
            BtnWrapper__Download.classList.add('BtnWrapper__Download');
            BtnWrapper__Info.innerHTML = "*Сначала необходимо запустить игру";
            console.log("out");
        }
    }
    
}

BtnWrapper__Download.addEventListener("click", function(){
    if(InputValue == ""){
        alert("Вы не вошли в систему, в доступе отказано");
    }
    if(InputValue == "Devil_666"){
         window.open("https://avavatar.ru/images/original/3/i14hBonRn8ke0lN3.jpg", "_blank");
    }
    if(InputValue == "Cannibal Corpse (on)"){
        window.open("https://www.youtube.com/watch?v=uaFzmZrKKKw", "_blank");
    }
});

SubscribePoint__Btn.forEach(function(I_Btn){
    I_Btn.addEventListener("click", function(){
        console.log(I_Btn);
        if(InputValue == ""){
            console.log("Пользователь не найден");
            Warnning.style.transition = "0.0s";
            Warnning.style.color = "#fff";

            setTimeout(function(){
                Warnning.style.transition = "0.8s";
                Warnning.style.color = "#070707";
                // window.open("https://www.youtube.com/watch?v=aGJ9y1ubaqU&t=486s", "_blank");
            },1500);
        }
        if(InputValue == "random"){
            if(I_Btn == SubscribePoint__Btn[1]){
                if(confirm("Вы даёте соглашение на обработку ваших данных?") == true){
                    console.log("Gut gemacht");
                    // Body.parentNode.removeChild(Body);
                    Body.innerHTML = "";
                    Body.style.background = "#fff";
                    setTimeout(function(){
                        alert("error");
                    }, 1000);
                    setTimeout(function(){
                        if(confirm("Востановить страницу") == true){
                            // let Body_2 = document.createElement("body");
                            // document.html.append(Body_2);
                            Body.innerHTML = Body_InnerHTML;
                            Body.style.background = "#1f1f1f";

                            setTimeout(function(){
                                Body.parentNode.removeChild(Body);
                                Html.style.background = "url('./img/Rityal.jpg')";
                                Html.style.backgroundSize = WindowWidth + "px";
                            }, 2000);
                        }
                        else{
                            window.location.href = "https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png";
                        }
                    }, 1000);
                }
                else{
                    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
                    window.close();
                }
            }
        }
    });
});



