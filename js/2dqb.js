document.querySelector("body").style.cursor = "none";

// document.querySelector("body").append("");

const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const bubble = document.querySelector(".bubble");
document.querySelector("#music-1").volume = 0.2;
const popSFX1 = new Audio('./Audio/pop9.mp3');
const popSFX2 = new Audio('./Audio/pop4.mp3');
let popSFX = popSFX1;
const movedCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  c1.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  c2.style.transform = c1.style.transform;
  bubblesArray.forEach(element => {
//  console.log(Math.round(Math.abs(Math.abs(element.getBoundingClientRect().x) + element.getBoundingClientRect().width/2)) , Math.round(Math.abs(Math.abs(element.getBoundingClientRect().y)+element.getBoundingClientRect().height/2 )),Math.round(Math.abs(Math.abs(c1.getBoundingClientRect().x)+c1.getBoundingClientRect().width/2)), Math.round(Math.abs(Math.abs(c1.getBoundingClientRect().y)+c1.getBoundingClientRect().height/2)));
  if(Math.round(Math.abs(Math.abs(element.getBoundingClientRect().x) + element.getBoundingClientRect().width/2 -Math.abs(Math.abs(c1.getBoundingClientRect().x)+c1.getBoundingClientRect().width/2 ))) < 9 && Math.round(Math.abs(Math.abs(element.getBoundingClientRect().y)+element.getBoundingClientRect().height/2 -  Math.abs(Math.abs(c1.getBoundingClientRect().y)+c1.getBoundingClientRect().height/2  ))) < 9 )
{
element.style.transform = "";
element.style.width = element.style.height = "5px";
element.style.display = "none";
if(Math.random()>0.5)
popSFX= popSFX1;
else
popSFX= popSFX2;
if(element.style.width.substring(0,element.style.width.indexOf('vmin'))<30/4)
popSFX.volume = Math.random()*0.25;
else if(element.style.width.substring(0,element.style.width.indexOf('vmin'))<30/2)
popSFX.volume = Math.random()*0.25+0.25;
else if(element.style.width.substring(0,element.style.width.indexOf('vmin'))<30/1.5)
popSFX.volume = Math.random()*0.25+0.5;
else
popSFX.volume = Math.random()*0.25+0.75;
popSFX.play();
console.log(element.style.width.substring(0, element.style.width.indexOf('vmin')))
}
  });
};

const movedTouch = (e) => {
  const mouseY = e.changedTouches[0].clientY;
  const mouseX = e.changedTouches[0].clientX;
c1.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
c2.style.transform = c1.style.transform;
// console.log(bubble.style.transform);
bubblesArray.forEach(element => {
  //  console.log(Math.round(Math.abs(Math.abs(element.getBoundingClientRect().x) + element.getBoundingClientRect().width/2)) , Math.round(Math.abs(Math.abs(element.getBoundingClientRect().y)+element.getBoundingClientRect().height/2 )),Math.round(Math.abs(Math.abs(c1.getBoundingClientRect().x)+c1.getBoundingClientRect().width/2)), Math.round(Math.abs(Math.abs(c1.getBoundingClientRect().y)+c1.getBoundingClientRect().height/2)));
    if(Math.round(Math.abs(Math.abs(element.getBoundingClientRect().x) + element.getBoundingClientRect().width/2 -Math.abs(Math.abs(c1.getBoundingClientRect().x)+c1.getBoundingClientRect().width/2 ))) < 9 && Math.round(Math.abs(Math.abs(element.getBoundingClientRect().y)+element.getBoundingClientRect().height/2 -  Math.abs(Math.abs(c1.getBoundingClientRect().y)+c1.getBoundingClientRect().height/2  ))) < 9 )
  {
  element.style.transform = "";
  element.style.width = element.style.height = "5px";
  element.style.display = "none";
  if(element.style.width.substring(0,element.style.width.indexOf('vmin'))<30/4)
  popSFX1.volume = Math.random()*0.25;
  else if(element.style.width.substring(0,element.style.width.indexOf('vmin'))<30/2)
  popSFX1.volume = Math.random()*0.25+0.25;
  else if(element.style.width.substring(0,element.style.width.indexOf('vmin'))<30/1.5)
  popSFX1.volume = Math.random()*0.25+0.5;
  else
  popSFX1.volume = Math.random()*0.25+0.75;
  popSFX1.play();
  //console.log(element.style.width.substring(0, indexOf('vmin')))
  }
    });
};
// let startmove = document.querySelector('.panel');
// let startx = 0;
// let starty = 0;
// let dist = 0;
// startmove.addEventListener("touchstart", function(eve){
//   let touchobj = eve.changedTouches[0]; // erster Finger
//   startx = parseInt(touchobj.clientX); // X/Y-Koordinaten relativ zum Viewport
//   starty = parseInt(touchobj.clientY);
//   moves.innerHTML = "touchstart bei ClientX: " + startx + "px ClientY: " + starty + "px";
//   eve.preventDefault();
// });
// eve.changedTouches[0]
// startmove.addEventListener("touchmove", function(eve){
//   let touchobj = eve.changedTouches[0]; // erster Finger
//   let distx = parseInt(touchobj.clientX) - startx;
//   let disty = parseInt(touchobj.clientY) - starty;
//   moves.innerHTML = "touchmove horizontal: " + distx + "px vertikal: " + disty + "px";  
//   eve.preventDefault();
// });
// startmove.addEventListener("touchend", function(eve){
//   let touchobj = eve.changedTouches[0]; // reference first touch point for this event
//   moves.innerHTML = "touchend bei X-Koordinate: " + touchobj.clientX + "px Y-Koordinate: " + touchobj.clientY + "px";
//   eve.preventDefault();
// });



function updateSize() {
  c3.style.width = `${Math.round(Math.random() * 80)}vmin`;
  c3.style.height = c3.style.width;
  c3.style.transform = `translate3d(${Math.round(Math.random() * 40  )}vmax, ${Math.round(Math.random() * 40)}vmin,0)`;
  c2.style.transition = `all ${Math.round(Math.random() * 50000)}ms`;
  document.querySelector("#music-1").volume = (Math.random()/5);
}

setInterval(updateSize, 10000);


// Bubbles
const bubblesArray = [].slice.call(document.querySelectorAll(".bubble"));

const delay = async (ms = 222) =>  new Promise((resolve) => setTimeout(resolve, ms));

async function updateBubble(aBubble) {
  aBubble.style.height = aBubble.style.width = `${Math.round(Math.random() * 30)}vmin`;
  aBubble.style.transform = `translate3d(${(Math.round(Math.random() * 110)).toString().padStart(2)}vmax, ${(Math.round(Math.random() * 110)).toString().padStart(2)}vmin,0)`;
  aBubble.style.backgroundColor = `rgba(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.random()/1.4})`;
//  console.log(aBubble.style.backgroundColor);
  aBubble.style.opacity = "0.4";
}

setInterval(async () => {
  for (let i = 0; i < bubblesArray.length; i += 1) {
    await delay(222);
    updateBubble(bubblesArray[i]);
  //  console.log(i);
}
}, 22000);

function substringV2(ts , stringA , stringB) {
  ts.toString();  
  let a= ts.indexOf(stringA || '(');
  let b= ts.indexOf(stringB || 'vmax');
  return ts.substring(a+1,b).trim();
  }
  


if(( 'ontouchstart' in window ) ||
( navigator.maxTouchPoints > 0 ) ||
( navigator.msMaxTouchPoints > 0 ))
window.addEventListener("touchmove", movedTouch);
else
window.addEventListener("mousemove", movedCursor);
