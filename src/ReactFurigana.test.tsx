import ReactFurigana from './index.ts';
import {describe, expect, it} from 'vitest';
import {render} from '@testing-library/react';

describe('ReactFurigana', () => {

    it('renders', () => {
        expect(render(
            <ReactFurigana text="日本 語[ご]の漢字[かんじ]は難[むずか]しい。"/>
        )).toMatchSnapshot();
    });

});
