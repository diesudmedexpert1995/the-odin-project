import React, { useState, useEffect } from 'react';
import '../styles/Card.css'
import {name_prettify} from '../utils/utils';

const Card = ({image, name, reset, endCurrentGame, incrementCurrentScore, randomizeDeck}) => {
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () =>{
        setIsClicked(!isClicked)
        if (isClicked) {
            endCurrentGame()
        }else {
            incrementCurrentScore()
        }
        randomizeDeck()
    }
    useEffect(()=>{
        if(reset){
            setIsClicked(false)
        }
    }, [reset])
  return (
    <div className="card" key={image} onClick={handleClick}>
			<img src={image} alt={name}></img>
			<br></br>
			<span>
				<strong>{name_prettify(name)}</strong>
			</span>
		</div>
  )
}

export default Card