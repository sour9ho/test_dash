import React, { useState } from 'react'
import { questionType } from 'constants/constants'

/*
questions = {
    questionNumber: {
        description: {
            text: string,
            score: number,
        },
        type: Symbol (multiple, multipleAll),
        answer: [ number, ... ],
        options: {
            optionsNumber: {
                text: string;
                selected: boolean (false)
            },
            ...
        }
        satisfied: boolean (false),
    },
    ...
}
 */

/*
questions = {
    questionNumber: {
        description: {
            text: string,
            score: number,
        },
        type: Symbol (short),
        answer: string,
        text: string,
        satisfied: boolean (false),
    },
    ...
}
 */


function useQuestions(initialQuestions) {
    const [questions, setQuestions] = useState(initialQuestions)
    const [progress, setProgress] = useState({
        total: Object.keys(questions).length,
        current: 0,
    })

    const setSelected = (questionNumber, selection) => {
        const q = {
            ...questions
        }
        const question = q[questionNumber]
        const { type } = question
        const { total, current } = progress
        let progressCount = current

        // optionNumber의 selected 업데이트
        // options을 순회하며 selected가 몇 개인지 체크 -> satisfied update ->
        if (type === questionType.multiple) {
            let { answer, options, satisfied } = question
            const numAnswer = answer.length
            if (numAnswer === 1) {
                // 답이 1개
                if (satisfied) {
                    // 선택지가 선택되어 있는 경우
                    let selectedOptionNumber = 0;
                    for (let on in options){
                        if(options[on].selected){
                            selectedOptionNumber = on
                        }
                    }
                    if (selectedOptionNumber === selection){
                        // 똑같은 거 선택한 경우
                        options[selectedOptionNumber].selected = false
                        satisfied = false
                        progressCount--
                    } else{
                        options[selectedOptionNumber].selected = false
                        options[selection].selected = true
                    }
                } else{
                    // 선택지가 선택되어 있지 않은 경우
                    options[selection].selected = true
                    satisfied = true
                    progressCount++
                }

            } else {
                // 답이 여러개
                if (satisfied) {
                    // 선택지가 선택되어 있는 경우
                    for (let on in options){
                        if(options[on].selected && selection === on){
                            // 이미 선택되어 있는 선택지를 고른 경우 satisfied 해제
                            options[on].selected = false
                            satisfied = false
                            progressCount--
                        }
                    }
                    // 선택지가 선택되어 있지 않은 경우
                    // 아무것도 하지 않음. 기존에 선택한 것 중 하나를 취소해야 선택 가능.
                } else{
                    // 선택지가 다 선택되지 않은 경우
                    let alreadySelected = false
                    let selectedCount = 0
                    for (let on in options){
                        if (options[on].selected) {
                            selectedCount++
                            if(selection === on){
                                // 이미 선택되어 있는 선택지를 고른 경우
                                options[on].selected = false
                                alreadySelected = true
                            }
                        }
                    }
                    if (!alreadySelected) {
                        // 새로운 선택지를 고른 경우
                        options[selection].selected = true
                        if(selectedCount + 1 === numAnswer){
                            satisfied = true
                            progressCount++
                        }
                    }
                }
            }
            q[questionNumber] = {
                ...question,
                options: options,
                satisfied: satisfied,
            }

        } else if (type === questionType.multipleAll) {
            let { options, satisfied } = question
            
            if (satisfied) {
                // 뭐든 하나가 선택되어 있음
                let alreadySelected = false
                let selectedCount = 0
                for (let on in options){
                    if (options[on].selected) {
                        if(selection === on){
                            // 이미 선택되어 있는 선택지를 고른 경우
                            options[on].selected = false
                            alreadySelected = true
                        } else {
                            selectedCount++
                        }
                    }
                }
                if (! alreadySelected) {
                    options[selection].selected = true
                }
                if (selectedCount === 0){
                    satisfied = false
                    progressCount--
                }
            } else {
                options[selection].selected = true
                satisfied = true
                progressCount++
            }
            q[questionNumber] = {
                ...question,
                options: options,
                satisfied: satisfied,
            }

        } else if (type === questionType.short) {
            let { satisfied } = question
            let s = selection
            let temp = ""
            for (let i=0; i<s.length; i++){
                if (/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z|0-9|]+$/.test(s[i])){
                    temp += s[i]
                }
            }
            s = temp

            const newSatisfied = (s.length !== 0)
            if (satisfied && !newSatisfied) {
                progressCount--
            } else if (!satisfied && newSatisfied) {
                progressCount++
            }
            satisfied = newSatisfied

            q[questionNumber] = {
                ...question,
                text: s,
                satisfied: satisfied,
            }
        } else {
            console.log("not designated type")
        }

        setQuestions(q)
        setProgress({
            total: total,
            current: progressCount,
        })
    }

    const processAnswer = (answer) => {
        let ans = ""
        let answerType = 'number'
        for (let i=0; i<answer.length; i++) {
            if (/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z|0-9|]+$/.test(answer[i])) {
                if (!/^[0-9|]+$/.test(answer[i])) {
                    answerType = 'text'
                }
                ans += answer[i]
            }
        }
        return [answerType, ans]
    }

    const getQuestionInfo = () => {
        let totalScore = 0;
        let short = 0;
        let multiple = 0;

        for (const questionNumber in questions) {
            const question = questions[questionNumber]
            const { type, description } = question
            const { score } = description

            totalScore += score
            if (type === questionType.multiple || type === questionType.multipleAll) {
                multiple++
            } else if (type === questionType.short) {
                short++
            }
        }

        return {
            totalScore: totalScore,
            numOfQuestions: short+multiple,
            shortAnswer: short,
            multipleAnswer: multiple,
        }
    }

    const getResult = () => {
        let resultText = ""
        let resultScore = 0;
        let totalScore = 0;

        for (const questionNumber in questions) {
            const question = questions[questionNumber]
            const { type, answer, description } = question
            const { score } = description

            let rightAnswer = false
            
            if (type === questionType.multiple || type === questionType.multipleAll) {
                const { options } = question
                let ans = []
                for (const optionNumber in options) {
                    const option = options[optionNumber]
                    if (option.selected) {
                        ans.push(parseInt(optionNumber, 10))
                    }
                }
                if (ans.length === answer.length) {
                    rightAnswer = true
                    for (let i=0; i<answer.length; i++){
                        if (ans[i] !== answer[i]) {
                            rightAnswer = false
                            break
                        }
                    }
                }
            } else if (type === questionType.short) {
                let { text } = question
                let [answerType, ans] = processAnswer(answer)
                if (answerType === 'number') {
                    ans = parseInt(ans, 10)
                    text = parseInt(text, 10)
                }
                if (ans === text) {
                    rightAnswer = true
                }
            }
            
            if (rightAnswer) {
                resultText += '🟩'
                resultScore += score
            } else{
                resultText += '🟥'
            }
            totalScore += score
        }

        return {
            resultText: resultText,
            resultScore: resultScore,
            totalScore: totalScore,
        }
    }

    const questionInfo = getQuestionInfo()

    return [questionInfo, questions, setSelected, progress, getResult]
}

export default useQuestions;