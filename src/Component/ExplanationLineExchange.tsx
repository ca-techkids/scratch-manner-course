


type Props = {
    closeHandler: () => void;
};

export function ExplanationLineExchange(props: Props) {
    return (
        <div className="splash-window flex-column" style={{ height: "100%", width: "100%", justifyContent: "start", overflowY: "auto", alignItems: "center" }}>
            <p>1対1で話すと、大人や先生の目がとどかなくなります。<br></br>
                こわいことを言われても、止めてもらえません。<br></br>
                だから、<span style={{ color: "red", fontWeight: "bold" }}>LINEなどの連絡先はぜったいに教えてはいけません。</span></p>

            <img src="./img/explanation_image_02.png" alt="LINE交換についての解説図" className="slide" style={{ maxHeight: "57%" }} />

            <button onClick={props.closeHandler} className="close-button">
                とじる
            </button>
        </div>
    );
}

// Ensure to update src/Component/ExplanationLineExchange.tsx
