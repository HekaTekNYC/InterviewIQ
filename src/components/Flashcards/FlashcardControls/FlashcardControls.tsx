import './flashcard-controls.css';

interface FlashcardControlsProps {
  onPrev: () => void;
  onNext: () => void;
  disablePrev: boolean;
  disableNext: boolean;
}

const FlashcardControls: React.FC<FlashcardControlsProps> = ({
  onPrev,
  onNext,
  disablePrev,
  disableNext,
}) => {
  return (
    <div className="flashcard-controls">
      <button
        className="flashcard-controls__back"
        onClick={onPrev}
        disabled={disablePrev}
      >
        Previous
      </button>
      <button
        className="flashcard-controls__forward"
        onClick={onNext}
        disabled={disableNext}
      >
        Next
      </button>
    </div>
  );
};

export default FlashcardControls;
