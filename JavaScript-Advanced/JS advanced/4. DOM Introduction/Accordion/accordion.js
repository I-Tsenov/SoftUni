function toggle() {
    let moreText = document.getElementById('extra');
    let moreOrLess = document.getElementsByClassName('button')[0].textContent;

    if (moreOrLess === 'Less') {
    moreText.style.display = 'none';
    document.getElementsByClassName('button')[0].textContent = 'More';
    } else if (moreOrLess === 'More') {
    moreText.style.display = 'block';
    document.getElementsByClassName('button')[0].textContent = 'Less';
    }
}
