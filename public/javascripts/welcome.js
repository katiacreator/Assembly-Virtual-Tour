/* do pagination with these buttons */
const nextBtn = document.getElementById('nextBtn')
console.log('nextBtn: ', nextBtn);
let firstBtn;
let secondBtn;
let prevBtn;


let welcomeScreen = document.getElementById('welcome-screen').text
console.log('welcomeScreen : ', welcomeScreen );
let welcomeScreen = markup
let markup = "";

nextBtn.addEventListener('click', goToSecondScreen ())

let firstBtn = document.getElementById('firstBtn')
console.log('firstBtn: ', firstBtn);
let secondBtn = document.getElementById('secondBtn')
console.log('secondBtn: ', secondBtn);

firstBtn.addEventListener('click', goToFirstScreen())
secondBtn.addEventListener('click', goToThirdScreen())

let prevBtn = document.getElementById('prevBtn')
console.log('prevBtn: ', prevBtn);
prevBtn.addEventListener('click', goToSecondScreen ())

function goToFirstScreen(){
    markup = `<div>
    <p>Welcome to the Timeline Variance Authority virtual database tour. As a software engineering fellow at General Assembly, you've been hand-picked to join us in managing our infinite database of timeline variants in preparation for the Multiversal War!</p>
    <button id="nextBtn">Next</button>
  </div>`
}
function goToSecondScreen () {
    markup = `<div class="secondScreen">
    <p>You will be assigned an employee badge to begin this tutorial on how to manage top-secret files about a select group of variants. You'll be able to retrieve files, view details about known variants and their aliases, collect comic cards featuring the variant for your own reLogout interests, and track variants in real-time on our map dashboard.</p>
    <button id="firstBtn">Go Back</button>
    <button id="secondBtn">Next</button>
  </div>`
}

function goToThirdScreen(){
    markup = ` <div class="thirdScreen">
    <p>This will prepare you for your new role as an agent at the Timeline Variance Authority. For All Time. Always.</p>
    <img src="" alt="tva logo">
    <button id="prevBtn">Previous</button>
    <!-- link to show-badge -->
    <a href="profiles/show-badge" class="btn btn-primary startBtn">Let's Get Started!</a>
  </div>`
}