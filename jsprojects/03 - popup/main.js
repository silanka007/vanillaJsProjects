const button = document.querySelector('button');
const wrapper = document.querySelector('.popup-wrapper');
const cancel = document.querySelector('.popup-close');

button.addEventListener('click', (e) => {
    wrapper.style.display = 'block';
    e.stopPropagation();
});

cancel.addEventListener('click', (e) =>{
    wrapper.style.display = 'none';
    e.stopPropagation();
})


setTimeout(() => {
    window.addEventListener('load', () => {
        console.log('setting');
        wrapper.style.display = "block";  
        console.log('done')
    })
}, 200);
