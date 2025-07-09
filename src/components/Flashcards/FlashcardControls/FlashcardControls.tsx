import './flashcard-controls.css';

interface FlashcardControlsProps {
  onPrev: () => void;
  onNext: () => void;
  index: number;
  maxIndex: number;
  disablePrev: boolean;
  disableNext: boolean;
}

const FlashcardControls: React.FC<FlashcardControlsProps> = ({
  index,
  maxIndex,
  onPrev,
  onNext,
  disablePrev,
  disableNext,
}) => {
  return (
    <div className="flashcard-controls">
      <div
        className={`flashcard-controls__control ${disablePrev ? 'disabled' : ''}`}
        onClick={() => {
          if (!disablePrev) onPrev();
        }}
        role="button"
        tabIndex={disablePrev ? -1 : 0}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disablePrev) {
            e.preventDefault();
            onPrev();
          }
        }}
      >
        <button
          className={`flashcard-controls__back ${disablePrev ? 'disabled' : ''}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="20 29 59.04 41.52"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M59.759375,29.624375 C58.955,28.791875 57.61625,28.791875 56.78375,29.624375 C55.979375,30.42875 55.979375,31.7675 56.78375,32.57 L71.871875,47.658125 L22.083125,47.658125 C20.9225,47.66 20,48.5825 20,49.743125 C20,50.90375 20.9225,51.85625 22.083125,51.85625 L71.871875,51.85625 L56.78375,66.91625 C55.979375,67.74875 55.979375,69.089375 56.78375,69.891875 C57.61625,70.724375 58.956875,70.724375 59.759375,69.891875 L78.419375,51.231875 C79.251875,50.4275 79.251875,49.08875 78.419375,48.28625 L59.759375,29.624375 Z"
                fill="#6366f1"
                fillRule="nonzero"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      <p className="flashcard-controls__tracker">
        {index + 1} / {maxIndex + 1}
      </p>
      <div
        className={`flashcard-controls__control ${disableNext ? 'disabled' : ''}`}
        onClick={() => {
          if (!disableNext) onNext();
        }}
        role="button"
        tabIndex={disableNext ? -1 : 0}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disableNext) {
            e.preventDefault();
            onPrev();
          }
        }}
      >
        <button
          className={`flashcard-controls__forward ${disableNext ? 'disabled' : ''}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="20 29 59.04 41.52"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M59.759375,29.624375 C58.955,28.791875 57.61625,28.791875 56.78375,29.624375 C55.979375,30.42875 55.979375,31.7675 56.78375,32.57 L71.871875,47.658125 L22.083125,47.658125 C20.9225,47.66 20,48.5825 20,49.743125 C20,50.90375 20.9225,51.85625 22.083125,51.85625 L71.871875,51.85625 L56.78375,66.91625 C55.979375,67.74875 55.979375,69.089375 56.78375,69.891875 C57.61625,70.724375 58.956875,70.724375 59.759375,69.891875 L78.419375,51.231875 C79.251875,50.4275 79.251875,49.08875 78.419375,48.28625 L59.759375,29.624375 Z"
                fill="#6366f1"
                fillRule="nonzero"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FlashcardControls;
