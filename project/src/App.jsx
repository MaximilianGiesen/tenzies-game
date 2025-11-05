import React from 'react';
import Die from "./components/Die.jsx";
import './App.css';

export default function App(max) {

    const generateAllNewDice = () => {
        let min = 1;
        let max = 6;
        let random = [];

        for (let i = min; i <= 10; i++) {
            let n = Math.floor(Math.random() * (max - min + 1)) + min; random.push(n);
        }

        return random;

    }

    return (
        <main>
            <div className="dice-container">
                <Die
                    value="1"
                />
                <Die
                    value="2"
                />
                <Die
                    value="3"
                />
                <Die
                    value="4"
                />
                <Die
                    value="5"
                />
                <Die
                    value="6"
                />
                <Die
                    value="1"
                />
                <Die
                    value="2"
                />
                <Die
                    value="3"
                />
                <Die
                    value="4"
                />
            </div>
        </main>
    )
}