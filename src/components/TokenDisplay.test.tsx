import {render} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import TokenDisplay from './TokenDisplay.tsx';

describe('TokenDisplay', () => {

    it('renders without furigana', () => {
        expect(render(
            <TokenDisplay token={{kanji: '漢字'}}/>
        )).toMatchSnapshot();
    });

    it('renders with furigana', () => {
        expect(render(
            <TokenDisplay token={{kanji: '漢字', furigana: 'かんじ'}}/>
        )).toMatchSnapshot();
    });

});
