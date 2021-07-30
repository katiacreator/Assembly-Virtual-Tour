console.log("this is properly connect to index.ejs")
/* do pagination with these buttons */
const pEl = document.getElementById("welcome-text");
//console.log("pEl: ", pEl);
const oneBtn = document.getElementById("oneBtn");
//console.log('oneBtn: ', oneBtn);
const twoBtn = document.getElementById("twoBtn");
//console.log('twoBtn: ', twoBtn);
const threeBtn = document.getElementById("threeBtn");
//console.log('threeBtn: ', threeBtn);
const startBtn = document.getElementById("startBtn");
//console.log('startBtn: ', startBtn);

let markup = "";
const welcomeScreen = document.getElementById("welcome-screen");


oneBtn.addEventListener("click", goToPage1);
twoBtn.addEventListener("click", goToPage2);
threeBtn.addEventListener("click", goToPage3);

function goToPage1() {
  //console.log("this has been clicked");
  markup = `<p id="welcome-text">Welcome to the Timeline Variance Authority virtual database tour. As a software engineering fellow at General Assembly, you've been hand-picked to join us in managing our infinite database of timeline variants in preparation for the Multiversal War!</p>`;
  pEl.innerHTML = markup;
  oneBtn.removeAttribute("class","hide")
  //console.log(oneBtn)
  twoBtn.removeAttribute("class","hide")
  //console.log(twoBtn)
  threeBtn.removeAttribute("class","hide")
  //console.log(threeBtn)
}

function goToPage2() {
  //console.log("this has been clicked");
  markup = `<p>You will be assigned an employee badge to begin this tutorial on how to manage top-secret files about a select group of variants. You'll be able to retrieve files, view details about known variants and their aliases, collect comic cards featuring the variant for your own reLogout interests, and track variants in real-time on our map dashboard.</p>`;
  pEl.innerHTML = markup;
  oneBtn.removeAttribute("class","hide")
  //console.log(oneBtn)
  twoBtn.removeAttribute("class","hide")
  //console.log(twoBtn)
  threeBtn.removeAttribute("class","hide")
  //console.log(threeBtn)
}

function goToPage3() {
  //console.log("this has been clicked");
  markup = `This will prepare you for your new role as an agent at the Timeline Variance Authority. For All Time. Always.`;
  pEl.innerHTML = markup;
  // console.log('pEl: ', pEl);
  startBtn.removeAttribute("class","hide")
  //console.log(startBtn)
  oneBtn.removeAttribute("class","hide")
  //console.log(oneBtn)
  twoBtn.removeAttribute("class","hide")
  // console.log(twoBtn)
  threeBtn.removeAttribute("class","hide")
  // console.log(threeBtn)
}
