if ($('#timer-countdown').length) {
    function countdown( elementName, minutes, seconds )
    {
        var element, endTime, hours, mins, msLeft, time;
        function twoDigits( n )
        {
            return (n <= 9 ? "0" + n : n);
        }
        function updateTimer()
        {
            msLeft = endTime - (+new Date);
            if ( msLeft < 1000 ) {
                element.innerHTML = "click to reset the timer";
            } else {
                time = new Date( msLeft );
                hours = time.getUTCHours();
                mins = time.getUTCMinutes();
                element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
                setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
            }
        }
        element = document.getElementById( elementName );
        endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
        updateTimer();
    }
    countdown( "timer-countdown", 5, 0 );
}

var reset_btn=$(".otp-countdown");
// reset_btn.on("hover", styling);
reset_btn.on("click", reset);

function reset(){
    location.reload(true);
}


var cir1 = $(".cir1");
var cir2 = $(".cir2");
var cir3 = $(".cir3");
var cir4 = $(".cir4");
var cir5 = $(".cir5");
var cir6 = $(".cir6");
var cir7 = $(".cir7");
var cir8 = $(".cir8");
var cir9 = $(".cir9");

cir1.on("click", pop1);
cir2.on("click", pop2);
cir3.on("click", pop3);
cir4.on("click", pop4);
cir5.on("click", pop5);
cir6.on("click", pop6);
cir7.on("click", pop7);
cir8.on("click", pop8);
cir9.on("click", pop9);

var cir10 = $(".cir10");
var cir20 = $(".cir20");
var cir30 = $(".cir30");
var cir40 = $(".cir40");
var cir50 = $(".cir50");
var cir60 = $(".cir60");
var cir70 = $(".cir70");
var cir80 = $(".cir80");
var cir90 = $(".cir90");

var cira70 = $(".cira70");
var cira80 = $(".cira80");
var cira90 = $(".cira90");

var cirs70 = $(".cirs70");
var cirs80 = $(".cirs80");
var cirs90 = $(".cirs90");

var cirz70 = $(".cirz70");
var cirz80 = $(".cirz80");
var cirz90 = $(".cirz90");

var cira700 = $(".cira700");
var cira800 = $(".cira800");
var cira900 = $(".cira900");

var cirs700 = $(".cirs700");
var cirs800 = $(".cirs800");
var cirs900 = $(".cirs900");

var cirz700 = $(".cirz700");
var cirz800 = $(".cirz800");
var cirz900 = $(".cirz900");

var cir100 = $(".cir100");
var cir200 = $(".cir200");
var cir300 = $(".cir300");
var cir400 = $(".cir400");
var cir500 = $(".cir500");
var cir600 = $(".cir600");
var cir700 = $(".cir700");
var cir800 = $(".cir800");
var cir900 = $(".cir900");

var cira700 = $(".cira700");
var cira800 = $(".cira800");
var cira900 = $(".cira900");

var cirs700 = $(".cirs700");
var cirs800 = $(".cirs800");
var cirs900 = $(".cirs900");

var cirz700 = $(".cirz700");
var cirz800 = $(".cirz800");
var cirz900 = $(".cirz900");

cir10.on("click", pop10);
cir20.on("click", pop20);
cir30.on("click", pop30);
cir40.on("click", pop40);
cir50.on("click", pop50);
cir60.on("click", pop60);
cir70.on("click", pop70);
cir80.on("click", pop80);
cir90.on("click", pop90);

cira70.on("click", popa70);
cira80.on("click", popa80);
cira90.on("click", popa90);

cirs70.on("click", pops70);
cirs80.on("click", pops80);
cirs90.on("click", pops90);

cirz70.on("click", popz70);
cirz80.on("click", popz80);
cirz90.on("click", popz90);

cir100.on("click", pop100);
cir200.on("click", pop200);
cir300.on("click", pop300);
cir400.on("click", pop400);
cir500.on("click", pop500);
cir600.on("click", pop600);
cir700.on("click", pop700);
cir800.on("click", pop800);
cir900.on("click", pop900);

