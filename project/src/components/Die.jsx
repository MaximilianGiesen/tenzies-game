import React from 'react';

export default function Die(props) {

    return(
        <button
            className={props.isHeld ? "activated" : null}
            onClick={props.hold}
            aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
        >
            {props.value}
        </button>
    )
}