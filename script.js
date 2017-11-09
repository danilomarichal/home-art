
/*$(window).bind('beforeunload',function(){
return 'are you sure you want to leave?';
});*/

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

function allClickEvents(){

$('#logo').on('click',function(){
 $('html,body').animate({
        scrollTop: $('#container').offset().top
      },4000);
});


$('#about').on('click',function(){
 $('html,body').animate({
        scrollTop: $('#container2').offset().top
      },2000);
});

$('#artists').on('click',function(){
 $('html,body').animate({
        scrollTop: $('#container3').offset().top
      },3000);
});

$('#events').on('click',function(){
 $('html,body').animate({
        scrollTop: $('#container4').offset().top
      },4000);
});
}



$('#image1').on('mouseover',function(){
$('#one').css({'opacity':'0.8','transition':'1.5s'});
$('#a1').css({'opacity':'1','transition':'1.5s'});
$('#d1').css({'opacity':'1','transition':'1.5s'});
});

$('#image1').on('mouseleave',function(){
  $('#one').css({'opacity':'0','transition':'1.5s'});
  $('#a1').css({'opacity':'0','transition':'1.5s'});
$('#d1').css({'opacity':'0','transition':'1.5s'});
});

$('#image2').on('mouseover',function(){
$('#two').css({'opacity':'0.8','transition':'1.5s'});
$('#a2').css({'opacity':'1','transition':'1.5s'});
$('#d2').css({'opacity':'1','transition':'1.5s'});
});

$('#image2').on('mouseleave',function(){
  $('#two').css({'opacity':'0','transition':'1.5s'});
  $('#a2').css({'opacity':'0','transition':'1.5s'});
$('#d2').css({'opacity':'0','transition':'1.5s'});
});

$('#image3').on('mouseover',function(){
$('#three').css({'opacity':'0.8','transition':'1.5s'});
$('#a3').css({'opacity':'1','transition':'1.5s'});
$('#d3').css({'opacity':'1','transition':'1.5s'});
});

$('#image3').on('mouseleave',function(){
  $('#three').css({'opacity':'0','transition':'1.5s'});
  $('#a3').css({'opacity':'0','transition':'1.5s'});
$('#d3').css({'opacity':'0','transition':'1.5s'});
});

$('#image4').on('mouseover',function(){
$('#four').css({'opacity':'0.8','transition':'1.5s'});
$('#a4').css({'opacity':'1','transition':'1.5s'});
$('#d4').css({'opacity':'1','transition':'1.5s'});
});

$('#image4').on('mouseleave',function(){
  $('#four').css({'opacity':'0','transition':'1.5s'});
  $('#a4').css({'opacity':'0','transition':'1.5s'});
$('#d4').css({'opacity':'0','transition':'1.5s'});
});

$('#image5').on('mouseover',function(){
$('#five').css({'opacity':'0.8','transition':'1.5s'});
$('#a5').css({'opacity':'1','transition':'1.5s'});
$('#d5').css({'opacity':'1','transition':'1.5s'});
});

$('#image5').on('mouseleave',function(){
  $('#five').css({'opacity':'0','transition':'1.5s'});
  $('#a5').css({'opacity':'0','transition':'1.5s'});
$('#d5').css({'opacity':'0','transition':'1.5s'});
});

$('#image6').on('mouseover',function(){
$('#six').css({'opacity':'0.8','transition':'1.5s'});
$('#a6').css({'opacity':'1','transition':'1.5s'});
$('#d6').css({'opacity':'1','transition':'1.5s'});
});

$('#image6').on('mouseleave',function(){
  $('#six').css({'opacity':'0','transition':'1.5s'});
  $('#a6').css({'opacity':'0','transition':'1.5s'});
$('#d6').css({'opacity':'0','transition':'1.5s'});
});

$('#image7').on('mouseover',function(){
$('#seven').css({'opacity':'0.8','transition':'1.5s'});
$('#a7').css({'opacity':'1','transition':'1.5s'});
$('#d7').css({'opacity':'1','transition':'1.5s'});
});

$('#image7').on('mouseleave',function(){
  $('#seven').css({'opacity':'0','transition':'1.5s'});
  $('#a7').css({'opacity':'0','transition':'1.5s'});
$('#d7').css({'opacity':'0','transition':'1.5s'});
});

$('#image8').on('mouseover',function(){
$('#eight').css({'opacity':'0.8','transition':'1.5s'});
$('#a8').css({'opacity':'1','transition':'1.5s'});
$('#d8').css({'opacity':'1','transition':'1.5s'});
});

$('#image8').on('mouseleave',function(){
  $('#eight').css({'opacity':'0','transition':'1.5s'});
  $('#a8').css({'opacity':'0','transition':'1.5s'});
$('#d8').css({'opacity':'0','transition':'1.5s'});
});
allClickEvents();


window.onscroll = function(){
  var B= document.body;
        var D= document.documentElement;
        D= (D.clientHeight)? D: B;
if (D.scrollTop <= 100){
  $('#logo').css({'margin-left':'5%'});
  $('#nav_bar').css({'position':'fixed','margin-top':'5%','margin-left':'32%','transform':'rotate(0deg)','transition':'2s'});
}
else if(D.scrollTop > 100 && D.scrollTop < 1400) {
  //console.log(D.scrollTop)
$('#nav_bar').css({'width':'700px','position':'fixed','margin-top':'30%','margin-left':'71.7%','transform':'rotate(90deg)','transition':'2s'});
$('#logo').css({'margin-left':'72%','transition':'2s'});
}
else if(D.scrollTop > 1400 && D.scrollTop < 2200) {
  //console.log(D.scrollTop)
$('#logo').css({'margin-left':'5%'});
$('#nav_bar').css({'position':'fixed','margin-top':'30%','margin-left':'-320px','transform':'rotate(90deg)','transition':'2s'});
}
else if(D.scrollTop > 2200 && D.scrollTop < 2800) {
  console.log(D.scrollTop)
$('#nav_bar').css({'width':'700px','position':'fixed','margin-top':'14%','margin-left':'71.7%','transform':'rotate(270deg)','transition':'2s'});
$('#logo').css({'margin-left':'72%','transition':'2s'});

   }
};



var myIndex = 0;
carousel();

function carousel() {
    var x = $(".slide");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 540);
}


var count = 0;
services();

function services() {
    var x = $('.slid')
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    count++;
    if (count > x.length) {count = 1}
    x[count-1].style.display = "block";
  setTimeout(services, 500);
}

var counter = 0;
painting();

function painting() {
    var x = $('.sli')
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    counter++;
    if (counter > x.length) {counter = 1}
    x[counter-1].style.display = "block";
  setTimeout(painting, 550);
}

var county = 0;
photo();

function photo() {
    var x = $('.sl')
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    county++;
    if (county > x.length) {county = 1}
    x[county-1].style.display = "block";
  setTimeout(photo, 530);
}

var countr = 0;
abstract();

function abstract() {
    var x = $('.s')
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    countr++;
    if (countr > x.length) {countr = 1}
    x[countr-1].style.display = "block";
  setTimeout(abstract, 560);
}




