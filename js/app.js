const header  = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll("counter span");
const progress_bar = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll", () => {
   skillsCounter();
});

 /*------------------ navbar sticky ---------------- */
 function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
 }
 stickyNavbar();
 window.addEventListener("scroll" ,stickyNavbar);

// ----------------- scroll js -----------------------

let sr = ScrollReveal({
   duration: 2000,
   distance:"60px",
});
sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", {origin:"top", delay: 700 });

 /*------------------ Skills progress sticky ---------------- */

function hasReached(el){
   let topPosition = el.getBoundingClientRect().top;

   if(window.innerHeight >= topPosition + el.offsetHeight) return true;
   return false;

} 

function updateCount(num, maxNum){
 let currentNum = +num.innerText;

 if(currentNum < maxNum){
    num.innerText = currentNum + 1;

    setTimeout(() =>{
       updateCount(num, maxNum);
    }, 12);
 }
}

 function skillsCounter(){
    if(!hasReached(first_skill)) return;

   sk_counters.forEach((counter, i) => {
      let target = +counter.dataset.target;
      let strokeValue = 427 - 427 * (target/100);

    progress_bars[i].style.setProperty("--target",strokeValue);
    
    setTimeout(() => {
       updateCount(counter, target);
    } ,400);
   });


    progress_bars.forEach((p) => (p.style.animation = "progress 2s ease in out"));
 }