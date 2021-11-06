const quizDB = [
    { question: "The least number among 609, 690, 906 and 960 (a) 609 (b) 690 (c) 906 (d) 960",
        a: "a", 
        b: "b",
        c: "c",
        d: "d",
        ans: "ans1"},
    { question: "Even number just after 211 (a) 212 (b) 312 (c) 214 (d) 412 ",
        a: "a", 
        b: "b",
        c: "c",
        d: "d",
        ans: "ans1"},
    { question: "Forty eight in figures is –(a) 40 (b) 48 (c) 57 (d) 28",
        a: "a", 
        b: "b",
        c: "c",
        d: "d",
        ans: "ans2"},
        { question: "Predecessor of 456 (a) 452 (b) 455 (c) 398 (c) 246 ",
        a: "a", 
        b: "b",
        c: "c",
        d: "d",
        ans: "ans2"},
    { question: " Short form of 300+20+8 is  (a) 328 (b) 261 (c) 752 (d) 346",
        a: "a", 
        b: "b",
        c: "c",
        d: "d",
        ans: "ans1"},
        { question: " Count by 3,s and tick the next number 3, 6, 9, 12, 15, 18, 21, ______, ______, 30 (a) 48, 32 (b) 24, 27 (c) 78, 34 (d) 48, 64 ",
        a: "a", 
        b: "b",
        c: "c",
        d: "d",
        ans: "ans2"},
        { question: " 100 less than 900 (a) 700 (b) 200 (c) 300 (d) 800",
        a: "a", 
        b: "b",
        c: "c",
        d: "d",
        ans: "ans4"},    
        { question: " The short form 500+40+0 (a) 640 (b) 740 (c) 800 (d) 540",
        a: "a", 
        b: "b",
        c: "c",
        d: "d",
        ans: "ans4"},
        { question: " The greatest 3 digit number is  (a) 999 (b) 100 (c) 109 (d) 901",
        a: "a", 
        b: "b",
        c: "c",
        d: "d",
        ans: "ans1"},
        { question: " 10 less than 40 (a) 60 (b) 30 (c) 80 (d) 100",
        a: "a", 
        b: "b",
        c: "c",
        d: "d",
        ans: "ans2"},
       
       
    

]




const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const option = document.querySelector(".option");
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('.score');
const slides1 = document.querySelector('#slides1');
const slides2 = document.querySelector('#slides2');


let questionCount = 0;
let score =0;

const loadQuestion = () =>{
    const questionList = quizDB[questionCount]

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

};

loadQuestion();



const getCheckedAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    });
    return answer;

}
const deselectAll = () =>{
    answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}

function image1(){
    slides1.style.display="block";
}
function image2(){
    slides2.style.display="block";
}



submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer); 
    
    slides1.style.display="none";
    slides2.style.display="none";
    
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
        image1();
        
    }
    else{
        image2();
    };
    
        

});

next.addEventListener('click',() => {

    slides1.style.display="none";
    slides2.style.display="none";

    questionCount++; 
    deselectAll();
     
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3>Well Done!! Rikshit Rathee, you solved ${quizDB.length} questions today. </h3>
        <button class='btn' onclick="location.reload()" >Play again </button>
        `;
        showScore.classList.remove('scoreArea');

    }
});

previous.addEventListener('click',() => {
    questionCount--; 
    deselectAll();
     
    if(questionCount<quizDB.length){
        loadQuestion();
    }
})

