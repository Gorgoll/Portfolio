import React from 'react';

function BoldThreeLetters(text){
    // scrapped?
    return text
        .split(' ')
        .map(word => {
            if (word.length <= 3) return <strong>{word}</strong>;
            return (
                <>
                    <strong>{word.slice(0, 3)}</strong>{word.slice(3)}
                </>
            );
        })
        .reduce((acc, el, i) => i === 0 ? [el] : [...acc, ' ', el], []);
}

export default BoldThreeLetters;