import React from 'react';

export default function Die(props) {

    return(
        <button
            className={props.isHeld ? "activated" : null}
            onClick={props.hold}
        >
            {props.value}
        </button>
    )
}