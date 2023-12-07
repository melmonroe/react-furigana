type RubyProps = {
    kanji: string,
    furigana: string
}

export default function Ruby(props: RubyProps) {
    return (
        <ruby>
            {props.kanji}
            <rt>
                {props.furigana}
            </rt>
        </ruby>
    );
}
