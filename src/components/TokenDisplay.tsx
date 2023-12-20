import Ruby from './Ruby.tsx';
import {Token} from '../tokenizer.ts';

type TokenDisplayProps = {
    token: Token;
}

export default function TokenDisplay(props: TokenDisplayProps) {

    if (props.token.furigana) {
        return <Ruby kanji={props.token.kanji} furigana={props.token.furigana}/>;
    }

    return props.token.kanji;

}