cira700.on("click", popa700);
cira800.on("click", popa800);
cira900.on("click", popa900);

cirs700.on("click", pops700);
cirs800.on("click", pops800);
cirs900.on("click", pops900);

cirz700.on("click", popz700);
cirz800.on("click", popz800);
cirz900.on("click", popz900);

function pop1(event){
    cir1.toggleClass("clir");
}
function pop2(event){
    cir2.toggleClass("clir");
}
function pop3(event){
    cir3.toggleClass("clir");
}
function pop4(event){
    cir4.toggleClass("clir");
}
function pop5(event){
    cir5.toggleClass("clir");
}
function pop6(event){
    cir6.toggleClass("clir");
}
function pop7(event){
    cir7.toggleClass("clir");
}
function pop8(event){
    cir8.toggleClass("clir");
}
function pop9(event){
    cir9.toggleClass("clir");
}

function pop10(event){
    cir10.toggleClass("clir");
}
function pop20(event){
    cir20.toggleClass("clir");
}
function pop30(event){
    cir30.toggleClass("clir");
}
function pop40(event){
    cir40.toggleClass("clir");
}
function pop50(event){
    cir50.toggleClass("clir");
}
function pop60(event){
    cir60.toggleClass("clir");
}
function pop70(event){
    cir70.toggleClass("clir");
}
function pop80(event){
    cir80.toggleClass("clir");
}
function pop90(event){
    cir90.toggleClass("clir");
}

function popa70(event){
    cira70.toggleClass("clir");
}
function popa80(event){
    cira80.toggleClass("clir");
}
function popa90(event){
    cira90.toggleClass("clir");
}

function pops70(event){
    cirs70.toggleClass("clir");
}
function pops80(event){
    cirs80.toggleClass("clir");
}
function pops90(event){
    cirs90.toggleClass("clir");
}

function popz70(event){
    cirz70.toggleClass("clir");
}
function popz80(event){
    cirz80.toggleClass("clir");
}
function popz90(event){
    cirz90.toggleClass("clir");
}

function pop100(event){
    cir100.toggleClass("clir");
}
function pop200(event){
    cir200.toggleClass("clir");
}
function pop300(event){
    cir300.toggleClass("clir");
}
function pop400(event){
    cir400.toggleClass("clir");
}
function pop500(event){
    cir500.toggleClass("clir");
}
function pop600(event){
    cir600.toggleClass("clir");
}
function pop700(event){
    cir700.toggleClass("clir");
}
function pop800(event){
    cir800.toggleClass("clir");
}
function pop900(event){
    cir900.toggleClass("clir");
}

function popa700(event){
    cira700.toggleClass("clir");
}
function popa800(event){
    cira800.toggleClass("clir");
}
function popa900(event){
    cira900.toggleClass("clir");
}

function pops700(event){
    cirs700.toggleClass("clir");
}
function pops800(event){
    cirs800.toggleClass("clir");
}
function pops900(event){
    cirs900.toggleClass("clir");
}

function popz700(event){
    cirz700.toggleClass("clir");
}
function popz800(event){
    cirz800.toggleClass("clir");
}
function popz900(event){
    cirz900.toggleClass("clir");
}

clickerTxt = $('.num-clicks');
var inc = 0;
clicker=$(".cir");
clicker.on("click", counter);

function counter(event){
    inc++;
    clickerTxt.html(inc);
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

var pxl=$(".itemg");
var hovBtn=$(".hov-cl")

pxl.hover(function(){
    
    // $(this).css("background-color", "blue");
    }, function(){
        // $(this).css("background-color", "transparent");
        // $(this).fadeOut("slow");
        $(this).animate({opacity: '0.5'}, 300);

});

hovBtn.on("click", clr);

function clr(){
    pxl.css("opacity", "1");
}


