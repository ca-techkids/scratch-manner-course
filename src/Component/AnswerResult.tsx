export type AnswerResultType = {
  explanationImagePath: string;
  isAgainstManners: boolean;
  isShow: boolean;
  setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  closeHandler: () => void;
};

/**
 * 正解・不正解の判定のモーダルウィンドウを表示する
 * @param props
 * @returns
 */
export function AnswerResult(props: AnswerResultType) {
  let result;
  if (props.isAgainstManners) {
    result = <p>正解！</p>;
  } else {
    result = <p>不正解...</p>;
  }

  if (props.isShow) {
    return (
      <div className="overlay">
        <div className="modal-window">
          {result}
          <button onClick={() => {
            props.closeHandler();
            props.setShowAnswer(false);
            }}>close</button>
        </div>
      </div>
    );
  }
  return null;
}
