import React, { useState } from 'react';
import { Flashcard as FlashcardType } from '@/data/flashcards';
import Hint from '../../../assets/icons/hint.svg?react';
import './flashcard.css';

type FlashcardProps = Omit<FlashcardType, 'id' | 'categoryId'>;

const Flashcard: React.FC<FlashcardProps> = ({
  question,
  answer,
  hint,
  explanation,
  reference = [],
}) => {
  const [flipped, setFlipped] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);

  return (
    <div
      className={`flashcard ${flipped ? 'flashcard--flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flashcard__front">
        <p className="flashcard__question">{question}</p>
        <div className="flashcard__front-bar">
          <div
            className="flashcard__hint-icon"
            onClick={(e) => {
              e.stopPropagation();
              setHintOpen(!hintOpen);
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                setHintOpen(!hintOpen);
              }
            }}
          >
            <Hint />
          </div>

          {hint && (
            <p
              className="flashcard__hint"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <span
                className="flashcard__hint-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  setHintOpen(!hintOpen);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    setHintOpen(!hintOpen);
                  }
                }}
              >
                Hint
              </span>
              {hintOpen && (
                <span
                  className="flashcard__hint-text"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  : {hint}
                </span>
              )}
            </p>
          )}
        </div>
      </div>
      <div className="flashcard__back">
        <p className="flashcard__answer">{answer}</p>

        {explanation && <p className="flashcard__explanation">{explanation}</p>}
        {reference.length > 0 && (
          <div className="flashcard__references">
            <strong className="flashcard__references-label">References:</strong>
            <ul className="flashcard__references-list">
              {reference.map((ref, idx) => (
                <li key={idx} className="flashcard__references-item">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flashcard__references-link"
                  >
                    {ref.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flashcard;
