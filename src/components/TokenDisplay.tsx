import {Token} from '../tokenizer.ts';
import Ruby from './Ruby.tsx';

type TokenDisplayProps = {
    token: Token;
}

export default function TokenDisplay(props: TokenDisplayProps) {

    if (props.token.furigana) {
        return <Ruby kanji={props.token.kanji} furigana={props.token.furigana}/>;
    }

    return props.token.kanji;

}
