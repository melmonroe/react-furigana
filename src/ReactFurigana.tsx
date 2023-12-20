import React from 'react';
import TokenDisplay from './components/TokenDisplay.tsx';
import {Token, Tokenizer} from './tokenizer.ts';

type ReactFuriganaProps = {
    text: string,
    separator?: string,
    leftBracket?: string,
    rightBracket?: string,
    render?: (token: Token) => React.ReactNode
}

export function ReactFurigana(props: ReactFuriganaProps) {

    const tokens = React.useMemo(() => {
        return new Tokenizer(props.text, props.separator, props.leftBracket, props.rightBracket).parse();
    }, [props.text, props.separator, props.leftBracket, props.rightBracket]);

    const render = React.useCallback((token: Token) => {
        return props.render ? props.render(token) : <TokenDisplay token={token}/>
    }, [props.render]);

    return (
        <>
            {tokens.map((token, index) => (
                <React.Fragment key={index}>
                    {render(token)}
                </React.Fragment>
            ))}
        </>
    );

}
