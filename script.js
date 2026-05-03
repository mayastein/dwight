var submit = $(".submit-btn");

submit.on("click", formAction);

var math=$(".math");
var word=$(".word");

math.on("click", mathProblems);
word.on("click", drawWords);

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

function mathProblems(){
    event.preventDefault()
    // Returns a random integer from 0 to 1000:
    var x = Math.floor(Math.random() * 101);
    var y = Math.floor(Math.random() * 101);

    var x2 = Math.floor(Math.random() * 11);
    var y2 = Math.floor(Math.random() * 11);

    var signNum=Math.floor(Math.random() *4);
    if(signNum==0){
        var ans= prompt("Solve the equation: "+ x +" + " +y);
        if(ans==(x+y)){
            alert("Correct!");
        } else{
            alert("Nice try! The correct answer is " + (x+y));
        }
    } else if(signNum==1){
        var ans= prompt("Solve the equation: "+ x +" - " +y);
        if(ans==(x-y)){
            alert("Correct!");
        } else{
            alert("Nice try! The correct answer is " + (x-y));
        }
    } else if(signNum==2){
        var ans= prompt("Solve the equation: "+ x2 +" * " +y2);
        if(ans==(x2*y2)){
            alert("Correct!");
        } else{
            alert("Nice try! The correct answer is " + (x2*y2));
        }
    } else{
        var ans= prompt("Solve the equation: "+ x2 +"/" +y2+"  *Round to 2 decimal places*");
        var number=x2/y2;
        if(ans==(Math.round(number*10)/10)){
            alert("Correct!");
        } else{
            alert("Nice try! The correct answer is " + (Math.round(number*10)/10));
        }
    }
}

function drawWords(){
    event.preventDefault()
    const words=["dog", "cat", "car","computer","mouse", "cheese", "cake", "balloon", "apple", "artist", "ant", "bear", "button", "beads", "camping", "cup holder", "cardigan", "dirt", "dancing", "dime", "elephant", "eggs", "ear", "forest", "fire", "fish", "garden", "guitar", "goldfish", "house", "horse", "hand", "icecream", "igloo", "ice skating", "jelly", "juice", "jungle", "kangaroo", "kite", "lightbulb", "lettuce", "ladybug", "mango", "monkey", "money", "night", "nose", "newspaper", "octopus", "ocean", "orange", "penguin", "pizza", "pasta", "queen", "rice", "rain", "raspberry", "strawberry", "snowman", "snake", "turtle", "tulip", "train", "umbrella", "uniform", "vinyl", "velcro", "water", "water bottle", "washing machine", "bee"];
    var word = words[(Math.floor(Math.random() * words.length))];
    alert("Your random word to draw is: " + word.toUpperCase());
}

function formAction() {
    event.preventDefault();
    var sillyVoice=document.getElementById("silly-voice").value;
    var theTxt = document.getElementById("arr").value;
    var box=$('.thoughtTxt');
    var box2=$('.thoughtTxt2');

    if(document.getElementById("clouds").checked){
        txt=document.getElementById("arr");
        box2.text(theTxt);
        myPopup2.classList.add("show");
        txt.value="";
        myPopup2.classList.add("animation");
        setTimeout(function(){
            myPopup2.classList.remove("show");
            myPopup2.classList.remove("animation");
        }, 2000);
    }

    if(document.getElementById("silly-voice").checked){
        txt=document.getElementById("arr");
        let utterance = new SpeechSynthesisUtterance();

        // Set the text and voice of the utterance
        utterance.text = theTxt;
        utterance.voice = window.speechSynthesis.getVoices()[0];

        // Speak the utterance
        window.speechSynthesis.speak(utterance);
        txt.value="";
    }

    if(document.getElementById("click-x").checked){
        txt=document.getElementById("arr");
        box.text(theTxt);
        myPopup.classList.add("show");
        closePopup.addEventListener("click", function () {
            myPopup.classList.remove("show");
        });
        txt.value="";
    }

}

var s_txt=$(".s-fidget-txt");
var s_txt_default=s_txt.text();
var tappy=$(".tappy");
var jazh=$(".jazh");
var fring=$(".fring");
var lwp=$(".lwp");
var asapp=$(".asapp");
var ono=$(".ono");

var y = $(".y");
var n = $(".n");

var yTXT = $(".yTXT");
var nTXT = $(".nTXT");

