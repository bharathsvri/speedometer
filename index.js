let speed = document.getElementById("count");
console.log(speed);

function inc() {
  let n = Number(Math.floor(Math.random() * 25));
  // let n=16;
  // console.log(n);

  if (n == 0) {
    let nValue = 179;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 1) {
    let nValue = 189;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 2) {
    let nValue = 197;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 3) {
    let nValue = 207;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 4) {
    let nValue = 215;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 5) {
    let nValue = 224;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 6) {
    let nValue = 233;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 7) {
    let nValue = 243;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 8) {
    let nValue = 254;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 9) {
    let nValue = 264;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 10) {
    let nValue = 274;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 11) {
    let nValue = 284;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 12) {
    let nValue = 294;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 13) {
    let nValue = 304;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 14) {
    let nValue = 314;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 15) {
    let nValue = 324;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 16) {
    let nValue = 334;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 17) {
    let nValue = 344;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 18) {
    let nValue = 354;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 19) {
    let nValue = 364;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 20) {
    let nValue = 374;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 21) {
    let nValue = 384;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 22) {
    let nValue = 394;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else if (n == 23) {
    let nValue = 404;
    hand.style.transform = "rotate(" + nValue + "deg)";
  } else {
    let nValue = 414;
    hand.style.transform = "rotate(" + nValue + "deg)";
  }

  // hand.style.transform="rotate("+n+"deg)";
  hand.style.transition = "0.5s";
  speed.textContent = n;
  // speed.textContent=i;
}

function start() {
  setInterval(inc, 500);
}
let hand = document.querySelector(".hand");


let nValue = 179;
hand.style.transform = "rotate(" + nValue + "deg)";