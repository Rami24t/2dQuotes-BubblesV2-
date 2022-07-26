// by Rami Al-Saadi 2022 ©

async function delay(ms = 222) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function updateBubble(aBubble) {
  if (aBubble.style.display != '')
    aBubble.style.display = '';
  aBubble.style.height = aBubble.style.width = `${Math.round(Math.random() * 30)}vmin`;
  aBubble.style.transform = `translate3d(${(Math.round(Math.random() * 110)).toString().padStart(3)}vmax, ${(Math.round(Math.random() * 110)).toString().padStart(3)}vmin,0)`;
  aBubble.style.backgroundColor = `rgba(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${(Math.random() / 1.4).toFixed(3)})`;
  if (aBubble.style.opacity != "0.4")
    aBubble.style.opacity = "0.4";
}
function updatePanel() {
  let p = Math.ceil(Math.random() * 5);
  p = '.panel' + p;
  let panel = document.querySelector(p);
  panel.style.backgroundImage = "url(https://source.unsplash.com/" + Math.round(window.innerWidth / 2) + "x" + Math.round(panel.getBoundingClientRect().height) + (p.endsWith('1') ? '' : (p.endsWith('2') ? '?universe' : (p.endsWith('3') ? '?work' : (p.endsWith('4') ? '?candle' : '?dream')))) + ")";
}
function main() {
  document.querySelector("body").style.cursor = "none";
  // document.querySelector("body").append("");
  const c1 = document.querySelector(".c1");
  const c2 = document.querySelector(".c2");
  const c3 = document.querySelector(".c3");
  const footerA = document.querySelector("footer a");
  document.querySelector("#music-1").volume = 0.2;
  const popSFX1 = new Audio('./Audio/pop9.mp3');
  const popSFX2 = new Audio('./Audio/pop4.mp3');
  const ramiNameAudio = new Audio('https://www.babynamespedia.com/a/p/Rami.hu.z2YgYw6Qyo27qLVFnYFqmLsfjRXm_MB-.mp3');
  const al = new Audio('https://www.babynamespedia.com/a/p/Al.de.NfPHJNYq0GC-FrB2DLTm03AQMbvgbBqD.mp3');
  const saadi = new Audio('https://www.babynamespedia.com/a/p/Saadi.pt.qrZXf63oQ-Awr1g9EgC4rSVj7lj1nQsS.mp3');
  let popSFX = popSFX1;
  footerA.onmouseenter = () => { ramiNameAudio.play(); setTimeout(() => al.play(), 900); setTimeout(() => saadi.play(), 1400); };
  c3append();
  setInterval(update10, 10000);
  // Bubbles
  const bubblesArray = [].slice.call(document.querySelectorAll(".bubble"));
  move();
  let bubblesNumber = bubblesArray.length;
  const bubbleFeederInterval = (240) * bubblesNumber;
  setInterval(bubbleFeeder, bubbleFeederInterval);
  setInterval(updatePanel, 120000);

  function c3append() {
    for (i = 0; i < 12; i++)
      c3.appendChild(document.createElement('div'));
  }
  function movedCursor(e) {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    c2.style.transform = c1.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    bubblesArray.forEach(element => {
      let eBCR = element.getBoundingClientRect();
      let eBCRW = eBCR.width;
      let eWidth = element.style.width;
      if (Math.round(Math.abs(Math.abs(eBCR.x) + eBCRW / 2 - Math.abs(Math.abs(c1.getBoundingClientRect().x) + c1.getBoundingClientRect().width / 2))) < (eBCRW / 4.8 < 9 ? 9 : eBCRW / 4.8) && Math.round(Math.abs(Math.abs(eBCR.y) + eBCR.height / 2 - Math.abs(Math.abs(c1.getBoundingClientRect().y) + c1.getBoundingClientRect().height / 2))) < (eBCRW / 4.8 < 9 ? 9 : eBCRW / 4.8)) {
        if (Math.random() > 0.5)
          popSFX = popSFX1;
        else
          popSFX = popSFX2;
        if (eWidth.substring(0, eWidth.indexOf('vmin')) > 29)
          ramiNameAudio.play();
        else if (eWidth.substring(0, eWidth.indexOf('vmin')) < 2) {
          al.play();
          setTimeout(() => saadi.play(), 1000);
        }
        if (eWidth.substring(0, eWidth.indexOf('vmin')) < 30 / 4) {
          popSFX.volume = Math.random() * 0.25 + 0.01;
        }
        else if (eWidth.substring(0, eWidth.indexOf('vmin')) < 30 / 2)
          popSFX.volume = Math.random() * 0.25 + 0.25;
        else if (eWidth.substring(0, eWidth.indexOf('vmin')) < 30 / 1.5)
          popSFX.volume = Math.random() * 0.25 + 0.5;
        else
          popSFX.volume = Math.random() * 0.25 + 0.75;
        popSFX.play();
        element.style.transform = '';
        element.style.width = element.style.height = "0px";
        element.style.opacity = '0';
        element.style.display = "none";
      }
    });
  }
  function movedTouch(e) {
    const mouseY = e.changedTouches[0].clientY;
    const mouseX = e.changedTouches[0].clientX;
    c2.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    bubblesArray.forEach(element => {
      e.preventDefault(); // // //
      let eBCR = element.getBoundingClientRect();
      let eBCRW = eBCR.width;
      let eWidth = element.style.width;
      if (Math.round(Math.abs(Math.abs(eBCR.x) + eBCRW / 2 - Math.abs(mouseX))) < (eBCRW / 4.8 < 9 ? 9 : eBCRW / 4.8) && Math.round(Math.abs(Math.abs(eBCR.y) + eBCR.height / 2 - Math.abs(mouseY))) < (eBCRW / 4.8 < 9 ? 9 : eBCRW / 4.8)) {
        if (Math.random() > 0.5)
          popSFX = popSFX1;
        else
          popSFX = popSFX2;
        if (eWidth.substring(0, eWidth.indexOf('vmin')) > 29)
          ramiNameAudio.play();
        else if (eWidth.substring(0, eWidth.indexOf('vmin')) < 2) {
          al.play();
          al.onended = function () {
            saadi.play();
          };
        }
        if (eWidth.substring(0, eWidth.indexOf('vmin')) < 30 / 4) {
          popSFX.volume = Math.random() * 0.25 + 0.01;
        }
        else if (eWidth.substring(0, eWidth.indexOf('vmin')) < 30 / 2)
          popSFX.volume = Math.random() * 0.25 + 0.25;
        else if (eWidth.substring(0, eWidth.indexOf('vmin')) < 30 / 1.5)
          popSFX.volume = Math.random() * 0.25 + 0.5;
        else
          popSFX.volume = Math.random() * 0.25 + 0.75;
        popSFX.play();
        element.style.transform = '';
        element.style.width = element.style.height = "0px";
        element.style.opacity = '0';
        element.style.display = "none";
      }
    });
  }
  function update10() {
    c3.style.width = `${Math.round(Math.random() * 80)}vmin`;
    c3.style.height = c3.style.width;
    c3.style.transform = `translate3d(${Math.round(Math.random() * 40)}vmax, ${Math.round(Math.random() * 40)}vmin,0) rotate(${Math.round(Math.random() * 360)}deg)`;
    c2.style.transition = `all ${Math.round(Math.random() * 50000)}ms`;
    document.querySelector("#music-1").volume = (Math.random() / 5);
  }
  async function bubbleFeeder() {
    for (let i = 0; i < bubblesNumber; i += 1) {
      await delay(222);
      // console.log(i + 1, '/', bubblesNumber);
      updateBubble(bubblesArray[i]);
    }
  }
  function move() {
    if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
      bubblesArray.splice(0, 57);
      window.addEventListener("touchmove", movedTouch);
    }
    else {
      // bubblesArray.splice(0, 57);
      window.addEventListener("mousemove", movedCursor);
    }
  }
}
// call the main function
main();

// by Rami Al-Saadi 2022 ©
