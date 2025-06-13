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
      <button onClick={onPrev} disabled={disablePrev}>
        Previous
      </button>
      <button onClick={onNext} disabled={disableNext}>
        Next
      </button>
    </div>
  );
};

export default FlashcardControls;
