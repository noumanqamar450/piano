//for keyboard for main btn
const mainkey = ["84", "89", "85", "73", "79", "80", "219", "221", "65", "83", "68", "70", "71", "72", "74", "75", "76", "186", "222", "22", "88", "67", "86", "66"];


const mainaudio = document.getElementsByClassName('main');
const mainbtn = document.getElementsByClassName('main-btn');
const mainlight = document.getElementsByClassName('mainlight');

//Add Data Key using forloop for main buttons and main audio
for (let i = 0; i < mainaudio.length; i++) {
    mainaudio[i].setAttribute("data-key", mainkey[i]);
    mainbtn[i].setAttribute("data-key", mainkey[i]);
    mainlight[i].setAttribute("data-key", mainkey[i]);
}


//add function

function pianomainkey(e) {
    const mainaudioplay = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const act_main_btn = document.querySelector(`.main-btn[data-key="${e.keyCode}"]`);
    const act_main_light = document.querySelector(`.mainlight[data-key="${e.keyCode}"]`);

    // console.log(e.keyCode);

    if (!mainaudioplay) return;
    if (!act_main_btn) return;
    if (!act_main_light) return;
    act_main_btn.classList.add('active');
    act_main_light.classList.add('lighton');
    mainaudioplay.currentTime = 0;
    mainaudioplay.play();
}

function pianomainply(e) {
    const act_main_btn_remove = document.querySelector(`.main-btn[data-key="${e.keyCode}"]`);
    const act_main_light_remove = document.querySelector(`.mainlight[data-key="${e.keyCode}"]`);
    if (!act_main_btn_remove) return;
    if (!act_main_light_remove) return;
    act_main_btn_remove.classList.remove('active');
    act_main_light_remove.classList.remove('lighton');
}

window.addEventListener("keyup", pianomainply);
window.addEventListener("keydown", pianomainkey);


// For Sub btn
//for keyboard

const subkey = ["192", "49", "50", "51", "52", "53", "54", "55", "56", "57", "48", "189", "187", "81", "87", "69", "82"];

const subaudio = document.getElementsByClassName('sub');
const subbtn = document.getElementsByClassName('sub-btn');
const sublight = document.getElementsByClassName('sublight');


//Add Data Key using forloop for sub buttons and main audio
for (let i = 0; i < subaudio.length; i++) {
    subaudio[i].setAttribute("data-key", subkey[i]);
    subbtn[i].setAttribute("data-key", subkey[i]);
    sublight[i].setAttribute("data-key", subkey[i]);
}

//add function

function pianosubkey(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const act_btn = document.querySelector(`.sub-btn[data-key="${e.keyCode}"]`);
    const act_light = document.querySelector(`.sublight[data-key="${e.keyCode}"]`);
    // console.log(e.keyCode);
    if (!audio) return;
    if (!act_light) return;
    if (!act_btn) return;

    act_btn.classList.add('active');
    act_light.classList.add('lighton');
    audio.currentTime = 0;
    audio.play();
}

function pianosubply(e) {
    const act_btn_remove = document.querySelector(`.sub-btn[data-key="${e.keyCode}"]`);
    const act_light_remove = document.querySelector(`.sublight[data-key="${e.keyCode}"]`);
    if (!act_btn_remove) return;
    if (!act_light_remove) return;
    act_btn_remove.classList.remove('active');
    act_light_remove.classList.remove('lighton');

}

window.addEventListener("keyup", pianosubply);
window.addEventListener("keydown", pianosubkey);