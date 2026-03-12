const container = document.getElementById("questions");
const progressBar = document.querySelector(".progress-bar");

questionsData.forEach((q, index) => {

    const qDiv = document.createElement("div");
    qDiv.className = "question-block";

    qDiv.innerHTML = `
<h3>Q${index + 1}. ${q.question}</h3>

<div class="options">

${q.options.map(opt => `
<label class="option">
<input type="radio" name="q${index}" value="${opt.value}">
${opt.text}
</label>
`).join("")}

</div>
`;

    container.appendChild(qDiv);

});


function updateProgress() {

    const checkedCount =
        document.querySelectorAll('input[type="radio"]:checked').length;

    progressBar.textContent = `${checkedCount} / 12 진행중`;

}

document.addEventListener("change", (e) => {

    if (e.target.type === "radio") {
        updateProgress();
    }

});


document.getElementById("resultBtn").onclick = () => {

    let score = {
        R: 0, S: 0, L: 0, Q: 0, A: 0, P: 0, C: 0, F: 0
    };

    let answered = 0;

    questionsData.forEach((q, index) => {

        const checked = document.querySelector(`input[name="q${index}"]:checked`);

        if (checked) {
            score[checked.value]++;
            answered++;
        }

    });

    if (answered < 12) {
        alert("모든 질문에 답해주세요.");
        return;
    }

    const result =
        (score.R >= score.S ? "R" : "S") +
        (score.L >= score.Q ? "L" : "Q") +
        (score.A >= score.P ? "A" : "P") +
        (score.C >= score.F ? "C" : "F");

    localStorage.setItem("score", JSON.stringify(score));

    localStorage.setItem("investmentMBTI", result);

    window.location.href = "result.html";

};


updateProgress();