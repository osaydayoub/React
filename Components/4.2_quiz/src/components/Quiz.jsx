import React from 'react'
import './Quiz.css'
import QuizTitle from './QuizTitle'
import Q1 from './Q1'
import Q1Input from './Q1Input'
import Q2 from './Q2'
import Q2Input from './Q2Input'

function Quiz() {
    return (
        <div className='quiz-container'>
            <QuizTitle />
            <div>
                <Q1 />
                <Q1Input />
            </div>
            <div>
                <Q2 />
                <Q2Input/>
            </div>


        </div>
    )
}

export default Quiz
