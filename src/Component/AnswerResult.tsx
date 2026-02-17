import Iframe from "react-iframe";
import { ExplanationFriendImpersonation } from "./ExplanationFriendImpersonation";
import { ExplanationLineExchange } from "./ExplanationLineExchange";
import { ExplanationMeetingRequest } from "./ExplanationMeetingRequest";

export type AnswerResultType = {
  explanationPageUrl: string;
  explanationSlideUrl?: string;
  remainNumber: number;
  wrongCount: number;
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
  if (props.explanationSlideUrl) {
    result = (
      <div className="modal-window-result flex-column center">
        <p className="result-text">正解！</p>
        <p className="result-hint">あと {props.remainNumber} 個！</p>
        <p className="result-hint">
          メンターさんと話せたら「とじる」ボタンをクリックしよう
        </p>
        <img
          src="./img/slide_result_1.png"
          alt="このコメントの悪いところをメンターさんと話し合ってみよう"
          className="slide"
        />
        <button
          onClick={() => {
            props.closeHandler();
            props.setShowAnswer(false);
          }}
          className="close-button"
        >
          とじる
        </button>
      </div>
    );
  } else if (
    props.explanationPageUrl === "internal:line_exchange" &&
    props.isAgainstManners
  ) {
    result = (
      <div className="modal-window-result flex-column center">
        <p className="result-text">正解！</p>
        <p className="result-hint">あと {props.remainNumber} 個！</p>
        <p className="result-hint">
          解説を見てみよう！終わったら「とじる」ボタンをクリックしよう
        </p>
        <ExplanationLineExchange
          closeHandler={() => {
            props.closeHandler();
            props.setShowAnswer(false);
          }}
        />
      </div>
    );
  } else if (
    props.explanationPageUrl === "internal:meeting_request" &&
    props.isAgainstManners
  ) {
    result = (
      <div className="modal-window-result flex-column center">
        <p className="result-text">正解！</p>
        <p className="result-hint">あと {props.remainNumber} 個！</p>
        <p className="result-hint">
          解説を見てみよう！終わったら「とじる」ボタンをクリックしよう
        </p>
        <ExplanationMeetingRequest
          closeHandler={() => {
            props.closeHandler();
            props.setShowAnswer(false);
          }}
        />
      </div>
    );
  } else if (
    props.explanationPageUrl === "internal:friend_impersonation" &&
    props.isAgainstManners
  ) {
    result = (
      <div className="modal-window-result flex-column center">
        <p className="result-text">正解！</p>
        <p className="result-hint">あと {props.remainNumber} 個！</p>
        <p className="result-hint">
          解説を見てみよう！終わったら「とじる」ボタンをクリックしよう
        </p>
        <ExplanationFriendImpersonation
          closeHandler={() => {
            props.closeHandler();
            props.setShowAnswer(false);
          }}
        />
      </div>
    );
  } else if (props.isAgainstManners) {
    result = (
      <div className="modal-window-result flex-column center">
        <p className="result-text">正解！</p>
        <p className="result-hint">あと {props.remainNumber} 個！</p>
        <p className="result-hint">
          解説動画を見てみよう！終わったら「とじる」ボタンをクリックしよう
        </p>
        <Iframe
          url={props.explanationPageUrl}
          className="explanation"
          width="100%"
          height="100%"
        />
        <button
          onClick={() => {
            props.closeHandler();
            props.setShowAnswer(false);
          }}
          className="close-button"
        >
          とじる
        </button>
      </div>
    );
  } else {
    result = (
      <div className="modal-window flex-column center">
        <p className="bold xlarge">不正解...</p>
        <p className="result-hint">お手つき: {props.wrongCount} 回目</p>
        <p>ほかにも良くないコメントがないか探してみよう！</p>
        <button
          onClick={() => {
            props.closeHandler();
            props.setShowAnswer(false);
          }}
          className="close-button"
        >
          とじる
        </button>
      </div>
    );
  }

  if (props.isShow) {
    return <div className="overlay">{result}</div>;
  }
  return null;
}
