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
  const targetCount = comments.filter((c) => c.isAgainstManners).length;
  const commentAsList = comments.map((c) => {
    return (
      <CommentToWork
        comment={c}
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
      <div className="inner-content center">
        <h3>コメント</h3>
        <ul className="comment-container">{commentAsList}</ul>
      </div>
    </div>
  );
}