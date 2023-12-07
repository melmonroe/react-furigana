export type Token = {
    kanji: string,
    furigana?: string
}

export class Tokenizer {

    private readonly text: string;
    private readonly separator: string;
    private readonly leftBracket: string;
    private readonly rightBracket: string;

    private tokens: Token[] = [];
    private currentKanji = '';
    private currentFurigana: string | undefined;

    constructor(text: string, separator: string = ' ', leftBracket: string = '[', rightBracket: string = ']') {
        this.text = text;
        this.separator = separator;
        this.leftBracket = leftBracket;
        this.rightBracket = rightBracket;
    }

    parse() {
        if (this.tokens.length > 0) {
            return this.tokens;
        }

        for (const character of this.text) {
            if (this.currentFurigana === undefined) {
                this.parseKanji(character);
            } else {
                this.parseFurigana(character);
            }
        }

        this.addToken();

        return this.tokens;
    }

    private parseKanji(character: string) {
        if (character === this.leftBracket) {
            this.currentFurigana = '';
        } else if (character === this.separator) {
            this.addToken();
        } else {
            this.currentKanji += character;
            if (!this.allowsFurigana(character)) {
                this.addToken();
            }
        }
    }

    private parseFurigana(character: string) {
        if (character === this.rightBracket) {
            this.addToken();
        } else {
            this.currentFurigana += character;
        }
    }

    private allowsFurigana(character: string) {
        return !this.isHiragana(character) && !this.isPunctuation(character);
    }

    private isHiragana(character: string) {
        const unicode = character.charCodeAt(0);
        const hiraganaRange1 = [0x3040, 0x309F];
        const hiraganaRange2 = [0x1B000, 0x1B0FF];
        return (unicode >= hiraganaRange1[0] && unicode <= hiraganaRange1[1])
            || (unicode >= hiraganaRange2[0] && unicode <= hiraganaRange2[1]);
    }

    private isPunctuation(character: string) {
        return ['、', '。', '「', '」', '『', '』', '・', '。', '？', '！', '／'].includes(character);
    }

    private addToken() {
        this.tokens.push({
            kanji: this.currentKanji,
            furigana: this.currentFurigana
        });
        this.currentKanji = '';
        this.currentFurigana = undefined;
    }

}
