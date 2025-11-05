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

    const getRandomDice = dice.map(dice => <Die value={dice} />)

    return (
        <main>
            <div className="dice-container">
                {getRandomDice}
            </div>
        </main>
    )
}