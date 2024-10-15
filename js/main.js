///<reference types = "../@types/jquery"/>
// start of Home
$('.openNav').on('click',function(){
    $('.sideBar').animate({width:'250px'},0 , function(){
        $('.sideBar ul li').slideDown(1000)
    })
   $('.layer').animate({marginLeft:'250px'});
})
$('.closeNav').on('click',function(){
    $('.sideBar').animate({width:'0px'},0, function(){
        $('.sideBar ul li').slideToggle(50)
    })
   $('.layer').animate({marginLeft:'0px'});
})
// end of Home
// start of duration
$('.title').on('click',function(){
    $('.sliderContent').not($(this).next()).slideUp(500)
    $(this).next().slideToggle(500)
    
})
// end of  duration
// start of details
let countDownDate = new Date("Oct  20, 2024 12:59:59").getTime();

let counter = setInterval(()=>{
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 *24)) / (1000*60*60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 *60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} H`);
    $(".min").html(`${minutes} M`);
    $('.sec').html(`${seconds} S`);
    if (dateDiff <= 0) {
        clearInterval(counter);
        document.querySelector('.days').innerHTML = '00';
        document.querySelector('.hours').innerHTML = '00';
        document.querySelector('.min').innerHTML = '00';
        document.querySelector('.sec').innerHTML = '00';
    }

},1000)
// end  of details
// start of Contact
$('textarea').on('input',(e)=>{
    let textLength = $(e.target).val().length;
   let charNum = $('textarea').attr('maxlength');
   let charLeft = charNum - textLength;
   $('#chars').html(charLeft)
   if(charLeft==0){
    $('#chars').html('your available character finished')
   }
})
// end of contact
// start of scroll
$('.sideBar a').on('click',function(){
    const currSetion = $(this).attr('href');
    const  top = $(currSetion).offset().top;
    $('html,body').animate({scrollTop:top},1000);

});  