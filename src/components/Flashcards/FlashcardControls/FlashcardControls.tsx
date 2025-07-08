import Arrow from '../../../assets/icons/arrow.svg?react';
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
      <div className="flashcard-controls__control">
        <button
          className="flashcard-controls__back"
          onClick={onPrev}
          disabled={disablePrev}
        >
          <Arrow />
        </button>
      </div>
      <div className="flashcard-controls__control">
        <button
          className="flashcard-controls__forward"
          onClick={onNext}
          disabled={disableNext}
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
};

export default FlashcardControls;
