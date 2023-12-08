export type Token = {
    kanji: string,
    furigana?: string
}

export class Tokenizer {

    //Source: http://www.rikai.com/library/kanjitables/kanji_codes.unicode.shtml
    private static readonly hiraganaRanges = [[0x3040, 0x309F]];
    private static readonly punctuationsMarksRanges = [[0x3000, 0x3004], [0x3006, 0x303F], [0xFF00, 0xFF0F],
        [0xFF1A, 0xFF65], [0xFFA0, 0xFFEF]];

    private readonly text: string;
    private readonly separator: string;
    private readonly leftBracket: string;
    private readonly rightBracket: string;

    private readonly tokens: Token[] = [];
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
            if (!Tokenizer.allowsFurigana(character)) {
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

    private static allowsFurigana(character: string) {
        const unicode = character.charCodeAt(0);
        return !Tokenizer.isHiragana(unicode) && !Tokenizer.isPunctuationMark(unicode);
    }

    private static isHiragana(unicode: number) {
        return Tokenizer.isInRange(unicode, Tokenizer.hiraganaRanges);
    }

    private static isPunctuationMark(unicode: number) {
        return Tokenizer.isInRange(unicode, Tokenizer.punctuationsMarksRanges);
    }

    private static isInRange(unicode: number, ranges: number[][]) {
        return ranges.some(range => unicode >= range[0] && unicode <= range[1]);
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
