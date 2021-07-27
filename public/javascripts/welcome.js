/* do pagination with these buttons */
const nextBtn = document.getElementById('nextBtn')
//console.log('nextBtn: ', nextBtn);
const oneBtn = document.getElementById('oneBtn')
//console.log('oneBtn: ', oneBtn);
const twoBtn = document.getElementById('twoBtn')
//console.log('twoBtn: ', twoBtn);
const threeBtn = document.getElementById('threeBtn')
//console.log('threeBtn: ', threeBtn);
const startBtn = document.getElementById('startBtn')
//console.log('startBtn: ', startBtn);

let markup = ""
let welcomeScreen = document.getElementById('welcome-screen').innerHTML
//console.log('welcomeScreen : ', welcomeScreen );
welcomeScreen = markup


nextBtn.addEventListener('click', goToPage2())
twoBtn.addEventListener('click', goToPage2())
oneBtn.addEventListener('click', goToPage1())
threeBtn.addEventListener('click', goToPage3())

function goToPage1(){
    markup = `<div class="firstScreen">
    <p>Welcome to the Timeline Variance Authority virtual database tour. As a software engineering fellow at General Assembly, you've been hand-picked to join us in managing our infinite database of timeline variants in preparation for the Multiversal War!</p>
    <p>this is Page1</p>
    <button id="nextBtn">Page 2</button>
    </div>`
    console.log('markup: ', markup);
}

function goToPage2 () {
    markup = `<div class="secondScreen">
    <p>You will be assigned an employee badge to begin this tutorial on how to manage top-secret files about a select group of variants. You'll be able to retrieve files, view details about known variants and their aliases, collect comic cards featuring the variant for your own reLogout interests, and track variants in real-time on our map dashboard.</p>
    <button id="oneBtn">Page1</button>
    <p>This is Page2</p>
    <button id="threeBtn">Page3</button>
  </div>`
  console.log(markup)
}

function goToPage3(){
    markup = ` <div class="thirdScreen">
    <p>This will prepare you for your new role as an agent at the Timeline Variance Authority. For All Time. Always.</p>
    <img src="" alt="tva logo">
    <button id="twoBtn">Page 2</button>
    <p>This is Page 3</p>
    <!-- link to show-badge -->
    <a href="profiles/show-badge" class="btn btn-primary startBtn">Let's Get Started!</a>
  </div>`
  console.log(markup)
}