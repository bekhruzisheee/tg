const menu = document.querySelector("#menu");
const left = document.querySelector("#left");
const sidebar = document.querySelector(".sidebar");
const kirish = document.querySelector(".kirish");
const search = document.querySelector(".search");
const left2 = document.querySelector("#left2");
const search2 = document.querySelector("#search");
const nstories = document.querySelector(".navbar-stories");
const story = document.querySelector(".story");
const text1 = document.querySelector("#text1");
const down = document.querySelector("#down");
const addaccount = document.querySelector(".add-account");
const sidebaritem = document.querySelector(".sidebar-item");
const down1 = document.querySelector("#down1");
const form = document.querySelector(".form");
const lock = document.querySelector(".lock");
const input2 = document.querySelector("#input2");
const lock99 = document.querySelector("#lock99");
const text18 = document.querySelector("#text18");
const input1 = document.querySelector("#input1");
const locker= document.querySelector("#locker");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");


const sidebarn = document.querySelector(".sidebar-navbar");
const kirishnavbar = document.querySelector(".kirish-navbar");
const folders = document.querySelector(".folders");
const play = document.querySelector("#play");
const text5 = document.querySelector("#text5");
const group = document.querySelector("#group");
const text6 = document.querySelector("#text6");
const secret = document.querySelector("#secret");
const text7 = document.querySelector("#text7");
const bullhorn = document.querySelector("#bullhorn");
const text8 = document.querySelector("#text8");
const user = document.querySelector("#user");
const text9 = document.querySelector("#text9");
const fayl = document.querySelector("#fayl");
const text10 = document.querySelector("#text10");
const dot = document.querySelector("#dot");
const text11 = document.querySelector("#text11");
const bookmark = document.querySelector("#bookmark");
const text12 = document.querySelector("#text12");
const phone = document.querySelector("#phone");
const text13 = document.querySelector("#text13");
const gear = document.querySelector("#gear");
const text14 = document.querySelector("#text14");
const cplus = document.querySelector("#circle-plus");
const text15 = document.querySelector("#text15");

//sidebar-krib-chiqish
menu.addEventListener("click", () =>{
sidebar.style = "display:block";
// nstories.style = "display:none";
left.style = "display:block";
folders.style = "display:none";

})
left.addEventListener("click" , () =>{
    sidebar.style = "display:none";
    folders.style = "display:block";
    folders.style = "margin-top:-5px";

})
//sidebar-kirib-chiqish

//search-kirib-chiqish
search2.addEventListener("click", () =>{
    kirish.style = "display:none";
    search.style = "display:block";
})
left2.addEventListener("click",() =>{
    search.style = "display:none";
    kirish.style = "display:block";
})
//search-kirib-chiqish

//storis-kirib-chiqish
nstories.addEventListener("click", () =>{
    nstories.style ="display:none";
    story.style = "display:block";
    story.style ="display:flex";
    text1.style ="display:block";
})
story.addEventListener("click", () =>{
    story.style ="display:none";
    nstories.style ="display:block";
    text1.style ="display:none";
})
//storis-kirib-chiqish

//account-qoshish-kirib-chiqish
down.addEventListener("click", () =>{
    addaccount.style ="display:block";
    sidebaritem.style ="margin-top:100px";
    down.style ="display:none";
    down1.style ="display:block";
    
})
down1.addEventListener("click", () =>{
    addaccount.style ="display:none";
    sidebaritem.style ="margin-top:-10px";
    down.style ="display:block";
    down1.style ="display:none";
})
//account-qoshish-kirib-chiqish


//lock-qism
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let inputvalue = input1.value

    if(inputvalue === "0880"){
    lock.style = "display:none";
    kirish.style = "display:block";
    }

    else{
    lock.style = "display:block";
    text18.style = "display:block";
    kirish.style = "display:none";
    }

})

locker.addEventListener("click", () =>{
    kirish.style = "display:none";
    lock.style = "display:block";
    // sidebar.style = "display:none";
})

//lock-qism

//account-kiritish-qism
const accountishee = document.querySelector(".accountishee");
const accountchiqish = document.querySelector("#account-chiqish");
const addaccount2 = document.querySelector(".add-account2");
const naccountishee = document.querySelector(".accountishee-navbar");
const text19 = document.querySelector("#text19");
const text20 = document.querySelector("#text20");
const text21 = document.querySelector("#text21");
const text22 = document.querySelector("#text22");
const text23 = document.querySelector("#text23");
const text24 = document.querySelector("#text24");
const input10 = document.querySelector("#input10");
const input11 = document.querySelector("#input11");
const country = document.querySelector(".country");
const vertical = document.querySelector("#vertical");

