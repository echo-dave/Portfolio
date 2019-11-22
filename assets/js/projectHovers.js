//Project arrays in the format of title, content
$(document).ready(function () {
let hangman = ["Hangman: word game", "This is a javascript based word game styled with some basic css. The basis for it revolves around a word array from which a random word is chosen, checked to see if it's been used this session, then loads / resets the interface. A number of loops and coditionals are used to account for searching for repeat characters, and displaying them appropriately. Most of the content boxes are java script generated with css styling by class."]

let rps = ["Rock Paper Scissors", "This was a bit of a logic problem in terms all the comparisons for win / loss / tie states. Initially a sieries of if statements were used to work out the problem before consolidating to loops. The computer choice is randomly generated by javascript standard function, floored, multiplied by 3 then compared agaist an arry."]

let starwars = ["StarWars RPG", "This little RPG was fun to put together even for something pretty basic. While not the most challenging of projects, it did give ideas of differnt things to utilize in the future: moving elements without the need for animating or removal and re-adding."]

let trivia = ["Trivial Trivia","A basic trivia game concept working with javascripts timer functions and a single object to build questions, answer choices, and an answer index to compare with. A deceptive number of timers and clear timers were needed with moves between functions to dodge and correct bugs."]

let loco = ["LoCo Search", " LoCo is a mobile first search for music and events with historical weather data for a sense of forecasting months out. Built with javascript utilising event and weather APIs for data and Bulma css framework to aid responsiveness. Links to venue locations and Youtube searches for planning and discovery."]

let friendfind = ["Friend Finder","Friend Finder is a nodejs application utilizing mysql database persistant storage of potential friends. A short survey allows us to quickyly compare your answers to others and pick the base match."]

//mouse cursor funtion

//event.page 
/* function mouseOver(event){
    let left = event.pageX + 15 +  "px";
    let heightPopup = $('.popup').css("height").length - 2;
    heightPopup = $('.popup').css("height").substring(0,heightPopup);
    console.log(heightPopup);
    let top = parseInt(event.pageY) - parseInt(heightPopup) -60 + "px";
    console.log(`top ${top} left ${left}`)
    $('.popup').css({top:top,left:left});
    console.log(`computed ${left}, ${top}`);
    console.log(`raw ${event.pageX}, ${event.pageY}`)

} */

//event.client
function mouseOver(event){
    let cX = event.clientX;
    let cY = event.clientY;
    let left = event.clientX + 15 +  "px";
    let heightPopup = $('.popup').css("height").length - 2;
    heightPopup = $('.popup').css("height").substring(0,heightPopup);
    console.log(heightPopup);
    let top = parseInt(event.clientY) - parseInt(heightPopup) -60 + "px";
    if (cY - parseInt(heightPopup) < 40 ) {
        top = parseInt(event.clientY) +30 + "px";
    }
    if (($(window).width()) - 320 - event.clientX < 0){
        left = event.clientX -15 -320 + "px";
        }
    
    $('.popup').css({top:top,left:left});
   
  
   
   console.log(`top ${cY} left ${cX}`)
    console.log(cX + " , " + cY);
}




//output to screen
// $("#hangman").hover(mousein(hangman),function(){
//     $('#popup').remove();
//     console.log("leave hover");
// });






// $("#rps").hover( mousein(rps), function(){
//     $('#popup').remove();
//     console.log("leave hover");
// });





//attempt to abstract functions
function mousein(project) {
    return function () {
        $(`<div class="popup">`).appendTo('body');
        $('.popup').html(`<h1>${project[0]}</h1><p>${project[1]}</p>`)
        mouseOver(event);
        console.log("hover");
    }
}
function mouseout(){
    $('.popup').remove();
    console.log("leave hover");
};



//$("#rps").hover(mousein(rps),mouseout());

//$("#hangman").hover(mousein(hangman),mouseout());

function mouseactive(project) {
    return function () {
    $(`<div class="popup">`).appendTo('body');
    $('.popup').html(`<h1>${project[0]}</h1><p>${project[1]}</p>`)
    mouseOver(event);
}
}

//clear popups
$('.project').mouseout(mouseout);

//project popups
$('#hangman').mousemove(mouseactive(hangman));
$('#rps').mousemove(mouseactive(rps));
$('#starwars').mousemove(mouseactive(starwars));
$('#trivia').mousemove(mouseactive(trivia));
$('#loco').mousemove(mouseactive(loco));
$('#friendfind').mousemove(mouseactive(friendfind));




});