import { questionType } from "constants/constants"

export const sampleQuestions = {
    
    1: {
        description: {
            text: "다음 중 '권재수'의 의미로 알맞은 것은?",
            score: 5,
        },
        type: questionType.multiple,
        answer: [2],
        options: {
            1: {
                text: "권재경 재수 없음",
                selected: false,
            },
            2: {
                text: "권재경 아들 수영함",
                selected: false,
            },
            3: {
                text: "권재경 재수함",
                selected: false,
            },
            4: {
                text: "권재경 아들 수영했으면 좋겠다",
                selected: false,
            },
        },
        satisfied: false,
    },
    2: {
        description: {
            text: "권재경의 생일은?",
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
            text: "다음 중 옳은 것을 모두 고르시오",
            score: 5,
        },
        type: questionType.multipleAll,
        answer: [1, 3],
        options: {
            1: {
                text: "IM은 개인 혼영을 뜻한다.",
                selected: false,
            },
            2: {
                text: "권재경은 그랜드 슬램을 달성한 적 없다.",
                selected: false,
            },
            3: {
                text: "권재경은 올포디움을 달성한 적 있다.",
                selected: false,
            },
            4: {
                text: "정지헌은 올림픽에서 메달을 딴 적 있다.",
                selected: false,
            },
            5: {
                text: "정지헌은 범태평양 수영 선수권 대회에 참여한 적 있다.",
                selected: false,
            }
        },
        satisfied: false,
    },
    4: {
        description: {
            text: "권재경과 정지헌의 나이 차이는?",
            score: 5,
        },
        type: questionType.short,
        answer: "6",
        text: "",
        satisfied: false,
    },
    5: {
        description: {
            text: "'권재주'는 무엇의 줄임말인가?",
            score: 5,
        },
        type: questionType.short,
        answer: "권재경 주니어",
        text: "",
        satisfied: false,
    },
}