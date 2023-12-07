import Ruby from './Ruby.tsx';

type WordWithFuriganaProps = {
    text: string,
    leftBracketIndex: number,
    rightBracketIndex: number
}

export default function WordWithFurigana(props: WordWithFuriganaProps) {

    const kanji = props.text.slice(0, props.leftBracketIndex);
    const furigana = props.text.slice(props.leftBracketIndex + 1, props.rightBracketIndex);
    const remainingText = props.text.slice(props.rightBracketIndex + 1, props.text.length);

    return (
        <>
            <Ruby kanji={kanji} furigana={furigana}/>
            {remainingText}
        </>
    );

}
