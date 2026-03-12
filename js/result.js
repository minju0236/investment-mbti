const resultCode = localStorage.getItem("investmentMBTI");
const score = JSON.parse(localStorage.getItem("score"));
const nickname = localStorage.getItem("nickname");

let bearType;

if (resultCode.includes("S")) bearType = "안정곰";
else if (resultCode.includes("R")) bearType = "탐험곰";
else if (resultCode.includes("F")) bearType = "충동곰";
else bearType = "균형곰";

const data = resultData[bearType];

document.getElementById("nickname").textContent = nickname;
document.getElementById("nickname2").textContent = nickname;
document.querySelectorAll(".bearName").forEach(el => {
    el.textContent = bearType;
});
document.querySelectorAll(".mbtiCode").forEach(el => {
    el.textContent = resultCode;
});

document.getElementById("summary").textContent = data.summary;
document.getElementById("detail").textContent = data.detail;
document.getElementById("styleText").textContent = data.style;
document.getElementById("warningText").textContent = data.warning;
document.getElementById("bearImage").src = data.image;

const ctx = document.getElementById("mbtiChart");

function percent(a, b) {
    return (a / (a + b)) * 100;
}

const riskLeft = -percent(score.R, score.S);
const riskRight = percent(score.S, score.R);

const termLeft = -percent(score.L, score.Q);
const termRight = percent(score.Q, score.L);

const styleLeft = -percent(score.A, score.P);
const styleRight = percent(score.P, score.A);

const emotionLeft = -percent(score.C, score.F);
const emotionRight = percent(score.F, score.C);

function color(a, b) {
    return a >= b ? "#ECECEC" : "#A635F1";
}

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Risk", "Term", "Style", "Emotion"],
        datasets: [
            {
                data: [riskLeft, termLeft, styleLeft, emotionLeft],
                backgroundColor: [
                    color(score.S, score.R),
                    color(score.Q, score.L),
                    color(score.P, score.A),
                    color(score.F, score.C)
                ],
                borderRadius: 20,
                barThickness: 60
            },
            {
                data: [riskRight, termRight, styleRight, emotionRight],
                backgroundColor: [
                    color(score.R, score.S),
                    color(score.L, score.Q),
                    color(score.A, score.P),
                    color(score.C, score.F)
                ],
                borderRadius: 20,
                barThickness: 60
            }
        ]
    },
    options: {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function (context) {

                        const labels = [
                            ["R", "S"],
                            ["L", "Q"],
                            ["A", "P"],
                            ["C", "F"]
                        ];

                        const row = context.dataIndex;
                        const side = context.datasetIndex;

                        return labels[row][side];
                    }
                }
            }
        },
        scales: {
            x: {
                min: -100,
                max: 100,
                stacked: true,
                ticks: {
                    callback: (v) => Math.abs(v) + "%"
                },
                grid: { display: false }
            },
            y: {
                display: false,
                stacked: true,
                grid: { display: false }
            }
        }
    }
});


const shareBtn = document.querySelector(".share-btn");

shareBtn.addEventListener("click", async () => {

    const shareUrl =
        window.location.origin +
        window.location.pathname +
        `?type=${resultCode}&name=${encodeURIComponent(nickname)}`;

    if (navigator.share) {

        try {
            await navigator.share({
                title: "투자 MBTI 테스트 결과",
                text: `${nickname}님의 투자 MBTI 결과는 ${bearType} (${resultCode}) 입니다.`,
                url: shareUrl
            });
        } catch (e) {
            console.log("share cancelled");
        }

    } else {

        await navigator.clipboard.writeText(shareUrl);
        alert("결과 링크가 복사되었습니다!");

    }

});

const params = new URLSearchParams(window.location.search);

if (params.get("type")) {
    localStorage.setItem("investmentMBTI", params.get("type"));
}

if (params.get("name")) {
    localStorage.setItem("nickname", params.get("name"));
}