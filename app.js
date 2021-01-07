const personButt = document.querySelector('#personalize-button');
const fancyButt = document.querySelector('#fancify-button');
let tracker = 0;

personButt.addEventListener('click', () => {
    let userName = document.querySelector('#input-name');
    let userPronouns = document.querySelector('#input-pronouns');
    let trackerText = document.querySelector('.tracker p');
    if ( userName.value ) {
        document.querySelector('.your-name-here').textContent = userName.value;
        userName.value = '';
        // if ( document.querySelector('p.your-name-here').offsetWidth > 275 ) {
        //     document.querySelector('p.your-name-here').style.fontSize = '.5rem';
        // } else 
        tracker++;
        trackerText.textContent = `You've made ${tracker} sweet name tag(s). You should probably Venmo me.`
    }
    if ( userPronouns.value ) {
        document.querySelector('.your-pronouns-here').textContent = userPronouns.value;
        userPronouns.value = '';
    }
})

fancyButt.addEventListener('click', () => {
    let userColor = document.querySelector('#input-color');
    let userFont = document.querySelector('#input-font');
    let userFontSize = document.querySelector('#input-font-size');
    if ( userColor.value ) {
        document.querySelector('.name-tag-label').style.backgroundColor = userColor.value;
        document.querySelector('.name-tag-bottom').style.backgroundColor = userColor.value;
        userColor.value = '';
    }
    if ( userFont.value ) {
        document.querySelector('.name-tag p').style.fontFamily = userFont.value;
        userFont.value = '';
    }
    if ( userFontSize.value ) {
        document.querySelector('p.your-name-here').style.fontSize = userFontSize.value;
        userFontSize.value = '';
    } 
})