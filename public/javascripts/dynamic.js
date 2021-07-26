const welcomeDiv = document.getElementById('welcome-screen')
console.log('welcomeDiv: ', welcomeDiv);

const badgeEl = document.getElementById('card-badge')
console.log('badgeEl: ', badgeEl);

function generateBadgeId (){
    return Math.floor(Math.random() * 9);
}

badgeEl.text = generateBadgeId()
console.log('badgeEl.text: ', badgeEl.text);


/* write function for dynamic markup of welcome screens */
let welcomeScreen = document.getElementById('welcome-screen').text
console.log('welcomeScreen : ', welcomeScreen );
let welcomeScreen = markup
let markup = `<div>
< class="welcome-text">  
Welcome to the Timeline Variance Authority virtual database tour. As a software engineering fellow at General Assembly, you've been hand-picked to join us in managing our infinite database of timeline variants in preparation for the Multiversal War!</p>
              </div>`

secondBtn.addEventListener('click', function goToSecondScreen {
    markup = `<div class="secondScreen">
    <p>You will be assigned an employee badge to begin this tutorial on how to manage top-secret files about a select group of variants. You'll be able to retrieve files, view details about known variants and their aliases, collect comic cards featuring the variant for your own reLogout interests, and track variants in real-time on our map dashboard.</p>
  </div>`
})

thirdBtn.addEventListener('click', function goToThirdScreen {
    markup = ` <div class="thirdScreen">
    <p>This will prepare you for your new role as an agent at the Timeline Variance Authority. For All Time. Always.</p>
    <img src="" alt="tva logo">
    <!-- link to show-badge -->
    <a href="profiles/show-badge" class="btn btn-primary startBtn">Let's Get Started!</a>
  </div>`
})