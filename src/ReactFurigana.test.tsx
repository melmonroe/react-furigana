import {render} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import ReactFurigana from './index.ts';

describe('ReactFurigana', () => {

    it('renders', () => {
        expect(render(
            <ReactFurigana text="日本 語[ご]の漢字[かんじ]は難[むずか]しい。"/>
        )).toMatchSnapshot();
    });

    it('々 renders', () => {
        expect(render(
            <ReactFurigana text="様々[さまざま]"/>
        )).toMatchSnapshot();
    });


});
