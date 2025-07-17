import React, { KeyboardEvent, MouseEvent } from 'react';
import type { Flashcard as FlashcardType } from '@/types';
// import Hint from '../../../assets/icons/hint.svg?react';
import Link from '../../../assets/icons/link.svg?react';
import Expand from '../../../assets/icons/expand.svg?react';
import Bulb from '../../../assets/icons/bulb.svg?react';
import './flashcard.css';

type OverlayType = 'hint' | 'reference' | 'expanded' | null;
type FlashcardProps = FlashcardType & {
  isFlipped: boolean;
  setIsFlipped: (flipped: boolean) => void;
  activeOverlay: OverlayType;
  setActiveOverlay: (value: OverlayType) => void;
};

const Flashcard: React.FC<FlashcardProps> = ({
  question,
  answer,
  code,
  hint,
  expanded,
  reference = [],
  isFlipped,
  setIsFlipped,
  activeOverlay,
  setActiveOverlay,
}) => {
  const renderOverlayContent = () => {
    if (!activeOverlay) return null;
    if (activeOverlay === 'hint') return <p>{hint}</p>;
    if (activeOverlay === 'expanded') return <p>{expanded}</p>;
    if (activeOverlay === 'reference') {
      return (
        <ul className="flashcard__reference-list">
          {reference.map((ref, i) => (
            <li key={i} className="flashcard__reference-item">
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flashcard__reference-link"
              >
                {ref.label}
              </a>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  const handleFlip = (e: MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
    if (activeOverlay) return;
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flashcard ${isFlipped ? 'flashcard--flipped' : ''}`}
      onClick={handleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleFlip(e);
          console.log('isflipped?', isFlipped);
        }
      }}
    >
      {/* Overlay */}
      {activeOverlay && (
        <div
          className="flashcard__overlay"
          role="dialog"
          onClick={(e) => {
            e.stopPropagation();
            setActiveOverlay(null);
          }}
        >
          <div
            className="flashcard__overlay-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="flashcard__overlay-close"
              onClick={() => setActiveOverlay(null)}
            >
              ✕
            </button>
            {renderOverlayContent()}
          </div>
        </div>
      )}

      {/* Front */}
      <div className="flashcard__front">
        <div className="flashcard__question">
          <div className="flashcard__question-content">{question}</div>
        </div>
        {hint && (
          <div className="flashcard__bar">
            <span
              className="flashcard__icon bulb"
              onClick={(e) => {
                e.stopPropagation();
                setActiveOverlay('hint');
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveOverlay('hint');
                }
              }}
            >
              <Bulb />
            </span>
          </div>
        )}
      </div>

      {/* Back */}
      <div className="flashcard__back">
        <div className="flashcard__answer">
          <div className="flashcard__answer-content">{answer}</div>
          {code && (
            <pre>
              <code className="flashcard__code-content">{code}</code>
            </pre>
          )}
        </div>
        <div className="flashcard__bar">
          {expanded && (
            <span
              className="flashcard__icon icon-flip"
              onClick={(e) => {
                e.stopPropagation();
                setActiveOverlay('expanded');
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveOverlay('expanded');
                }
              }}
            >
              <Expand />
            </span>
          )}
          {reference.length > 0 && (
            <span
              className="flashcard__icon"
              onClick={(e) => {
                e.stopPropagation();
                setActiveOverlay('reference');
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveOverlay('reference');
                }
              }}
            >
              <Link />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Flashcard;
