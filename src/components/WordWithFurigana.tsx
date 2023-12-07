import Ruby from './Ruby.tsx';

type WordWithFuriganaProps = {
    word: string,
    leftBracketIndex: number,
    rightBracketIndex: number
}

export default function WordWithFurigana(props: WordWithFuriganaProps) {

    const kanji = props.word.slice(0, props.leftBracketIndex);
    const furigana = props.word.slice(props.leftBracketIndex + 1, props.rightBracketIndex);
    const remainingText = props.word.slice(props.rightBracketIndex + 1, props.word.length);

    return (
        <>
            <Ruby kanji={kanji} furigana={furigana}/>
            {remainingText}
        </>
    );

}
