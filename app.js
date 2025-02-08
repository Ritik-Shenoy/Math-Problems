document.getElementById("generateProblem").addEventListener("click", generateProblem);

function generateProblem() {
    const topic = document.getElementById("topic").value;
    let problemText = '';
    let answerText = '';
    let answerButton = document.getElementById("showAnswer");

    // Hide the answer and show the button
    document.getElementById("answer").style.display = "none";
    answerButton.style.display = "block";
    document.getElementById("mathProblem").innerText = "";

    // Logarithm (ensuring integer result)
    if (topic === 'logarithm') {
        const base = Math.floor(Math.random() * 9) + 2; // Random base between 2 and 10
        // Make sure num is a power of base for an integer log result (e.g., base 2 and num 8 => log₂(8) = 3)
        const exponent = Math.floor(Math.random() * 5) + 1; // Random exponent
        const num = Math.pow(base, exponent); // Make num a power of base
        problemText = `log<sup class="log-base">${base}</sup>(${num})`;
        answerText = exponent; // Since log_base(num) = exponent (base^exponent = num)
    } 
    // Exponent (this is already integer by definition)
    else if (topic === 'exponent') {
        const base = Math.floor(Math.random() * 10);
        const exponent = Math.floor(Math.random() * 5);
        problemText = `${base}<sup>${exponent}</sup>`;
        answerText = Math.pow(base, exponent); // This is an integer
    } 
    // Addition (integer result)
    else if (topic === 'addition') {
        const num1 = Math.floor(Math.random() * 100) + 1;
        const num2 = Math.floor(Math.random() * 100) + 1;
        problemText = `${num1} + ${num2}`;
        answerText = num1 + num2; // This is already an integer
    }
    // Subtraction (integer result)
    else if (topic === 'subtraction') {
        const num1 = Math.floor(Math.random() * 100) + 1;
        const num2 = Math.floor(Math.random() * 100) + 1;
        problemText = `${num1} - ${num2}`;
        answerText = num1 - num2; // This is already an integer
    }
    // Multiplication (integer result)
    else if (topic === 'multiplication') {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        problemText = `${num1} × ${num2}`;
        answerText = num1 * num2; // This is already an integer
    }
    // Division (ensuring integer result)
    else if (topic === 'division') {
        const num2 = Math.floor(Math.random() * 10) + 1; // Denominator between 1 and 10
        const num1 = num2 * (Math.floor(Math.random() * 10) + 1); // Make sure num1 is a multiple of num2
        problemText = `${num1} ÷ ${num2}`;
        answerText = num1 / num2; // This will always be an integer
    }

    // Display the problem and the answer
    document.getElementById("mathProblem").innerHTML = problemText;
    document.getElementById("answerText").innerText = answerText;
}

// Show answer when "Show Answer" button is clicked
document.getElementById("showAnswer").addEventListener("click", function() {
    document.getElementById("answer").style.display = "block";
    document.getElementById("showAnswer").style.display = "none";
});
