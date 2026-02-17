type Props = {
    closeHandler: () => void;
};

export function ExplanationFriendImpersonation(props: Props) {
    return (
        <div className="splash-window flex-column" style={{ height: "100%", width: "100%", justifyContent: "start", overflowY: "auto", alignItems: "center" }}>
            <p>インターネットでは、本当にその人かどうかは、見ただけではわかりません。<br></br>悪い人が、友だちをまねしたり、「先生に言わないで」と言ったりして、だまそうとすることがあります。<br></br>
                もし本当に友だちだったとしても、大事なことは おとなの人に相談してから にしましょう。</p>

            {/* <img src="./img/explanation_friend_impersonation.png" alt="なりすましについての解説図" /> */}
            <img src="./img/explanation_friend_impersonation.png" alt="なりすましについての解説図" className="slide" style={{ maxHeight: "57%" }} />

            <button onClick={props.closeHandler} className="close-button">
                とじる
            </button>
        </div>
    );
}
