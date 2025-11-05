import React from 'react';
import Die from "./components/Die.jsx";
import './App.css';

export default function App(max) {

    const generateAllNewDice = () => {
        let newDice = [];

        for (let i = 0; i < 10; i++) {
            let random = Math.floor(Math.random() * 6);
            newDice.push(random);
        }

        return newDice;
    }

    console.log(generateAllNewDice())

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