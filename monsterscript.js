var start_btn = $(".start");
var next_btn = $(".next");
var next_btn2 = $(".next2");

var sect = $(".monster-content");
var sect2=$(".monster-content2");
var sect3=$(".monster-content3");
var sect4=$(".monster-content4");
var logo=$(".mon2");
var sec_tr=$(".monster-content-trash");
var sec_pu=$(".monster-content-punch");
var sec_sp=$(".monster-content-space");
var sec3_btns=$(".monster-content3-btns");
var monster=$(".the-monster");
var eyes=$(".eyebtn");
var mouth=$(".mouthbtn");
var ace=$(".acebtn");
var size=$(".sizebtn");
var eye_clicks=0;
var ace_clicks=0;
var mouth_clicks=0;
var size_clicks=0;
var currentSize=20;
var txtForSize=currentSize.toString()+"vh";
var togOpt=-1;
var lives=24;
var e=$(".eye");
var m=$(".mouth");
var color="blue";
var def_beg=$(".monster-be-gone");
var garbageTxt=$(".mon-trash-txt");
var punchTxt=$(".mon-punch-txt");
var trashDir=$(".directionsTxt-trash");
var punchDir=$(".directionsTxt-punch");
var blast=$(".blast");
var reset=$(".reset1");

sect2.css("display", "none");
sect3.css("display", "none");
sect4.css("display", "none");
sec_tr.css("display", "none");
sec_pu.css("display", "none");
sec_sp.css("display", "none");
punchTxt.css("display", "none");


start_btn.on("click", begin);
next_btn.on("click", pg2);
eyes.on("click", newEyes);
mouth.on("click", newMouth);
ace.on("click", access);
size.on("click", sizing);
next_btn2.on("click", pg3);
def_beg.on("click",takedown);
reset.on("click", backHome);
monster.on("click", punchTog);
blast.on("click", blastoff);


function begin(){
    sect.empty();
    sect2.show();
}

function backHome(){
    location.reload();
}

function pg2(){
    color=document.getElementById("colors").value;
    sect2.empty();
    sect3.show();
    monster.css("background-color", color);
}

function newEyes(){
    eye_clicks++;
    if(eye_clicks==1){
        e.css("background-color", "#efebe3"); 
        e.css("border", "none"); 
    } else if(eye_clicks==2){
        e.css("border", "2px solid black");
    } else if(eye_clicks==3){
        e.css("border-radius", "0px");
    } else if(eye_clicks==4){
        e.css("background-color", "black");
    } else{
        eye_clicks=0;
        e.css("border-radius", "100%") 
    }
}

function newMouth(){
    mouth_clicks++;
    if(mouth_clicks==1){
        m.css("background-color", "#efebe3"); 
        m.css("border", "none"); 
    } else if(mouth_clicks==2){
        m.css("border", "2px solid black");
    } else if(mouth_clicks==3){
        m.css("border-radius", "100%");
        m.css("padding-top", "25px");
    } else if(mouth_clicks==4){
        m.css("background-color", "black");
    } else{
        mouth_clicks=0;
        m.css("border-radius", "0px")
        m.css("padding-top", "0px"); 
    }
}

function access(){
    ace_clicks++;
    if(ace_clicks==1){
        monster.css("background-image", `linear-gradient(to bottom right, ${color}, #765F95)`); 
        monster.css("border", "none"); 
    } else if(ace_clicks==2){
        monster.css("background-image", `linear-gradient(to bottom right, #C7E1FF, ${color})`);
    } else if(ace_clicks==3){
        monster.css("border", "20px dotted #CEB8FF");
        monster.css("background-image", "none");
        monster.css("background-color", color); 
    } else if(ace_clicks==4){
        monster.css("border", "20px solid black");
    } else{
        ace_clicks=0;
        monster.css("border", "none"); 
    }
}

function sizing(){
    size_clicks++;
    if(size_clicks==1){
        monster.css("padding", "15vh");
        currentSize=15; 
    } else if(size_clicks==2){
        monster.css("padding", "10vh"); 
        currentSize=10;
    } else if(size_clicks==3){
        monster.css("padding", "5vh"); 
        currentSize=5;
    } else if(size_clicks==4){
        monster.css("padding", "3vh"); 
        currentSize=3;
    } else if(size_clicks==5){
        monster.css("padding", "5vh");
        currentSize=5; 
    } else if(size_clicks==6){
        monster.css("padding", "10vh");
        currentSize=10; 
    } else if(size_clicks==7){
        monster.css("padding", "15vh");
        currentSize=15; 
    } else if(size_clicks==8){
        monster.css("padding", "20vh");
        currentSize=20; 
    } else if(size_clicks==9){
        monster.css("padding", "25vh");
        currentSize=25; 
    } else if(size_clicks==10){
        monster.css("padding", "20vh"); 
        size_clicks=0;
        currentSize=20;
    }
}

function pg3(){
    sec3_btns.css("display", "none");
    sect4.css("display", "block");

}

