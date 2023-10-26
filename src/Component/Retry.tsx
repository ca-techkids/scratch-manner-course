type RetryType = {
  enabled: boolean;
};

export function Retry(props: RetryType) {
  if (!props.enabled) return null;
  return (
    <div className="overlay">
      <div className="modal-window text-center">
        <p className="bold xlarge">ゲームオーバー...</p>
        <p className="result-hint">3回おてつきをしてしまいました...</p>
        <button
          className="close-button"
          onClick={() => window.location.reload()}
        >
          やり直す
        </button>
      </div>
    </div>
  );
}
