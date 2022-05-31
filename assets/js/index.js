let btn = document.getElementsByClassName('btn');

for (let i = 0; i <= btn.length; i++) {
    let btnloop = btn[i];

    btnloop.addEventListener('mousedown', function() {
        piano(i);
    });
    btn[i].addEventListener('mouseup', function() {
        active(i);
    });

}

function piano(e) {
    let active = document.getElementsByClassName('btn')[e];
    let audio = document.getElementsByClassName("audio")[e];
    let light = document.getElementsByClassName("light")[e];

    if (!audio) return;

    active.classList.add('active');
    light.classList.add('lighton');
    audio.currentTime = 0;
    audio.play();
}

function active(e) {
    let active = document.getElementsByClassName('btn')[e];
    let light = document.getElementsByClassName("light")[e];

    active.classList.remove('active');
    light.classList.remove('lighton');
}