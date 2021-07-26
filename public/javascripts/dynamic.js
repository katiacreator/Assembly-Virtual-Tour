const badgeEl = document.getElementById('card-badge')
console.log('badgeEl: ', badgeEl);

function generateBadgeId (){
    return Math.floor(Math.random() * 9);
}

badgeEl.text = generateBadgeId()
console.log('badgeEl.text: ', badgeEl.text);


