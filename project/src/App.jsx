import { useState } from 'react';
import Die from "./components/Die.jsx";
import './App.css';

export default function App(max) {

    const generateAllNewDice = () => {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }

    const [dice, setDice] = useState(generateAllNewDice())

    const diceElements = dice.map(num => <Die value={num} />)

    const rollDice = () => {
        setDice(generateAllNewDice())
    }

    return (
        <main>
            <div className="dice-container">
                {diceElements}
                <button className="roll-dice-button" onClick={rollDice}>Roll Dice</button>
            </div>
        </main>
    )
}