function takedown(){
    event.preventDefault();
    
    if(document.getElementById("punch").checked){
        sect4.css("display", "none");
        punch()
    } else if(document.getElementById("throw").checked){
        sect4.css("display", "none");
        throws();
    } else if(document.getElementById("surprise").checked){
        sect4.css("display", "none");
        surprise()
    } else if(document.getElementById("space").checked){
        sect4.css("display", "none");
        space()
    } else{
        alert("Please select an option!")
    }

}

function punch(){
    /*
    Goal: clicker simulation. Certain # of clicks and it gets bigger or smaller.
    That happens some # of times and then there is an "explosion" animation.
    Page resets
    */
    monster.css("position", "absolute");
    // monster.on("hover", changeCursor)
    monster.css("cursor", "url('glove2.png'), auto");
    logo.css("display", "none");
    reset.css("display", "none");
    sec_pu.css("display", "block");
    togOpt=0;
}

// function changeCursor(){
//     monster.css("cursor", "url('glove-pointer.png'), auto");
// }

function punchTog(){
    if(togOpt==0){
        currentSize*=1.2;
        txtForSize=currentSize.toString()+"vh";
        monster.css("padding", txtForSize);
        togOpt=1;
        lives-=1;
    } else if(togOpt==1){
        currentSize-=3;
        txtForSize=currentSize.toString()+"vh";
        monster.css("padding", txtForSize);
        togOpt=0;
        lives-=1;
    }
    if(lives==0){
        togOpt=-1;
        monster.css("display", "none");
        punchDir.css("display", "none");
        punchTxt.css("display", "block");
        reset.css("display","block");
    }
}

function space(){
    /*
    Goal: click a button and launch them off the screen
    (animation effect on the click of a button - maybe also a space simulation of sorts)
    Page resets
    */
    monster.css("position", "static");
    logo.css("display", "none");
    reset.css("display", "none");
    sec_sp.css("display", "block");

}

function blastoff(){
    monster.addClass("space-animation");
    blast.addClass("new-btn-design");
    blast.text("Fueling engine...");
    setTimeout(() => monster.removeClass("space-animation"), 800);
    setTimeout(() => monster.addClass("space-animation2"), 800);
    setTimeout(() => blast.text("3..."), 1000);
    setTimeout(() => blast.text("2..."), 2000);
    setTimeout(() => blast.text("1..."), 3000);
    setTimeout(() => blast.text("BLAST OFF"), 3500);
    setTimeout(() => monster.removeClass("space-animation2"), 3500);
    setTimeout(() => monster.addClass("space-animation3"), 3500);
    setTimeout(() => punchTxt.css("display", "block"), 5500);
    setTimeout(() => punchDir.css("display", "none"), 5500);
    setTimeout(() => blast.css("display", "none"), 5500);
    setTimeout(() => monster.css("display", "none"), 5500);
    setTimeout(() => reset.css("display", "block"), 5500);
    // blast.text("3...");
    // blast.text("2...");
    // blast.text("1...");

    // window.setTimeout(bastoff2, 1000);
}

// function blastoff2(){
//     monster.addClass("space-animation2");
// }

function draggable(ev){
    ev.dataTransfer.setData("Text", ev.target.id);
    monster.css("display", "none");
}

function droppable(ev){
    ev.preventDefault();
}

function drop(ev){
    monster.css("display", "none");
    trashDir.css("display", "none");
    var name=document.getElementById("mname").value;
    if(name==""){
        name="Unnamed Monster";
    }
    garbageTxt.append(", " +name+"!");
    garbageTxt.css("display", "block");
    reset.css("display", "block");
    // let data = ev.dataTransfer.getData("Text");
    // sec_tr.appendChild(document.getElementById(data));
    ev.preventDefault();
    
}

function throws(){
    sec_tr.css("display", "block");
    monster.css("position", "absolute");
    logo.css("display", "none");
    reset.css("display", "none");
    // monster.on("mousedown", draggable)
    monster.on("drag", draggable)
    sec_tr.on("drop", drop)
    sec_tr.on("dragover", droppable)

}

function surprise(){
    var num = Math.random() * 3;
    if(num<1){
        alert("Method of defeat: 🤜");
        punch();
    } else if(num>=1 && num<2){
        alert("Method of defeat: 🚀");
        space();
    } else{
        alert("Method of defeat: 🗑");
        throws();
    }
}

var exp=$(".nav-btn");
var isOpen=false;

$(".expanded-navbar").css("display", "none");

exp.hover(function(){
    $(".innernb").css("font-size", "12px");
    if(isOpen){
        $(".innernb").append("<br>close");
    } else{
        $(".innernb").append("<br>expand");
    }
    
    }, function(){
        $(".innernb").empty();
        $(".innernb").css("font-size", "20px");
        if(isOpen){
            $(".innernb").append("<br>&#8657;");
        } else{
            $(".innernb").append("&#8659;"); 
        }
});

exp.on("click", expanded);

function expanded(){
    $(".expanded-navbar").fadeToggle();
    if(isOpen){
        isOpen=false;
    } else{
        isOpen=true;
    }
}