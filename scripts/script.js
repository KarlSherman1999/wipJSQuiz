let button = document.getElementById("button");
// let inputBox = document.getElementById("inputText");
// let para = document.getElementById("Example");

// button.addEventListener('click', () => {
//     para.innerHTML = inputBox.value;
// })
let playerName = prompt("What is your name?");
document.getElementById("name").innerHTML = playerName;
let welcome = document.getElementById("welcome");
document.getElementById("a").style.display = "none";
document.getElementById("b").style.display = "none";
document.getElementById("c").style.display = "none";
document.getElementById("d").style.display = "none";
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let endGame = document.getElementById("endgame")

let player = {
    playerName:"",
    points: 0
}

let questions = {
    q1:"What temperature does water boil at in degrees?",
    q2:"Which vitamin is present in citrus fruits?",
    q3:"Bill Gates is the founder of?",
    q4:"who is the founder of Facebook?",
    q5:"Acrophobia is the phobia of?",
    q6:"which princess ate the poisonous apple?",
    q7:"is shark a fish or a mammal?",
    q8:"Which animal can sleep while standing up?",
    q9:"what is the smallest country in the world?",
    q10:"Harvard University is situated in?"
}
// answers d c a a c c a c b a
let answers = {
    a1:["A:60","B:120","C:80","D:100"],
    a2:["A:a","B:b","C:c","D:d"],
    a3:["A:microsoft","B:facebook","C:linux","D:Gates"],
    a4:["A:Mark Zuckerberg","B:Steve Jobs","C:Jeff Bezos","D:Henry Ford"],
    a5:["A:spiders","B:frogs","C:heights","D:small spaces"],
    a6:["A:cinderella","B:belle","C:snow white","D:jasmine"],
    a7:["A:fish","B:mammal"],
    a8:["A:giraffe","B:lion","C:cow","D:chicken"],
    a9:["A:malta","B:vatican city","C:skardu"],
    a10:["A:Cambridge","B:oxford","C:new york"]
}
button.addEventListener(`click`,() => {
    button.onclick = question1(); 
})

const question1 = () => {
    document.getElementById("welcome").innerHTML = questions.q1;
    document.getElementById("answers").innerHTML = answers.a1;
    document.getElementById("button").style.display = "none";
    document.getElementById("a").style.display = "block";
    document.getElementById("b").style.display = "block";
    document.getElementById("c").style.display = "block";
    document.getElementById("d").style.display = "block";
    d.addEventListener(`click`,() => {
        d.onclick = alert("You Chose the correct answer!!!");
        player.points + 1;
        question2(); 
    })
    c.addEventListener(`click`,() => {
        c.onclick = alert("Wrong answer :(");
        question1(); 
    })
    b.addEventListener(`click`,() => {
        b.onclick = alert("Wrong answer :(");
        question1(); 
    })
    a.addEventListener(`click`,() => {
        a.onclick = alert("Wrong answer :(");
        question1(); 
    })
}

const question2 = () => {
    document.getElementById("welcome").innerHTML = questions.q2;
    document.getElementById("answers").innerHTML = answers.a2;
    d.addEventListener(`click`,() => {
        d.onclick = alert("Wrong answer :(");
        question2(); 
    })
    c.addEventListener(`click`,() => {
        c.onclick = alert("You Chose the correct answer!!!");
        player.points + 1;
        question3(); 
    })
    b.addEventListener(`click`,() => {
        b.onclick = alert("Wrong answer :(");
        question2(); 
    })
    a.addEventListener(`click`,() => {
        a.onclick = alert("Wrong answer :(");
        question2(); 
    })
}

const question3 = () => {
    document.getElementById("welcome").innerHTML = questions.q3;
    document.getElementById("answers").innerHTML = answers.a3;
}
const question4 = () => {
    document.getElementById("welcome").innerHTML = questions.q4;
    document.getElementById("answers").innerHTML = answers.a4;
}
const question5 = () => {
    document.getElementById("welcome").innerHTML = questions.q5;
    document.getElementById("answers").innerHTML = answers.a5;
}
const question6 = () => {
    document.getElementById("welcome").innerHTML = questions.q6;
    document.getElementById("answers").innerHTML = answers.a6;
}
const question7 = () => {
    document.getElementById("welcome").innerHTML = questions.q7;
    document.getElementById("answers").innerHTML = answers.a7;
    document.getElementById("c").style.display = "none";
    document.getElementById("d").style.display = "none";
}
const question8 = () => {
    document.getElementById("welcome").innerHTML = questions.q8;
    document.getElementById("answers").innerHTML = answers.a8;
    document.getElementById("c").style.display = "block";
    document.getElementById("d").style.display = "block";
}
const question9 = () => {
    document.getElementById("welcome").innerHTML = questions.q9;
    document.getElementById("answers").innerHTML = answers.a9;
    document.getElementById("d").style.display = "none";
}
const question10 = () => {
    document.getElementById("welcome").innerHTML = questions.q10;
    document.getElementById("answers").innerHTML = answers.a10;
}

const end = () => {
    let endGame = console.log(`Thank you for playing! You scored ${player.points} points!`)
}