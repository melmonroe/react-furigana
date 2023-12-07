import ReactFurigana from './index.ts';
import {describe, expect, it} from 'vitest';
import {render} from '@testing-library/react';

describe('ReactFurigana', () => {

    it('renders', () => {
        expect(render(
            <ReactFurigana text="漢字[かんじ]は 難[むずか]しいので、ふりがなを 振[ふ]る 方[ほう]がいいです。"/>
        )).toMatchSnapshot();
    });

});
