/**
 * 画面の上部(ゲームタイトル、ゲームウィンドウ、ゲームの説明)までを描画する
 * @returns
 */
function UpperContent() {
  return (
    <div className="upper-content">
      <div className="inner-content center">
        <div className="game-container">
          <div>
            <h1 className="title">ネットリテラシー講座</h1>
          </div>
          <div className="center">
            <div className="game-window">
              <img src="./img/game_window.png" />
            </div>
            <div className="game-note-container">
              <div className="game-note">
                <div>
                  <h3>使い方</h3>
                </div>
                <div className="description-block">
                  <p>
                    下のコメント一覧から、不適切なコメントを探して報告しよう！
                  </p>
                </div>
              </div>
              <div className="game-note">
                <div>
                  <h3>メモとクレジット</h3>
                </div>
                <div className="description-block">
                  <p>Thanks for React.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { UpperContent };
