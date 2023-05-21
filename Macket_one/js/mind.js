let InfoMenu__Btn = document.querySelectorAll(".info-menu__btn");
let Text_Wrapper = document.querySelector(".text-wrapper");
let Availability_wrapper__Btn_ToShops = document.querySelector(".Availability-wrapper__Btn-ToShops");
let Reviews__AddReview = document.querySelector(".Reviews__AddReview");
let BtnDelete = document.querySelector(".InputWrapper__Btn_Delete");
let BtnAdd = document.querySelector(".InputWrapper__Btn_Add");
let InputCreate = document.querySelector(".InputWrapper__CreateReview");
let Reviews = document.querySelector(".Reviews");
let ImgWrapper__Img = document.querySelector(".ImgWrapper__Img");
let ImgBtn_Wrapper__Btn = document.querySelectorAll(".ImgBtn-wrapper__Btn");
let CreateElement_Massive;
// let text_wrapper = document.querySelector(".text-wrapper");

let check = 0;
let InputValue;
let Massive_Element;
let ElementHeight;
let TextWrapper_Height_active = 1042;
let TextWrapper_Height = 983;

BtnDelete.addEventListener("click", ()=>{
    InputCreate.value = "";
});
BtnAdd.addEventListener("click", ()=>{
    InputValue = InputCreate.value;
    console.log(InputValue);

    let CreateElement = `
        <div class="Review">

        <div class="ReviewStars">
            <img src="img/Full_star.png" alt="stener" class="ReviewStars__Stener">
            <img src="img/Full_star.png" alt="stener" class="ReviewStars__Stener">
            <img src="img/Full_star.png" alt="stener" class="ReviewStars__Stener">
            <img src="img/Full_star.png" alt="stener" class="ReviewStars__Stener">
            <img src="img/Full_star.png" alt="stener" class="ReviewStars__Stener">
        </div>

        <p class="Review__Info Review__User">Иван</p>
        <p class="Review__Info Review__Time">3 месяца назад</p>

        <p class="Review__MainText">
            ${InputValue}
        </p>

        </div>

                        `;


    CreateElement.classList = "Review";
    Reviews.insertAdjacentHTML("beforeend", CreateElement);
    CreateElement_Massive = document.querySelectorAll(".Review");
    Massive_Element = CreateElement_Massive[CreateElement_Massive.length - 1];
    console.log(Massive_Element);
    ElementHeight = Massive_Element.clientHeight + 20;
    console.log(ElementHeight);
    TextWrapper_Height_active = TextWrapper_Height_active + ElementHeight;
    console.log(TextWrapper_Height_active);
    TextWrapper_Height = TextWrapper_Height_active;
    Text_Wrapper.style.height = `${TextWrapper_Height_active}` + "px";
    // clientHeight
});

Reviews__AddReview.addEventListener("click", ()=>{

    if(check == 0){
        Text_Wrapper.style.height = `${TextWrapper_Height_active}` + "px";
        check = 1;
    }  
    else if(check == 1) {
        Text_Wrapper.style.height = `${TextWrapper_Height}` + "px";
        check = 0;
    }    
});

Text_Wrapper.style.transition = "0.5s";

Availability_wrapper__Btn_ToShops.addEventListener("click", ()=>{
    console.log("Нафиг иди, нет пока ничего. И без гитары поживёшь!!!");
});

InfoMenu__Btn.forEach(function(i){
    i.addEventListener("click", ()=>{
        for(let e of InfoMenu__Btn){
            e.classList.remove("active");
        }
        i.classList.add("active");
    });
});

function Scroll_Item(a){
    console.log(Text_Wrapper);
    Text_Wrapper.scrollLeft = `${a * 870}`;
    console.log(`${a}`);
    console.log(`${a * 870}`);

    if(a == 1){
        console.log(Text_Wrapper);
        Text_Wrapper.style.height = "360px";
    }
    if(a == 0){
        Text_Wrapper.style.height = "810px";
    }
    if(a == 2){
        console.log("gut gemacht");
        Text_Wrapper.style.height = "574px";
    }
    if(a == 3){
        console.log("das ist alles was ich will");
        Text_Wrapper.style.height = `${TextWrapper_Height}` + "px";
    }
}

function IbanexImg(a){
    if(a == 1){
        console.log(ImgWrapper__Img);
        ImgWrapper__Img.style.background = "url(./img/IbanexGrx70qaTRB.jpg)";
        ImgWrapper__Img.style.backgroundSize = "300px";
    }
    if(a == 2){
        ImgWrapper__Img.style.background = "url(./img/preview.jpg)";
        ImgWrapper__Img.style.backgroundSize = " 300px";
    }
    if(a == 3){
        ImgWrapper__Img.style.background = 'url(./img/rackurs.jpg)';  
        ImgWrapper__Img.style.backgroundSize = " 300px";
    }
    if(a == 4){
        ImgWrapper__Img.style.background = 'url(./img/GrifTwo.jpg)';  
        ImgWrapper__Img.style.backgroundSize = " 300px"; 
    }
    if(a == 5){
        ImgWrapper__Img.style.background = 'url(./img/Tremolo.jpg)';  
        ImgWrapper__Img.style.backgroundSize = " 300px"; 
    }

    for(e of ImgBtn_Wrapper__Btn){
        e.classList.remove("ImgBtn_Active")
    }
}



ImgBtn_Wrapper__Btn.forEach(function(item){
    item.addEventListener("click", function(){
        console.log(item);
        item.classList.add("ImgBtn_Active");
    });  
});
