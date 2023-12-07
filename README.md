# react-furigana

A simple React component designed for handling Japanese text with furigana annotations.

## Usage

```tsx
import ReactFurigana from 'react-furigana';

function MyComponent() {
    return <ReactFurigana text="漢字[かんじ]は 難[むずか]しい。"/>;
}
```

### Props

- **text** (required): the Japanese text to be processed.
- **separator** (optional, default: `' '`): used to split the input text into individual kanji.
- **leftBracket** (optional, default: `'['`): used to indicate the start of furigana in a word.
- **rightBracket** (optional, default: `']'`): used to indicate the end of furigana in a word.
