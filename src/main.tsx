import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactFurigana from './index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ReactFurigana text="漢字[かんじ]は 難[むずか]しいので、ふりがなを 振[ふ]る 方[ほう]がいいです。"/>
    </React.StrictMode>
);
