import {describe, expect, it} from 'vitest';
import {render} from '@testing-library/react';
import Word from './Word.tsx';

describe('Word', () => {

    it('renders with furigana', () => {
        expect(render(
            <Word word="漢字[かんじ]は難しい。" leftBracket="[" rightBracket="]"/>
        )).toMatchSnapshot();
    });

    it('renders without furigana', () => {
        expect(render(
            <Word word="漢字[かんじ]は難しい。" leftBracket="(" rightBracket="]"/>
        )).toMatchSnapshot();
    });

    it('renders without furigana', () => {
        expect(render(
            <Word word="漢字[かんじ]は難しい。" leftBracket="(" rightBracket=")"/>
        )).toMatchSnapshot();
    });

    it('renders without furigana', () => {
        expect(render(
            <Word word="漢字[かんじ]は難しい。" leftBracket="[" rightBracket=")"/>
        )).toMatchSnapshot();
    });

});
