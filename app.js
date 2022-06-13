var quizQuestions = [
    {
        question: "Q1 : Inside which HTML element do we put the JavaScript?",
        a: " <javascript>",
        b: " <script>",
        c: " <scripting>",
        d: " <js>",
        ans: "ans2"
    },

    {
        question: "Q2 : adding or removing the elements from any index by",
        a: "slice",
        b: 'push',
        c: "splice",
        d: "a & b",
        ans: "ans3"
    }
    ,
    {
        question: "Q3 : Where is the correct place to insert a JavaScript?",
        a: "body",
        b: "head",
        c: "div",
        d: "a & b",
        ans: "ans1"

    }
    ,
    {
        question: "Q4 : if a=5; so ++a + a++ ?",
        a: "10",
        b: "6",
        c: "8",
        d: "12",
        ans: "ans4"

    }
    ,
    {
        question: "Q5 : if(a>b) complete the code",
        a: "{",
        b: "}",
        c: "{ code of block }",
        d: "if else",
        ans: "ans3"

    }
    ,
    {
        question: "Q6 :  Which of the below is used in Java script to insert special characters?",
        a: "&",
        b: ".",
        c: "{ ",
        d: "\\",
        ans: "ans4"
    }
    ,
    {
        question: "Q7 :  JavaScript ignores extra spaces",
        a: "True",
        b: "False",
        c: "a & b",
        d: "Not Mentioned",
        ans: "ans2"
    }
    ,
    {
        question: "Q8 :  Which is the correct way to write a JavaScript array?",
        a: 'var txt = new Array(1:"arr",2:"kim",3:"jim")',
        b: 'var txt = new Array:1=(" arr ")2=("kim")3=("jim")',
        c: 'var txt = new Array("arr ","kim","jim")',
        d: 'var txt = new Array=" arr ","kim","jim"',
        ans: "ans3"
    }
    ,
    {
        question: "Q9 :  3 > 2  === false;",
        a: "True",
        b: "False",
        c: "a & b",
        d: "Not Mentioned",
        ans: "ans2"
    }
    ,
    {
        question: "Q10 :  JavaScript is a ___ -side programming language.",
        a: " Client",
        b: "Server",
        c: "a & b",
        d: "None of the above",
        ans: "ans3"
    }
    ,
    {
        question: "Q11 :  Which of the following is not a valid JavaScript variable name?",
        a: "2java ",
        b: "_java_and_ java _names",
        c: "a & b",
        d: "javaandjava",
        ans: "ans1"
    }
    ,
    {
        question: "Q12:  What language defines the behavior of a web page?",
        a: " HTML ",
        b: " CSS ",
        c: "XML",
        d: "Java Script",
        ans: "ans4"
    }

    ,
    {
        question: "Q13 :  Is it possible to declare a variable in Java Script along its type?",
        a: " Yes ",
        b: " No ",
        c: "May be",
        d: "Not sure",
        ans: "ans1"
    }
    ,
    {
        question: "Q14 : Java Script supports all boolean operators",
        a: "True",
        b: "False",
        c: "a & b",
        d: "Not Mentioned",
        ans: "ans2"
    }
    ,
    {
        question: "Q15 : removed elements, splice returns",
        a: "removed value",
        b: "length",
        c: "array",
        d: "a & b",
        ans: "ans1"
    }

    ,
    {
        question: "Q16 : Select the Sir Ghous Ahmed var teachers = ['Sir Haider Ali', 'Sir Ghous Ahmed','Sir Kashif Sulmeman','Sir Salman Zafar']",
        a: "teachers.slice(0,1)",
        b:  "teachers.slice(2,3)",
        c:  "teachers.slice(3,)",
        d:  "teachers.slice(1,2)",
        ans: "ans4"
    }
    ,
    {
        question: "Q17 : Push and Unshift return" ,
        a: "value",
        b:  "length",
        c:  "whole array",
        d:  "not sure",
        ans: "ans2"
    }
    ,
    {
        question: "Q18 :  var teachers = ['Sir Haider Ali', 'Sir Ghous Ahmed','Sir Kashif Sulmeman','Sir Salman Zafar'] teachers.splice(2,0,'Sir Rizwan Jamal')" ,
        a: "['Sir Haider Ali', 'Sir Ghous Ahmed', 'Sir Rizwan Jamal', 'Sir Kashif Sulmeman', 'Sir Salman Zafar']",
        b:  "['Sir Haider Ali', 'Sir Rizwan Jamal','Sir Ghous Ahmed', 'Sir Kashif Sulmeman', 'Sir Salman Zafar']",
        c:  "['Sir Haider Ali', 'Sir Ghous Ahmed',  'Sir Kashif Sulmeman', 'Sir Rizwan Jamal','Sir Salman Zafar']",
        d:  "['Sir Rizwan Jamal',Sir Haider Ali', 'Sir Ghous Ahmed',  'Sir Kashif Sulmeman', 'Sir Salman Zafar']",
        ans: "ans1"
    }
    ,
    {
        question: 'Q19 :Which are the correct “if” statements to execute certain code if “x” is equal to 2?' ,
        a: " if(x 2)",
        b:  "if(x = 2)",
        c:  "if(x == 2)",
        d:  "if(x != 2 )",
        ans: "ans3"
    }

    ,
    {
        question: 'Q20 :for(i=0;i<=array.length;i++), array[i]' ,
        a: "return the value of the array",
        b:  "return the index of the array",
        c:  "if(x == 2)",
        d:  "if(x != 2 )",
        ans: "ans3"
    }
    
    ,
    {
        question: 'Q21 : var i=8; \n if(i>=0){ \n document.write("The number is a positive integer");\n} \n else{\n document.write("The number is a negative integer");\n}' ,
        a: "The number is a positive integer.",
        b:  "length",
        c:  "The number is a negative integer.",
        d:  "Compiler error or Run time erorr",
        ans: "ans1"
    }
    ,
    {
        question: 'Q22 : Which of the following will write the message “Hello DataFlair!” in an alert box?' ,
        a: " alertBox(“Hello DataFlair!”);",
        b:  " alert(Hello DataFlair!);",
        c:  "The number is a negative integer.",
        d:  " msgAlert(“Hello DataFlair!”);",
        ans: "ans1"
    }
    ,
    {
        question: 'Q23 : If the value of x is 40, then what is the output of the following program? (x % 10 == 0)? console.log(“Divisible by 10”) : console.log(“Not divisible by 10”);' ,
        a: "ReferenceError",
        b:  "Divisible by 10",
        c:  "Not divisible by 10",
        d:  "None of the above",
        ans: "ans2"
    }
    ,
    {
        question: 'Q24 : "SMIT" - 3' ,
        a: "NaN",
        b:  " SyntaxError",
        c:  "T",
        d:  "None of the above",
        ans: "ans1"
    }
    ,
    {
        question: 'Q25 :4-6+(56)*34',
        a: "1902",
        b:  "1920",
        c:  "55",
        d:  "None of the above",
        ans: "ans1"
    }
    
]

