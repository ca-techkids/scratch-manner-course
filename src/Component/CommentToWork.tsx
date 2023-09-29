import { useState } from "react";
import { AnswerResult } from "./AnswerResult";
import { CommentType } from "../resource";

type CommentTypeWithAction = {
  comment: CommentType;
  answerHandler: (c: CommentType) => void;
  closeHandler: () => void;
};

function CommentToWork(props: CommentTypeWithAction) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [alreadyAnswered, setAnswered] = useState(false);
  const [reportButtonVisiblity, setButtonVisiblity] = useState(false);

  let reportButton;
  if (alreadyAnswered) {
    reportButton = (
      <button className="report-button" disabled>
        報告済み
      </button>
    );
  } else {
    reportButton = (
      <button
        className="report-button"
        onClick={() => {
          props.answerHandler(props.comment);
          setAnswered(true);
          setShowAnswer(true);
        }}
      >
        不適切なコメントとして報告
      </button>
    );
  }

  return (
    <li
      className="comment"
      key={props.comment.date.getTime()}
      onMouseEnter={() => setButtonVisiblity(true)}
      onMouseLeave={() => setButtonVisiblity(false)}
    >
      <div className="comment-left icon">
        <img src={props.comment.iconUrl}></img>
      </div>
      <div className="comment-right">
        <div className="comment-header">
          <div className="comment-header-right">{reportButton}</div>
        </div>
        <div className="comment-body">
          <p className="comment-text">{props.comment.body}</p>
          <p className="comment-date">{props.comment.date.toDateString()}</p>
        </div>
      </div>
      <AnswerResult
        explanationImagePath={props.comment.explanationSlideUrl}
        isAgainstManners={props.comment.isAgainstManners}
        isShow={showAnswer}
        setShowAnswer={setShowAnswer}
        closeHandler={props.closeHandler}
      />
    </li>
  );
}

export { CommentToWork };
