import React, { useState } from 'react';
import Hint from '../../../assets/icons/hint.svg?react';
import Link from '../../../assets/icons/link.svg?react';
import Expand from '../../../assets/icons/expand.svg?react';
import Bulb from '../../../assets/icons/bulb.svg?react';
import './flashcard.css';

type FlashcardProps = {
  question: string;
  answer: string;
  hint?: string;
  explanation?: string;
  reference?: {
    label: string;
    url: string;
  }[];
};

const Flashcard: React.FC<FlashcardProps> = ({
  question,
  answer,
  hint,
  explanation,
  reference,
}) => {
  const references = reference ?? [];
  const [flipped, setFlipped] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<
    null | 'hint' | 'reference' | 'explanation'
  >(null);

  const renderOverlayContent = () => {
    if (!activeOverlay) return null;

    if (activeOverlay === 'hint') return <p>{hint}</p>;

    if (activeOverlay === 'explanation') return <p>{explanation}</p>;

    if (activeOverlay === 'reference') {
      return references.map((ref, idx) => (
        <div key={idx} className="flashcard__reference-item">
          <a
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flashcard__references-link"
          >
            {ref.label}
          </a>
        </div>
      ));
    }

    return null;
  };

  return (
    <div
      className={`flashcard ${flipped ? 'flashcard--flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped(!flipped);
        }
      }}
    >
      {/* Overlay */}
      {activeOverlay && (
        <div
          className="flashcard__overlay"
          onClick={(e) => {
            e.stopPropagation();
            setActiveOverlay(null);
          }}
          role="dialog"
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
        <p className="flashcard__question">{question}</p>
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
        <p className="flashcard__answer">{answer}</p>
        <div className="flashcard__bar">
          {explanation && (
            <span
              className="flashcard__icon icon-flip"
              onClick={(e) => {
                e.stopPropagation();
                setActiveOverlay('explanation');
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveOverlay('explanation');
                }
              }}
            >
              <Expand />
            </span>
          )}
          {references.length > 0 && (
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