var question = document.querySelector('#question');
var opt1 = document.querySelector('#op1');
var opt2 = document.querySelector('#op2');
var opt3 = document.querySelector('#op3');
var opt4 = document.querySelector('#op4');

var answers = document.querySelectorAll(".rad-input")
var submit = document.querySelector('#submit');

var scoreboard = document.querySelector('#scoreboard');

var questionCount = 0;
var score = 0;
function questionLoad() {

    var questionsList = quizQuestions[questionCount];
    question.innerText = questionsList.question;
    opt1.innerText = questionsList.a;
    opt2.innerText = questionsList.b;
    opt3.innerText = questionsList.c;
    opt4.innerText = questionsList.d;

}

questionLoad();

function getCheckAnswer() {
    var answer;
    for (i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answer = answers[i].id

        }

    }
    return answer;


}
function deselect() {
    var answer;
    for (i = 0; i < answers.length; i++) {
        answers[i].checked = false;

    }

}



submit.addEventListener("click", () => {

    var checkAnswers = getCheckAnswer();
    // console.log(checkAnswers)
    if (checkAnswers === quizQuestions[questionCount].ans) {
        score++
        console.log(score)
    }
    else {
        console.log(score)
    }

    questionCount++;
    if (questionCount < quizQuestions.length) {
        questionLoad();
        deselect();
    }
    else if (score > 15) {
        scoreboard.innerHTML = (

            `
            <h3>You Scored ${score} / ${quizQuestions.length}  </h3>
            <p classs="succes">You are Great 🏆</p>
            <button class="btn" onclick ="location.reload()";>Play Again</button>
            <button class="btn" onclick ="location.href='answer.html'";>check Answers</button>
            `
        )
        scoreboard.classList.remove('score_board');
        scoreboard.classList.add('btn');
        submit.classList.add('none')
    }
    else {
        scoreboard.innerHTML = (

            `
            <h3>You Scored ${score} / ${quizQuestions.length}  </h3>
            <p class="fail">You are fail 😞</p>
            <button class="btn" onclick ="location.reload()";>Play Again</button>
            <button class="btn" onclick ="location.href='answer.html'";>check Answers</button>

            `
        )
        scoreboard.classList.remove('score_board');
        scoreboard.classList.add('btn');
        submit.classList.add('none')

    }

})
var teacher = "Sir Ghous Ahmed";
if(teacher==="Ghous Ahmed"){
    alert("you can enjoy quiz")
}