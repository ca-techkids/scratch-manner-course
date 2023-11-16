export type TotalResultType = {
  questionCount: number;
  correctCount: number;
  wrongCount: number;
  enabled: boolean;
};

export function TotalResult(props: TotalResultType) {
  if (!props.enabled) return null;
  return (
    <div className="overlay">
      <div className="modal-window text-center">
        <p>正解した数: {props.correctCount}</p>
        <p>間違えた数: {props.wrongCount}</p>
        <div className="access-password">
          <p>
            このパスワードを使って、教科書に{" "}
            <a
              href="https://learning.techkidsschool.jp/#/materials"
              target="_blank"
              rel="noreferrer noopener"
            >
              アクセス
            </a>{" "}
            しよう！
          </p>
          <p className="bold">「あ！ねこ」</p>
          <img src="img/access_polta.gif" alt="教科書へアクセスするgif画像" />
        </div>
      </div>
    </div>
  );
}
