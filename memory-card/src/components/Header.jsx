import React from 'react'
import '../styles/Header.css'

const Header = ({score, bestScore}) => {
  return (
    <div>
        <div id="header">
            <div id="header-left-section">
                <h1 id='header-title'>Memory Card Game</h1>
            </div>
            <div id="left-position-section">
                <span>Get points by clicking on an image but don't click on any more than once!</span>
            </div>
        </div>
        <div id="header-right-section">
            <span>Score: {score}</span>
            <span>Best Score: {bestScore}</span>
        </div>
    </div>
  )
}

export default Header