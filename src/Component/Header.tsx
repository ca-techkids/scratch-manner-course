/**
 * 画面上部のヘッダーを描画する
 * @returns
 */
export function Header() {
  return (
    <header>
      <div className="header-container flex-row">
        <div className="header-button">
          <p>作る</p>
        </div>
        <div className="header-button">
          <p>見る</p>
        </div>
        <div className="header-button">
          <p>アイデア</p>
        </div>
        <div className="header-button">
          <p>Scratchについて</p>
        </div>
        <div className="search-box">
          <p className="search-text">検索</p>
        </div>
        <div className="header-button">
          <p>Scratchに参加しよう</p>
        </div>
        <div className="header-button">
          <p>サインイン</p>
        </div>
      </div>
    </header>
  );
}
