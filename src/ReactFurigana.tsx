import Token from './components/Token.tsx';
import {Tokenizer} from './tokenizer.ts';
import React from 'react';

type ReactFuriganaProps = {
    text: string,
    separator?: string,
    leftBracket?: string,
    rightBracket?: string
}

export function ReactFurigana(props: ReactFuriganaProps) {

    const tokens = React.useMemo(() => {
        return new Tokenizer(props.text, props.separator, props.leftBracket, props.rightBracket).parse();
    }, [props.text, props.separator, props.leftBracket, props.rightBracket]);

    return (
        <>
            {tokens.map((token, index) => (
                <Token key={index} token={token}/>
            ))}
        </>
    );

}
