import { questionType } from "constants/constants"

export const sampleQuestions = {
    0: {
        description: {
            text: "권재경과 정지헌의 나이 차이는?",
            score: 32,
        },
        type: questionType.short,
        answer: "6",
        text: "",
        satisfied: false,
    },
    1: {
        description: {
            text: "'권재수'는 무엇의 줄임말인가?",
            score: 1,
        },
        type: questionType.short,
        answer: "권재경 아들 수영함",
        text: "",
        satisfied: false,
    },
    2: {
        description: {
            text: "다음 중 '권재주'의 의미로 알맞은 것은?",
            score: 2,
        },
        type: questionType.multiple,
        answer: [2],
        options: {
            1: {
                text: "권재경 재주 좋네",
                selected: false,
            },
            2: {
                text: "권재경 주니어",
                selected: false,
            },
            3: {
                text: "권재경 주인님",
                selected: false,
            },
            4: {
                text: "권재경 씨, 주가 폭락했대요",
                selected: false,
            },
        },
        satisfied: false,
    },
    3: {
        description: {
            text: "다음 중 옳은 것은?",
            score: 4,
        },
        type: questionType.multiple,
        answer: [4, 5],
        options: {
            1: {
                text: "권재경은 올림픽에서 메달을 딴 적 없다.",
                selected: false,
            },
            2: {
                text: "권재경은 중졸이다.",
                selected: false,
            },
            3: {
                text: "권재경은 다정공이 아니다.",
                selected: false,
            },
            4: {
                text: "권재경은 졸라 귀엽다.",
                selected: false,
            },
            5: {
                text: "권재경은 정지헌의 아내다.",
                selected: false,
            },
        },
        satisfied: false,
    },
    4: {
        description: {
            text: "다음 중 '권재주'의 의미로 알맞은 것을 모두 고르시오.",
            score: 8,
        },
        type: questionType.multipleAll,
        answer: [2],
        options: {
            1: {
                text: "권재경 재주 좋네",
                selected: false,
            },
            2: {
                text: "권재경 주니어",
                selected: false,
            },
            3: {
                text: "권재경 주인님",
                selected: false,
            },
            4: {
                text: "권재경 씨, 주가 폭락했대요",
                selected: false,
            },
        },
        satisfied: false,
    },
    5: {
        description: {
            text: "다음 중 옳은 것을 모두 고르시오.",
            score: 16,
        },
        type: questionType.multipleAll,
        answer: [4, 5],
        options: {
            1: {
                text: "권재경은 올림픽에서 메달을 딴 적 없다.",
                selected: false,
            },
            2: {
                text: "권재경은 중졸이다.",
                selected: false,
            },
            3: {
                text: "권재경은 다정공이 아니다.",
                selected: false,
            },
            4: {
                text: "권재경은 졸라 귀엽다.",
                selected: false,
            },
            5: {
                text: "권재경은 정지헌의 아내다.",
                selected: false,
            },
        },
        satisfied: false,
    },
}