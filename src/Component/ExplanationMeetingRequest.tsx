
type Props = {
    closeHandler: () => void;
};

export function ExplanationMeetingRequest(props: Props) {
    return (
        <div className="splash-window flex-column" style={{ height: "100%", width: "100%", justifyContent: "start", overflowY: "auto", alignItems: "center" }}>
            <p>ネットでは、その人の年れいも、性別も、名前も、本当かどうかわかりません。<br></br>
                <span style={{ color: "red", fontWeight: "bold" }}>「会おう」と言われても、ぜったいに約束してはいけません。</span><br></br>
                すぐに大人に相談します。</p>

            <img src="./img/explanation_image_03.png" alt="会おうという誘いについての解説図" className="slide" style={{ maxHeight: "57%" }} />

            <button onClick={props.closeHandler} className="close-button">
                とじる
            </button>
        </div>
    );
}