addaccount2.addEventListener("click" ,() =>{
    kirish.style = "display:none";
    sidebar.style = "display:none";
    accountishee.style = "display:block";
})
accountchiqish.addEventListener("click", () =>{
    accountishee.style = "display:none";
    kirish.style = "display:block";
    nstories.style = "display:block";
})

//tun-kun
const text3 = document.querySelector("#text3")
const plus = document.querySelector("#plus")
const text4 = document.querySelector("#text4")
const input = document.querySelector(".input")
const ul1 = document.querySelector("#ul1")
const folders2 = document.querySelector(".folders2")
const story2 = document.querySelector(".story2")
const news = document.querySelector(".news")
const text16 = document.querySelector("#text16")
const text17 = document.querySelector("#text17")
const searchadd = document.querySelector(".search-add")


sun.addEventListener("click", () =>{
    sun.style = "display:none";
    moon.style = "display:block";
    sidebarn.style = "background:rgb(10, 165, 101) ";
    kirishnavbar.style = "background:rgb(10, 165, 101) ";
    nstories.style = "background:rgb(10, 165, 101) ";
    folders.style.background = "red";
    play.style = "color:gray";
    text5.style = "color:black";
    group.style = "color:gray";
    text6.style = "color:black";
    secret.style = "color:gray";
    text7.style = "color:black";
    bullhorn.style = "color:gray";
    text8.style = "color:black";
    user.style = "color:gray";
    text9.style = "color:black";
    fayl.style = "color:gray";
    text10.style = "color:black";
    dot.style = "color:gray";
    text11.style = "color:black";
    bookmark.style = "color:gray";
    text12.style = "color:black";
    phone.style = "color:gray";
    text13.style = "color:black";
    gear.style = "color:gray";
    text14.style = "color:black";
    cplus.style = "color:gray";
    text15.style = "color:black";
    sidebar.style.background = "white";
    kirish.style.background = "white";
    text3.style = "color:black";
    plus.style = "color:gray";
    text4.style = "color:black";
    searchinput.style.background = "white";
    input.style.background = "white";
    left2.style = "color:black";
    folders2.style = "background:white";
    ul1.style = "color:black";
    story2.style = "background:white";
    news.style = "background:gray";
    text16.style = "color:black";
    text17.style = "color:black";
    search.style.background = "white";
    searchadd.style = "background:white";
    naccountishee.style = "background:white";
    accountchiqish.style = "color:black";
    vertical.style = "color:black";
    text19.style = "color:black";
    text20.style = "color:black";
    

});
moon.addEventListener("click", () =>{
    sun.style = "display:block";
    moon.style = "display:none";
    sidebarn.style = "background:rgb(9, 8, 59)";
    kirishnavbar.style = "background:rgb(9, 8, 59)";
    folders.style.background = "rgb(9, 8, 59)";
    nstories.style = "background:rgb(9, 8, 59)";
    play.style = "color:white";
    text5.style = "color:white";
    group.style = "color:white";
    text6.style = "color:white";
    secret.style = "color:white";
    text7.style = "color:white";
    bullhorn.style = "color:white";
    text8.style = "color:white";
    user.style = "color:white";
    text9.style = "color:white";
    fayl.style = "color:white";
    text10.style = "color:white";
    dot.style = "color:white";
    text11.style = "color:white";
    bookmark.style = "color:white";
    text12.style = "color:white";
    phone.style = "color:white";
    text13.style = "color:white";
    gear.style = "color:white";
    text14.style = "color:white";
    cplus.style = "color:white";
    text15.style = "color:white";
    kirish.style.background = "rgb(35, 35, 91)";
    sidebar.style.background = "rgb(35, 35, 91)";
    searchinput.style.background = "rgb(35, 35, 91)";
    input.style.background = "rgb(35, 35, 91)";
    left2.style = "color:white";
    folders2.style = "background:rgb(35, 35, 91)";
    ul1.style = "color:white";
    story2.style = "background:rgb(35, 35, 91)";
    news.style = "background:rgb(9, 8, 59)";
    text16.style = "color:white";
    text17.style = "color:white";
    search.style.background = "white";
    searchadd.style = "background:rgb(35, 35, 91)";
    text3.style = "color:white";
    plus.style = "color:white";
    text4.style = "color:white";
})