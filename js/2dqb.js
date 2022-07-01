document.querySelector("body").style.cursor = "none";

// document.querySelector("body").append("");

const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");

const bubble = document.querySelector(".bubble");

document.querySelector("#music-1").volume = 0.2;


const movedCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
  c1.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  c2.style.transform = c1.style.transform;
  bubblesArray.forEach(element => {
//    console.log(Math.round(element.style.transform.slice(12,14)*window.innerWidth/100) ,Math.round(element.style.transform.slice(20,22)*window.innerHeight/100), mouseX, mouseY);
    if( Math.abs( Math.round(element.style.transform.slice(12,14)*window.innerWidth/100)-mouseX) < 9 && Math.abs(Math.round(element.style.transform.slice(20,22)*window.innerHeight/100) - mouseY) < 9)
{   // alert(`${mouseX} : ${mouseY}`);
  element.style.transform = 'translate3d(00vmin, 00vmax,0))';
  }
  });
  if(Math.abs(Math.round(c2.style.transform.slice(12,14)*window.innerWidth/100) - mouseX)<6 &&  Math.abs(Math.round(c2.style.transform.slice(12,14)*window.innerHeight/100) - mouseY<6))
{  c2.style.transform = 'translate3d(0vmin, 0vmax,0))';
 // alert(Math.round(c3.style.transform.slice(12,14)*window.innerWidth/100), Math.round(c3.style.transform.slice(12,14)*window.innerHeight/100), mouseX, mouseY);
}  // c3.style.transition = `all ${Math.random() * 10}s`;
  // if(bubble.style.transform.
};
const movedTouch = (e) => {
  const mouseY = e.changedTouches[0].clientY;
  const mouseX = e.changedTouches[0].clientX;
c1.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
c2.style.transform = c1.style.transform;
// console.log(bubble.style.transform);
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
  c3.style.transform = `translate3d(${Math.round(    Math.random() * 40  )}vmax, ${Math.round(Math.random() * 40)}vmin,0)`;
  c2.style.transition = `all ${Math.round(Math.random() * 50000)}ms`;
  document.querySelector("#music-1").volume = (Math.random()/4);
}

setInterval(updateSize, 10000);


// Bubbles
const bubblesArray = [].slice.call(document.querySelectorAll(".bubble"));

const delay = async (ms = 222) =>  new Promise((resolve) => setTimeout(resolve, ms));

async function updateBubble(aBubble) {
  aBubble.style.height = aBubble.style.width = `${Math.round(    Math.random() * 30  )}vmin`;
  aBubble.style.transform = `translate3d(${Math.round(Math.random() * 110)>9 ? Math.round(Math.random() * 110) : '0'+Math.round(Math.random() * 110).toString()}vmax, ${Math.round(Math.random() * 110)}vmin,0)`;
  aBubble.style.backgroundColor = `rgba(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.random()/1.6})`;
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


window.addEventListener("mousemove", movedCursor);
window.addEventListener("touchmove", movedTouch);