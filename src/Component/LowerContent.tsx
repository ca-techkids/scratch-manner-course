import { useEffect, useState } from "react";
import * as resource from "../resource";
import { CommentToWork } from "./CommentToWork";
import { TotalResult } from "./TotalResult";
import { Retry } from "./Retry";

/**
 * 画面下部のコメント欄を描画する
 * @returns
 */
export function LowerContent() {
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [isAnsweredAllTarget, setAnsweredAllTarget] = useState(false);
  const [isShowTotalResult, setShowTotalResult] = useState(false);
  const [isShowRetry, setShowRetry] = useState(false);

  const comments = resource.getComments();
  const targetCount = resource.countTarget(comments);

  useEffect(() => {
    if (correctCount === targetCount) {
      setAnsweredAllTarget(true);
      console.log("all answered.");
    }
    if (wrongCount === 3) {
      setShowRetry(true);
    }
  }, [correctCount, wrongCount, targetCount]);

  const commentAsList = comments.map((c) => {
    return (
      <CommentToWork
        comment={c}
        remainNumber={targetCount - correctCount}
        wrongCount={wrongCount}
        answerHandler={(c) => {
          if (c.isAgainstManners) {
            setCorrectCount(correctCount + 1);
          } else {
            setWrongCount(wrongCount + 1);
          }
          console.log("correct count: " + correctCount);
        }}
        closeHandler={() => {
          if (isAnsweredAllTarget) {
            setShowTotalResult(true);
            console.log("prepared show total result.");
          }
        }}
        key={c.body}
      />
    );
  });

  return (
    <div className="lower-content center">
      <TotalResult
        questionCount={comments.length}
        correctCount={correctCount}
        wrongCount={wrongCount}
        enabled={isShowTotalResult}
      />
      <Retry enabled={isShowRetry} />
      <div className="comment-container flex-column">
        <h2>コメント</h2>
        <ul className="comments">{commentAsList}</ul>
      </div>
    </div>
  );
}
