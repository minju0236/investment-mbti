const data = [

    {
        type: "risk",
        question: "투자한 주식이 하루 만에 10% 떨어졌다. 당신은?",
        options: [
            { text: "싸졌네. 조금 더 산다", value: "R" },
            { text: "일단 상황을 지켜본다", value: "S" },
            { text: "일부만 판다", value: "S" },
            { text: "바로 정리한다", value: "S" }
        ]
    },

    {
        type: "risk",
        question: "새로운 코인이 갑자기 급등 중이다. 당신은?",
        options: [
            { text: "지금이라도 바로 들어간다", value: "R" },
            { text: "소액만 투자해본다", value: "R" },
            { text: "정보 좀 더 찾아본다", value: "S" },
            { text: "이런 건 안 건드린다", value: "S" }
        ]
    },

    {
        type: "risk",
        question: "친구가 '이거 뜬다'며 투자 추천을 했다.",
        options: [
            { text: "바로 투자한다", value: "R" },
            { text: "조금만 투자해본다", value: "R" },
            { text: "직접 찾아보고 판단한다", value: "S" },
            { text: "그냥 넘긴다", value: "S" }
        ]
    },

    {
        type: "term",
        question: "투자를 시작한다면 어떤 방식이 편한가?",
        options: [
            { text: "길게 묵혀두는 투자", value: "T" },
            { text: "중장기 투자", value: "T" },
            { text: "몇 달 단위 투자", value: "Q" },
            { text: "짧게 사고파는 투자", value: "Q" }
        ]
    },

    {
        type: "term",
        question: "주식이 20% 수익이 났다. 당신은?",
        options: [
            { text: "더 오래 가져간다", value: "T" },
            { text: "조금 더 기다린다", value: "T" },
            { text: "일부 매도한다", value: "Q" },
            { text: "바로 수익 실현한다", value: "Q" }
        ]
    },

    {
        type: "term",
        question: "투자 계획을 세울 때 나는",
        options: [
            { text: "몇 년 단위로 생각한다", value: "T" },
            { text: "1년 정도 생각한다", value: "T" },
            { text: "몇 달 단위로 본다", value: "Q" },
            { text: "단기 흐름 위주로 본다", value: "Q" }
        ]
    },

    {
        type: "style",
        question: "새로운 투자 종목을 찾을 때 나는",
        options: [
            { text: "재무제표부터 본다", value: "A" },
            { text: "자료를 꽤 찾아본다", value: "A" },
            { text: "대략적인 정보만 본다", value: "P" },
            { text: "느낌이 좋으면 산다", value: "P" }
        ]
    },

    {
        type: "style",
        question: "투자 결정을 내릴 때 나는",
        options: [
            { text: "데이터와 지표를 본다", value: "A" },
            { text: "뉴스와 정보들을 본다", value: "A" },
            { text: "주변 의견을 참고한다", value: "P" },
            { text: "내 감을 믿는다", value: "P" }
        ]
    },

    {
        type: "style",
        question: "투자 전 나는 보통",
        options: [
            { text: "기업 분석을 자세히 한다", value: "A" },
            { text: "기본 정보는 확인한다", value: "A" },
            { text: "대충 훑어본다", value: "P" },
            { text: "그냥 감으로 결정한다", value: "P" }
        ]
    },

    {
        type: "emotion",
        question: "투자 수익이 크게 났을 때 나는",
        options: [
            { text: "차분하게 다음 계획을 세운다", value: "C" },
            { text: "일단 상황을 더 본다", value: "C" },
            { text: "기분 좋아서 조금 더 투자한다", value: "F" },
            { text: "신나서 크게 투자한다", value: "F" }
        ]
    },

    {
        type: "emotion",
        question: "투자가 크게 손실 났을 때 나는",
        options: [
            { text: "냉정하게 원인을 분석한다", value: "C" },
            { text: "잠시 쉬면서 상황을 본다", value: "C" },
            { text: "기분이 많이 흔들린다", value: "F" },
            { text: "화나서 바로 행동한다", value: "F" }
        ]
    },

    {
        type: "emotion",
        question: "투자 시장이 크게 흔들릴 때 나는",
        options: [
            { text: "계획대로 움직인다", value: "C" },
            { text: "상황을 분석한다", value: "C" },
            { text: "조금 불안해진다", value: "F" },
            { text: "감정이 크게 흔들린다", value: "F" }
        ]
    }

];