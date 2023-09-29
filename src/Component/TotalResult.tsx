import { useState } from "react";

export type TotalResultType = {
  questionCount: number;
  correctCount: number;
  wrongCount: number;
  enabled: boolean;
};

export function TotalResult(props: TotalResultType) {
  const [isShow, setShow] = useState(true);
  if (props.enabled && isShow) {
    return (
      <div className="overlay">
        <div className="modal-window">
          <p>正解した数: {props.correctCount}</p>
          <p>間違えた数: {props.wrongCount}</p>
          <button onClick={() => setShow(false)} className="close-button">とじる</button>
        </div>
      </div>
    );
  }
  return null;
}
