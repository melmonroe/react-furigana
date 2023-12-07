import Word from './components/Word.tsx';

const DEFAULT_SEPARATOR = ' ';
const DEFAULT_LEFT_BRACKET = '[';
const DEFAULT_RIGHT_BRACKET = ']';

type ReactFuriganaProps = {
    text: string,
    separator?: string,
    leftBracket?: string,
    rightBracket?: string
}

export function ReactFurigana(props: ReactFuriganaProps) {

    const separator = props.separator ?? DEFAULT_SEPARATOR;
    const leftBracket = props.leftBracket ?? DEFAULT_LEFT_BRACKET;
    const rightBracket = props.rightBracket ?? DEFAULT_RIGHT_BRACKET;

    return (
        <>
            {props.text.split(separator).map((input, index) => (
                <Word key={index} text={input} leftBracket={leftBracket} rightBracket={rightBracket}/>
            ))}
        </>
    );

}
