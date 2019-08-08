function submitAns() {
    let total = 5;
    let score = 0;

    // Questions 

    let q1 = document.forms["trivia"]["q1"].value;
    let q2 = document.forms["trivia"]["q2"].value;
    let q3 = document.forms["trivia"]["q3"].value;
    let q4 = document.forms["trivia"]["q4"].value;
    let q5 = document.forms["trivia"]["q5"].value;

    //Results

    let results = document.querySelector("#results");

    // To check for unanswered questions
 
    for(let i = 1; i <= total; i++) {
        if(eval('q'+i) == null || eval('q'+i) == '') {
            alert('You missed question ' + i);
            return false;
        }
    }

    //Answers

    let answers = ["b", "d", "a", "b", "c"];
    for(let i = 1; i <= total; i++) {
        if(eval('q'+i) == answers[i-1]) {
            score++;
        }
    }

    // if(q1 === answers[0]) {
    //     score++;
    // };
    // if(q2 === answers[1]) {
    //     score++;
    // };
    // if(q3 === answers[2]) {
    //     score++;
    // };
    // if(q4 === answers[3]) {
    //     score++;
    // };
    // if(q5 === answers[4]) {
    //     score++;
    // };

    // alert("you scored " + score + " out of " + total);


    // Results

    results.textContent = "You scored " + score +  " out of " + total + ".";

    return false;
}

