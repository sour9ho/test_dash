import { questionType } from "constants/constants"

export const sampleQuestions = {
    1: {
        description: {
            text: "재경의 혈액형으로 알맞은 것은?",
            score: 5,
        },
        type: questionType.multiple,
        answer: [4],
        options: {
            1: {
                text: "A형",
                selected: false,
            },
            2: {
                text: "B형",
                selected: false,
            },
            3: {
                text: "AB형",
                selected: false,
            },
            4: {
                text: "O형",
                selected: false,
            },
        },
        satisfied: false,
    },
    2: {
        description: {
            text: "권재경의 생일로 알맞은 것은?",
            score: 5,
        },
        type: questionType.multiple,
        answer: [4],
        options: {
            1: {
                text: "7월 25일",
                selected: false,
            },
            2: {
                text: "7월 26일",
                selected: false,
            },
            3: {
                text: "7월 27일",
                selected: false,
            },
            4: {
                text: "7월 28일",
                selected: false,
            },
            5: {
                text: "7월 29일",
                selected: false,
            },
        },
        satisfied: false,
    },
    3: {
        description: {
            text: "재경은 작중에서 '나 벤치프레스 (A)kg까지 쳐요. 형 같은 사람 둘도 들 수 있는데.' 라고 말하며 지헌을 들어올리려 하였다. (A)로 알맞은 것은?",
            score: 5,
        },
        type: questionType.multiple,
        answer: [3],
        options: {
            1: {
                text: "160",
                selected: false,
            },
            2: {
                text: "170",
                selected: false,
            },
            3: {
                text: "180",
                selected: false,
            },
            4: {
                text: "190",
                selected: false,
            },
            5: {
                text: "200",
                selected: false,
            },
        },
        satisfied: false,
    },
    4: {
        description: {
            text: "'권재주'는 무엇의 줄임말인가?",
            score: 5,
        },
        type: questionType.short,
        answer: "권재경 주니어",
        text: "",
        satisfied: false,
    },
    5: {
        description: {
            text: "재경이 자유형 계영 400m에 참여했던 대회를 모두 고르시오.",
            score: 5,
        },
        type: questionType.multipleAll,
        answer: [1, 4],
        options: {
            1: {
                text: "16살에 참가한 아시안 게임",
                selected: false,
            },
            2: {
                text: "18살에 참가한 올림픽",
                selected: false,
            },
            3: {
                text: "21살에 참가한 범태평양 선수권 대회",
                selected: false,
            },
            4: {
                text: "22살에 참가한 올림픽",
                selected: false,
            },
        },
        satisfied: false,
    },
    6: {
        description: {
            text: "'그랜드 슬램'이란 네 개의 국제 대회를 석권하는 것을 말한다. 이때 수영에서 그랜드 슬램 달성을 위해 필수로 참여해야 하는 대회를 모두 고르시오.",
            score: 5,
        },
        type: questionType.multipleAll,
        answer: [1, 2, 3],
        options: {
            1: {
                text: "올림픽",
                selected: false,
            },
            2: {
                text: "세계선수권 대회",
                selected: false,
            },
            3: {
                text: "범태평양 선수권 대회",
                selected: false,
            },
            4: {
                text: "아시안 게임",
                selected: false,
            },
        },
        satisfied: false,
    },
    7: {
        description: {
            text: "지니(권진)의 출생 당시 몸무게로 알맞은 것은?",
            score: 5,
        },
        type: questionType.multiple,
        answer: [2],
        options: {
            1: {
                text: "4.5",
                selected: false,
            },
            2: {
                text: "4.6",
                selected: false,
            },
            3: {
                text: "4.7",
                selected: false,
            },
            4: {
                text: "4.8",
                selected: false,
            },
            5: {
                text: "4.9",
                selected: false,
            },
        },
        satisfied: false,
    },
    8: {
        description: {
            text: "재경에게는 형이 한 명 있다. 형제의 나이 차이는 얼마인가?",
            score: 5,
        },
        type: questionType.short,
        answer: "4",
        text: "",
        satisfied: false,
    },
    9: {
        description: {
            text: "재경이 처음으로 촬영한 광고로 알맞은 것은?",
            score: 5,
        },
        type: questionType.multiple,
        answer: [2],
        options: {
            1: {
                text: "은행 광고",
                selected: false,
            },
            2: {
                text: "스포츠 웨어 광고",
                selected: false,
            },
            3: {
                text: "스포츠 음료 광고",
                selected: false,
            },
            4: {
                text: "영양 보충제 광고",
                selected: false,
            },
        },
        satisfied: false,
    },
    10: {
        description: {
            text: "재경은 지헌을 욕하는 댓글에 대댓글을 달던 중, 지헌에게 들켜 포털 아이디를 삭제해야만 했다. 재경이 작성하던 댓글의 내용은 무엇이었는가? (14글자)",
            score: 5,
        },
        type: questionType.short,
        answer: "알못새끼좆도모르면서개나대네",
        text: "",
        satisfied: false,
    },
    11: {
        description: {
            text: "지헌은 17살에 (A)에서 개최된 세계선수권 대회의 (B) 종목에서 동메달을 딴 적이 있다. (A)와 (B)를 바르게 연결 지은 것은?",
            score: 5,
        },
        type: questionType.multiple,
        answer: [3],
        options: {
            1: {
                text: "(A) 뮌헨 (B) 자유형 100m",
                selected: false,
            },
            2: {
                text: "(A) 뮌헨 (B) 자유형 200m",
                selected: false,
            },
            3: {
                text: "(A) 베를린 (B) 자유형 100m",
                selected: false,
            },
            4: {
                text: "(A) 베를린 (B) 자유형 200m",
                selected: false,
            },
        },
        satisfied: false,
    },
    12: {
        description: {
            text: "재경이의 스트로크 스타일은 (A)형이다. (A)는 무엇인가? (4글자)",
            score: 5,
        },
        type: questionType.short,
        answer: "어깨추진",
        text: "",
        satisfied: false,
    },
    13: {
        description: {
            text: "재경이 첫번째로 참여한 올림픽의 개최지로 알맞은 것은?",
            score: 5,
        },
        type: questionType.multiple,
        answer: [3],
        options: {
            1: {
                text: "베를린",
                selected: false,
            },
            2: {
                text: "브리즈번",
                selected: false,
            },
            3: {
                text: "카이로",
                selected: false,
            },
            4: {
                text: "뮌헨",
                selected: false,
            },
            5: {
                text: "시드니",
                selected: false,
            },
        },
        satisfied: false,
    },
    14: {
        description: {
            text: "재경과 지헌이 처음 만난 수영장은 (A)에 위치한 스포츠 센터이다. (A)으로 알맞은 것은?",
            score: 5,
        },
        type: questionType.short,
        answer: "일산",
        text: "",
        satisfied: false,
    },
    15: {
        description: {
            text: "첫 광고 촬영 당시, 재경이 다소 격렬하게 숨을 몰아쉬는 장면을 연출하기 위해 지헌은 '자유형 (A)m 끝난 직후라고 생각해봐.' 라고 조언을 해주었다. (A)로 알맞은 것은?",
            score: 5,
        },
        type: questionType.multiple,
        answer: [5],
        options: {
            1: {
                text: "50",
                selected: false,
            },
            2: {
                text: "100",
                selected: false,
            },
            3: {
                text: "200",
                selected: false,
            },
            4: {
                text: "400",
                selected: false,
            },
            5: {
                text: "800",
                selected: false,
            },
        },
        satisfied: false,
    },
}