import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactFurigana from './index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ReactFurigana text="日本 語[ご]の漢字[かんじ]は難[むずか]しい。"/>
    </React.StrictMode>
);
