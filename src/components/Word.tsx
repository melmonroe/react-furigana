import WordWithFurigana from './WordWithFurigana.tsx';

type WordProps = {
    text: string,
    leftBracket: string,
    rightBracket: string
}

export default function Word(props: WordProps) {

    const leftBracketIndex = props.text.indexOf(props.leftBracket);
    const rightBracketIndex = props.text.indexOf(props.rightBracket);

    if (leftBracketIndex > 0 && rightBracketIndex > 0) {
        return (
            <WordWithFurigana text={props.text}
                              leftBracketIndex={leftBracketIndex} rightBracketIndex={rightBracketIndex}
            />
        );
    }

    return (
        <>
            {props.text}
        </>
    );

}
