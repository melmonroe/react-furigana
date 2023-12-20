# react-furigana

A simple React component designed for handling Japanese text with furigana annotations.

## Usage

```tsx
import ReactFurigana from 'react-furigana';

function MyComponent() {
    return <ReactFurigana text="漢字[かんじ]は難[むずか]しい。"/>;
}
```

renders

> <ruby>漢字<rt>かんじ</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しい。

```html
<ruby>
    漢字
    <rt>
        かんじ
    </rt>
</ruby>
は
<ruby>
    難
    <rt>
        むずか
    </rt>
</ruby>
しい。
```

You can use a space `' '` to force split the input into individual tokens, e.g.

```tsx
import ReactFurigana from 'react-furigana';

function MyComponent() {
    return <ReactFurigana text="日本 語[ご]"/>;
}
```

will render

> 日本<ruby>語<rt>ご</rt></ruby>

```html
日本
<ruby>
    語
    <rt>
        ご
    </rt>
</ruby>
```

### Props

- **`text`** (required): the Japanese text to be processed.
- **`separator`** (optional, default: `' '`): used to force split the input text into individual tokens.
- **`leftBracket`** (optional, default: `'['`): used to indicate the start of furigana.
- **`rightBracket`** (optional, default: `']'`): used to indicate the end of furigana.
- **`render`** (optional): custom rendering of each token.

#### Custom `render` function

Don't want to use `ruby`? You can provide a custom render function to control how tokens are displayed, e.g.

```tsx
<ReactFurigana
    text="日本語[にほんご]"
    render={token => (
        <div>
            <span className="kanji">
                {token.kanji}
            </span>
            <span className="furigana">
                {token.furigana}
            </span>
        </div>
    )}
/>
```

## License

This project is licensed under a [MIT License](./LICENSE).
