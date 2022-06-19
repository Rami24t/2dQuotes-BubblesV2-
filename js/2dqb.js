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
  // c3.style.transition = `all ${Math.random() * 10}s`;
};


function updateSize() {
  c3.style.width = `${Math.round(Math.random() * 80)}vmin`;
  c3.style.height = c3.style.width;
  c3.style.transform = `translate3d(${Math.round(    Math.random() * 40  )}vmax, ${Math.round(Math.random() * 40)}vmin,0)`;
  c2.style.transition = `all ${Math.round(Math.random() * 50000)}ms`;
  document.querySelector("#music-1").volume = Math.random() / 2.5;
}

setInterval(updateSize, 10000);


// Bubbles
const bubblesArray = [].slice.call(document.querySelectorAll(".bubble"));

const delay = async (ms = 222) =>  new Promise((resolve) => setTimeout(resolve, ms));

async function updateBubble(aBubble) {
  aBubble.style.height = aBubble.style.width = `${Math.round(    Math.random() * 30  )}vmin`;
  aBubble.style.transform = `translate3d(${Math.round(    Math.random() * 110)}vmax, ${Math.round(Math.random() * 110)}vmin,0)`;
  aBubble.style.opacity = "0.4";
}

setInterval(async () => {
  for (let i = 0; i < bubblesArray.length; i += 1) {
    await delay(222);
    updateBubble(bubblesArray[i]);
    console.log(i);  }
}, 22000);


window.addEventListener("mousemove", movedCursor);