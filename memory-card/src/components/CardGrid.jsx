import React, { useState } from 'react'
import '../styles/CardGrid.css';
import Card from "./Card";
import autovox_logo from "../assets/images/autovox_logo.jpg";
import grado_logo from "../assets/images/grado_logo.jpg";
import hanhwa_aerospace_romania_logo from "../assets/images/hanhwa_aerospace_romania_logo.jpg";
import hanjin_group_logo from "../assets/images/hanjin_group_logo.jpg";
import jets_logo from "../assets/images/jets_logo.jpg";
import lucent_university_logo from "../assets/images/lucent_university_logo.jpg";
import phan_pham_logo from "../assets/images/phan_pham_logo.jpg";
import superga_logo from "../assets/images/superga_logo.jpg";
import zen_brindes_logo from "../assets/images/zen_brindes_logo.jpg";
import {shuffleArray}  from "../utils/utils";


const CardGrid = ({reset, endCurrentGame, incrementCurrentScore}) => {
    const cards = [
        {image: autovox_logo, name: 'autovox'},
        {image: grado_logo, name: 'grado'},
        {image: hanhwa_aerospace_romania_logo, name: 'hanhwa_aerospace_romania'},
        {image: hanjin_group_logo, name: 'hanjin_group_logo'},
        {image: jets_logo, name: 'jets_logo'},
        {image: lucent_university_logo, name: 'lucent_university'},
        {image: phan_pham_logo, name: 'phan_pham_logo'},
        {image: superga_logo, name: 'superga'},
        {image: zen_brindes_logo, name: 'zen_brindes'}
    ]
    const [positions, setPositions] = useState(
        cards.map((value, index) => index)
    )

    

    const randomizeDeck = () => {
        setPositions(shuffleArray(positions))
    }

  return (
    <div id='card-grid'>
        {positions.map((position) => {
            return(
                <Card
						key={cards[position].name}
						image={cards[position].image}
						name={cards[position].name}
						reset={reset}
						endCurrentGame={endCurrentGame}
						incrementCurrentScore={incrementCurrentScore}
						randomizeDeck={randomizeDeck}
					/>
            )
        })}
    </div>
  )
}

export default CardGrid