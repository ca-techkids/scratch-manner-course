import { useState } from "react";
import * as resource from "../resource";

function SplashContent() {
  const comments = resource.getComments();
  const targetCount = comments.filter((c) => c.isAgainstManners).length;

  const [isShow, setShow] = useState(true);
  if (isShow) {
    return (
      <div className="overlay">
        <div className="modal-window">
          <div className="splash-window flex-column center">
            <p>不適切なコメントを見つけて、報告しよう！</p>
            <img src="./img/report_tutorial.gif" ></img>
            <p>ヒント: 不適切なコメントは {targetCount} 個あるよ！</p>
            <button onClick={() => setShow(false)} className="close-button">
              とじる
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export { SplashContent };
