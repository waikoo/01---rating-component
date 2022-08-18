const buttons = document.getElementsByClassName("rating-con")

function highlight(highlighted) {
    for (i=0; i<buttons.length; i++) {
        if (buttons[i] === highlighted) {
            buttons[i].classList.add('clicked')
            document.querySelector('p span').textContent = buttons[i].textContent
            console.log(document.querySelector("p span").textContent);
        } else {
            buttons[i].classList.remove('clicked')
        }
    }
}

for (i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        highlight(this)
    })
}

function submit() {
    document.querySelector('.window-1').style.display = "none"
    document.querySelector('.window-2').style.display = "flex"
}