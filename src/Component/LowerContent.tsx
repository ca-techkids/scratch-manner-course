import { useEffect, useState } from "react";
import * as resource from "../resource";
import { CommentToWork } from "./CommentToWork";
import { TotalResult } from "./TotalResult";

/**
 * 画面下部のコメント欄を描画する
 * @returns
 */
export function LowerContent() {
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [isAnsweredAllTarget, setAnswererAllTarget] = useState(false);
  const [isShowTotalResult, setShowTotalResult] = useState(false);

  useEffect(() => {
    if (correctCount === targetCount) {
      setAnswererAllTarget(true);
      console.log("all answered.");
    }
  }, [correctCount]);

  const comments = resource.getComments();
  const targetCount = resource.countTarget(comments);
  const commentAsList = comments.map((c) => {
    return (
      <CommentToWork
        comment={c}
        remainNumber={targetCount-correctCount}
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
        key={c.date.getTime()}
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
      <div className="comment-container flex-column">
        <h2>コメント</h2>
        <ul className="comments">{commentAsList}</ul>
      </div>
    </div>
  );
}
