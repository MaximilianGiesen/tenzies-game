import {useState, useRef, useEffect} from 'react';
import Confetti from 'react-confetti'
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

    const [dice, setDice] = useState(() => generateAllNewDice())
    const btnRef = useRef(null);


    const gameWon = dice.every(die => die.isHeld) &&
        dice.every((x) => x.value === dice[0].value)

    useEffect(() => {
        if(gameWon) {
            btnRef.current.focus();
        }
    }, [gameWon])

    const hold = (id) => {
        setDice(oldDice => oldDice.map(die =>
            die.id === id ? {
                ...die,
                isHeld: !die.isHeld
            } : die
        ))
    }

    const diceElements = dice.map(dieObj =>
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
        />
    )

    const rollDice = () => {
        if(!gameWon) {
            setDice(oldDice => oldDice.map(die =>
                die.isHeld ?
                    die :
                    {...die,
                        value: Math.ceil(Math.random() * 6)
                    }
            ))
        } else {
            setDice(generateAllNewDice())
        }
    }

    return (
        <main>
            {gameWon && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
            <div className="dice-container">
                {diceElements}
            </div>
            <button ref={btnRef} className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll Dice"}
            </button>
        </main>
    )
}