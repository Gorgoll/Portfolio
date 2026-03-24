import type { ReactNode } from "react";

// scrapped?
function BoldThreeLetters(text: string): ReactNode {
    if (!text?.trim()) return text;

    return text.split(" ").map((word, index) => {
        if (word.length <= 3) {
            return <strong key={index}>{word}</strong>;
        }

        return (
            <>
                <strong>{word.slice(0, 3)}</strong>
                {word.slice(3)}
            </>
        );
    });
}

export default BoldThreeLetters;