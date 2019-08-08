let questions = [
    {
        prompt: "What year was Liverpool founded?\n\(a) 1922\n\(b) 1892\n(c) 1872\n\(d) 1932",
        answer: "b" 
    },

    {
        prompt: "What year was Liverpool founded?\n\(a) 1922\n\(b) 1892\n(c) 1872\n\(d) 1932",
        answer: "b" 
    },

    {
        prompt: "What year was Liverpool founded?\n\(a) 1922\n\(b) 1892\n(c) 1872\n\(d) 1932",
        answer: "b" 
    },
    {
        prompt: "What year was Liverpool founded?\n\(a) 1922\n\(b) 1892\n(c) 1872\n\(d) 1932",
        answer: "b" 
    },
    {
        prompt: "What year was Liverpool founded?\n\(a) 1922\n\(b) 1892\n(c) 1872\n\(d) 1932",
        answer: "b" 
    },
]

let score = 0;
 for (let i = 0; i < questions.length; i++) {
     let response = window.prompt(questions[i].prompt);
     if(response === questions[i].answer){
         score++;
     } 
 }

 alert("You got " + score + "/" + questions.length);