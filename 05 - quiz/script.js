const result = ['B', 'A', 'B', 'B'];
const form = document.querySelector('form');
const testScore = document.querySelector('#testScore');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    let score = 0;
    userAnswers.forEach((answer, index) =>{
        if(answer === result[index]){
            score += 25;
        }
    })
    scrollTo(0,0);
    testScore.parentElement.style.display = 'block';
    let output = 0;
    const timer = setInterval(() =>{
        testScore.textContent = `${output}%`;
        if(output == score){
            clearInterval(timer);
        }else{
            output +=1;
        }
    }, 20);
})