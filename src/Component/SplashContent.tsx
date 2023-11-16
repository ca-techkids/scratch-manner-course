import { useState } from "react";
import * as resource from "../resource";

function SplashContent() {
  const comments = resource.getComments();
  const targetCount = resource.countTarget(comments);

  const [isShow, setShow] = useState(true);
  if (isShow) {
    return (
      <div className="overlay">
        <div className="modal-window">
          <div className="splash-window flex-column center">
            <p>良くないコメントを見つけて、報告しよう！</p>
            <p>お手つきは3回まで！</p>
            <img
              src="./img/report_tutorial.gif"
              alt="リテラシー講座の進め方"
            ></img>
            <p>ヒント: 良くないコメントは {targetCount} 個あるよ！</p>
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
