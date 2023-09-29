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
  const [reportButtonVisible, setButtonVisiblity] = useState(false);

  let reportButtonClass = "report-button";
  if (!reportButtonVisible) reportButtonClass += " hidden";

  let dateString = (new Date()).getDate() - props.comment.date.getDate() + "日前";

  let reportButton;
  if (alreadyAnswered) {
    reportButton = (
      <button className={reportButtonClass} disabled>
        報告済み
      </button>
    );
  } else {
    reportButton = (
      <button
        className={reportButtonClass + " reportable"}
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
          <p className="comment-username">{props.comment.author}</p>
          {reportButton}
        </div>
        <div className="comment-bubble">
          <p className="comment-body">{props.comment.body}</p>
          <p className="comment-date">{dateString}</p>
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
