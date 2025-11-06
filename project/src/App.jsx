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
        setDice(prevDie => prevDie.map(
            die => {
                return die.id === id ? {
                    ...die,
                    isHeld: !die.isHeld
                } : die
            }
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
        setDice(generateAllNewDice())
    }

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll Dice</button>
        </main>
    )
}