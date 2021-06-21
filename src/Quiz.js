import React, { Component } from 'react'

import QuizEnd from './QuizEnd.js'
import QuizQuestion from './QuizQuestion.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
    }

    handleResetClick() {
        this.setState({ quiz_position: 1 })
    }

    showNextQuestion() {
        this.setState(
            (state) => ({ quiz_position: state.quiz_position + 1 })
        )
    }

    render() {
        const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length
        return <div>
            {isQuizEnd
                ? <QuizEnd 
                    resetClickHandler={this.handleResetClick.bind(this)}
                />
                : <QuizQuestion 
                    showNextQuestionHandler={this.showNextQuestion.bind(this)}
                    quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}
                />}
        </div>
    }
}

export default Quiz