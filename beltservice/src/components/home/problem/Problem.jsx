import React from 'react'
import { ProblemContent } from '../../storage/HomeDb'
import './problem.css'

function Problem() {
  return (
    <section className="problem wrapper flexrow">
        <h2>{ProblemContent.title}</h2>
        <p>{ProblemContent.description}</p>
    </section>
  )
}

export default Problem