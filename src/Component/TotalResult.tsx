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
          <p>このパスワードを使って、教科書にアクセスしよう！</p>
          <p className="bold">Password</p>
          <a href="" target="_blank">アクセス！</a>
          </div>
      </div>
    </div>
  );
}
