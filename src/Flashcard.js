import React, { useState } from 'react';

function Flashcard({ flashcard })  {
    const [flip, setFlip] = useState(false)

    return (
        <div onClick={() => setFlip(!flip)}>
            {flip ? flashcard.term : flashcard.definition}
        </div>
    )
}