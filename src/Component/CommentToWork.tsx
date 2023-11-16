import { useState } from "react";
import { AnswerResult } from "./AnswerResult";
import { CommentType } from "../resource";

type CommentTypeWithAction = {
  comment: CommentType;
  remainNumber: number;
  wrongCount: number;
  answerHandler: (c: CommentType) => void;
  closeHandler: () => void;
};

function CommentToWork(props: CommentTypeWithAction) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [alreadyAnswered, setAnswered] = useState(false);
  const [reportButtonVisible, setButtonVisiblity] = useState(false);

  let reportButtonClass = "report-button";
  if (!reportButtonVisible) reportButtonClass += " hidden";

  let dateString = new Date().getDate() - props.comment.date.getDate() + "日前";

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

  let replies;
  if (props.comment.reply) {
    replies = props.comment.reply.map((r) => {
      return (
        <CommentToWork
          remainNumber={props.remainNumber}
          wrongCount={props.wrongCount}
          answerHandler={props.answerHandler}
          closeHandler={props.closeHandler}
          comment={r}
        />
      );
    });
  }

  return (
    <li key={props.comment.body}>
      <div
        className="comment"
        onMouseEnter={() => setButtonVisiblity(true)}
        onMouseLeave={() => setButtonVisiblity(false)}
      >
        <div className="comment-left icon">
          <img src={props.comment.iconUrl} alt="ユーザーのアイコン" />
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
      </div>
      <ul className="replies">{replies}</ul>
      <AnswerResult
        remainNumber={props.remainNumber}
        wrongCount={props.wrongCount}
        explanationPageUrl={props.comment.explanationPage}
        explanationSlideUrl={props.comment.explanationSlideUrl}
        isAgainstManners={props.comment.isAgainstManners}
        isShow={showAnswer}
        setShowAnswer={setShowAnswer}
        closeHandler={props.closeHandler}
      />
    </li>
  );
}

export { CommentToWork };
