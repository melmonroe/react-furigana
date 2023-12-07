import Ruby from './Ruby.tsx';
import {Token as TokenType} from '../tokenizer.ts';

type TokenProps = {
    token: TokenType;
}

export default function Token(props: TokenProps) {

    if (props.token.furigana) {
        return <Ruby kanji={props.token.kanji} furigana={props.token.furigana}/>;
    }

    return props.token.kanji;

}
