let changebtn1 = document.querySelector('.btn1');
let changebtn2 = document.querySelector('.btn2');
let changebtn3 = document.querySelector('.btn3');
let changebtn4 = document.querySelector('.btn4');

changebtn1.addEventListener('click', function() {
  document.querySelector('.wrapper').style.backgroundImage="url('./images/bg_morning.jpg')";
  document.querySelector('.middle-img').style.backgroundImage="url('./images/phone_morning.png')";
})


changebtn2.addEventListener('click', function() {
  document.querySelector('.wrapper').style.backgroundImage="url('./images/bg_afternoon.jpg')";
  document.querySelector('.middle-img').style.backgroundImage="url('./images/phone_afternoon.png')";
})


changebtn3.addEventListener('click', function() {
  document.querySelector('.wrapper').style.backgroundImage="url('./images/bg_evening.jpg')";
  document.querySelector('.middle-img').style.backgroundImage="url('./images/phone_evening.png')";
})


changebtn4.addEventListener('click', function() {
  document.querySelector('.wrapper').style.backgroundImage="url('./images/bg_night.jpg')";
  document.querySelector('.middle-img').style.backgroundImage="url('./images/phone_night.png')";
})


const clock = document.querySelector(".clock");

function getClock(){
  const d = new Date();
  const h = String(d.getHours()).padStart(2,"0");
  const m = String(d.getMinutes()).padStart(2,"0");
  const s = String(d.getSeconds()).padStart(2,"0");
  clock.innerText = `${h} : ${m} : ${s}`;
}

getClock(); //맨처음에 한번 실행
setInterval(getClock, 1000); //1초 주기로 새로실행






$('.btn').on('click', function(){
  $(this).toggleClass('is-active');
  $('.btn').removeClass('is-active');

  if($(this).hasClass('is-active')) {
    $(this).removeClass('is-active');
  } else {
    $(this).addClass('is-active');
  }
})


$('.btn4').on('click', function() {
  // $('.menu').children('a').hasClass('is-active');
  $('.menu ul').children('a').css('color','white');
  $('.middle-text').children('h1').css('color','white');
  $('.middle-text').children('p').css('color','gray');
  $('.logo a').children('img').attr("src", './images/logo_w.png');
  $('.middle-img').children('.clock').css('color','white');
})