tappy.hover(function(){
    s_txt.text("Tappy is an IOS app that for phones, tablets, and smart watches. It features virtual fidgets, games, breathing exercises, and more! A great option for fidgeting on-the-go");
}, function(){
    s_txt.text(s_txt_default);
});


jazh.hover(function(){
    s_txt.text("Created by a neurodivergent adult, these subtle fidgets are beuatifully designed and great to bring to classes, meetings, etc.");
}, function(){
    s_txt.text(s_txt_default);
});

fring.hover(function(){
    s_txt.text("Check out this super cute collection of fidget rings by Pura Vida! Similar products can be found on Amazon, Etsy, etc.");
}, function(){
    s_txt.text(s_txt_default);
});

lwp.hover(function(){
    s_txt.text("While this is technically a jewelry store, the bracelets can double as wearable fidgets. I wear a LWP bracelet every day, and it is so helpful to hold onto when I don't have a fidget on-hand. My bracelet says 'stay,' a constant reminder to keep going. Check out some of the other messages the bracelets have on the site!");
}, function(){
    s_txt.text(s_txt_default);
});

asapp.hover(function(){
    s_txt.text("This app is filled with random fidgets and games. Some of the games are geared towards a young demographic, but there are plenty of features for older folks to utilize as well! Some of my favorite fidget activities on the app are the paper shredder, the cash register, and the flower garden.");
}, function(){
    s_txt.text(s_txt_default);
});

ono.hover(function(){
    s_txt.text("Built for adults and others in need of a silent unnoticable fidget, ono fidgets are among my favorites. I bought an ono fidget roller on Amazon last year, and it has come everywhere with me since.");
}, function(){
    s_txt.text(s_txt_default);
});

var c_txt=$(".c-fidget-txt");
var c_txt_default=c_txt.text();
var pop=$(".pop");
var ball=$(".ball");
var tarwa=$(".tarwa");
var wbl=$(".wbl");
var ice=$(".ice");

pop.hover(function(){
    c_txt.text("My favorite pop-it came from this fidget pack! Explore the many options you can find at Five Below, Amazon, etc.");
}, function(){
    c_txt.text(c_txt_default);
});

ball.hover(function(){
    c_txt.text("There is a huge variety of fidget balls on the market, with many different textures, shapes, and sizes. I reccommend purchasing a variety pack to explore which one is best for you.");
}, function(){
    c_txt.text(c_txt_default);
});

tarwa.hover(function(){
    c_txt.text("Target has some adorable weighted stuffed animals, great for holding onto in moments of distress.");
}, function(){
    c_txt.text(c_txt_default);
});

wbl.hover(function(){
    c_txt.text("When I'm struggling, one of my go-to skills is wrapping myself in a weighted blanket. Check out this article to find the right one for you! Tip: it is best for your blanket to weigh no more than ~your weight/10");
}, function(){
    c_txt.text(c_txt_default);
});

ice.hover(function(){
    c_txt.text("Holding onto ice can be a great tool for self-regulating. I love to use reusable ice cubes, since they are small enough to hold in my hand AND I don't have to worry about them melting/getting water everywhere. Check out the TIPP skill to learn about how ice can be used to trigger the Mammalian Dive Reflex and calm you down.");
}, function(){
    c_txt.text(c_txt_default);
});

var e_txt=$(".e-fidget-txt");
var e_txt_default=e_txt.text();
var neff=$(".neff");
var doh=$(".doh");
var speks=$(".speks")

neff.hover(function(){
    e_txt.text("Dr. Neff put together this holiday gift guide for the 2024 holiday season. Check it out for fidget reccomendations, in addition to suggested books, brands, etc.");
}, function(){
    e_txt.text(e_txt_default);
});

doh.hover(function(){
    e_txt.text("Nee Doh has many types of squishy fidget balls. You can find the brand in Target, Amazon, etc. My favorite Nee Doh product is the Nice Cube!");
}, function(){
    e_txt.text(e_txt_default);
});

speks.hover(function(){
    e_txt.text("Speks has so many fun products, like magnetic fidget putty and stress balls. My favorite Speks product is the Crags Magnetic Putty");
}, function(){
    e_txt.text(e_txt_default);
});

function exportdata(){
    window.print();
}

function showYes(){
    yTXT.css("display", "block");
}

function showNo(){
    nTXT.css("display", "block");
}


y.on("click", showYes);
n.on("click", showNo)