import {describe, expect, it} from 'vitest';
import {render} from '@testing-library/react';
import Token from './Token.tsx';

describe('Token', () => {

    it('renders without furigana', () => {
        expect(render(
            <Token token={{kanji: '漢字'}}/>
        )).toMatchSnapshot();
    });

    it('renders with furigana', () => {
        expect(render(
            <Token token={{kanji: '漢字', furigana: 'かんじ'}}/>
        )).toMatchSnapshot();
    });

});
