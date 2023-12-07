import {describe, expect, it} from 'vitest';
import {render} from '@testing-library/react';
import WordWithFurigana from './WordWithFurigana.tsx';

describe('WordWithFurigana', () => {

    it('renders without remaining text', () => {
        expect(render(
            <WordWithFurigana word="漢字[かんじ]" leftBracketIndex={2} rightBracketIndex={6}/>
        )).toMatchSnapshot();
    });

    it('renders with remaining text', () => {
        expect(render(
            <WordWithFurigana word="漢字[かんじ]は難しい。" leftBracketIndex={2} rightBracketIndex={6}/>
        )).toMatchSnapshot();
    });
});

