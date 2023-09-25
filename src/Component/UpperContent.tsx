/**
 * 画面の上部(ゲームタイトル、ゲームウィンドウ、ゲームの説明)までを描画する
 * @returns
 */
function UpperContent() {
  return (
    <div className="upper-content">
      <div className="inner-content ">
        <div className="game-container">
          <div>
            <h1 className="title">ゲームタイトル</h1>
          </div>
          <div className="center">
            <div className="game-window">
              <p>ゲームウィンドウ</p>
            </div>
            <div className="game-notes">
              <text>ここに説明が入る</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { UpperContent };
