import { useState } from 'react';
import Die from "./components/Die.jsx";
import './App.css';
import { nanoid } from "nanoid"

export default function App() {

    const generateAllNewDice = () => {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
    }

    const hold = (id) => {
        setDice(oldDice => oldDice.map(die =>
            die.id === id ? {
                ...die,
                isHeld: !die.isHeld
            } : die
        ))
    }

    const [dice, setDice] = useState(generateAllNewDice())

    const diceElements = dice.map(dieObj =>
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
        />
    )

    const rollDice = () => {
        setDice(oldDice => oldDice.map(die =>
            die.isHeld ?
                die :
                {...die,
                    value: Math.ceil(Math.random() * 6)
                }
        ))
    }

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll Dice</button>
        </main>
    )
}