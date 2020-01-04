window.addEventListener('keydown',playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


function playSound(e){
    //const audio = document.querySelector('audio[data-key=\"' + e.keyCode +'\"]');
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    
    key.classList.add('playing');
    audio.currentTime = 0; //rewinds to start enabling replaying same key multiple times
    audio.play();
    //for removing the class playing after keyup using setTimeout:
    // setTimeout(()=>{
    //     key.classList.remove('playing');
    // }, 300)
}


function removeTransition(event){
    if(event.propertyName != 'transform') return;
    // this.classList.remove('playing');
    event.target.classList.remove('playing');
}

