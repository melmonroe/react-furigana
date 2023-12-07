import {describe, expect, it} from 'vitest';
import {render} from '@testing-library/react';
import Ruby from './Ruby.tsx';

describe('Ruby', () => {

    it('renders', () => {
        expect(render(
            <Ruby kanji="漢字" furigana="かんじ"/>
        )).toMatchSnapshot();
    });

});
