import WordWithFurigana from './WordWithFurigana.tsx';

type WordProps = {
    word: string,
    leftBracket: string,
    rightBracket: string
}

export default function Word(props: WordProps) {

    const leftBracketIndex = props.word.indexOf(props.leftBracket);
    const rightBracketIndex = props.word.indexOf(props.rightBracket);

    if (leftBracketIndex > 0 && rightBracketIndex > 0) {
        return (
            <WordWithFurigana word={props.word}
                              leftBracketIndex={leftBracketIndex} rightBracketIndex={rightBracketIndex}
            />
        );
    }

    return (
        <>
            {props.word}
        </>
    );

}
