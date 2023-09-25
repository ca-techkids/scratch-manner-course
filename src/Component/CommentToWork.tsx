import { useState } from "react";
import { AnswerResult } from "./AnswerResult";
import { CommentType } from "../resource";

type CommentTypeWithAction = {
  comment: CommentType;
  answerHandler: (c: CommentType) => void;
  closeHandler: () => void;
}

function CommentToWork(props: CommentTypeWithAction) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [alreadyAnswered, setAnswered] = useState(false);

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
    <li className="comment-container" key={props.comment.date.getTime()}>
      <div className="comment-header">
        <div className="comment-header-left">
          <img src={props.comment.iconUrl}></img>
          <p className="comment-date">{props.comment.date.toDateString()}</p>
        </div>
        <div className="comment-header-right">{reportButton}</div>
      </div>
      <div className="comment-main-container">
        <p className="comment-text">{props.comment.body}</p>
      </div>
      <AnswerResult
        explanationImagePath=""
        isAgainstManners={props.comment.isAgainstManners}
        isShow={showAnswer}
        setShowAnswer={setShowAnswer}
        closeHandler={props.closeHandler}
      />
    </li>
  );
}

export { CommentToWork };
