import React, { useState } from 'react';
import Hint from '../../../assets/icons/hint.svg?react';
import Link from '../../../assets/icons/link.svg?react';
import Expand from '../../../assets/icons/expand.svg?react';
import './flashcard.css';

type FlashcardProps = {
  question: string;
  answer: string;
  hint?: string;
  explanation?: string;
  reference?: { label: string; url: string }[];
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
  const [expandedSection, setExpandedSection] = useState<
    null | 'hint' | 'reference' | 'explanation'
  >(null);

  // Helper to toggle expanded sections
  const toggleExpand = (
    e: React.MouseEvent | React.KeyboardEvent,
    section: 'hint' | 'reference' | 'explanation'
  ) => {
    e.stopPropagation();
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  // Keyboard handler factory
  const handleKeyDown = (
    e: React.KeyboardEvent,
    section: 'hint' | 'reference' | 'explanation'
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpand(e, section);
    }
  };

  return (
    <div
      className={`flashcard 
        ${flipped ? 'flashcard--flipped' : ''} 
        ${expandedSection ? `flashcard--expanded-${expandedSection}` : ''}`}
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
      {/* Front */}
      <div className="flashcard__front">
        <p className="flashcard__question">{question}</p>

        {/* Hint toggle */}
        {hint && (
          <>
            <div className="flashcard__front-bar">
              <span
                className="flashcard__icon"
                onClick={(e) => toggleExpand(e, 'hint')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, 'hint')}
              >
                <Hint />
              </span>
              <span
                className="flashcard__label"
                onClick={(e) => toggleExpand(e, 'hint')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, 'hint')}
              >
                Get hint
              </span>
            </div>

            <div
              className="flashcard__expansion flashcard__expansion--hint"
              onClick={(e) => toggleExpand(e, 'hint')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, 'hint')}
            >
              {expandedSection === 'hint' && hint}
            </div>
          </>
        )}
      </div>

      {/* Back */}
      <div className="flashcard__back">
        <p className="flashcard__answer">{answer}</p>

        {/* Back bar with Explanation and Reference toggles */}
        <div className="flashcard__back-bar">
          {/* Explanation toggle */}
          {explanation && (
            <div
              className="flashcard__bar-item"
              onClick={(e) => toggleExpand(e, 'explanation')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, 'explanation')}
            >
              <span className="flashcard__icon icon-flip">
                <Expand />
              </span>
            </div>
          )}

          {/* Reference toggle */}
          {reference.length > 0 && (
            <div
              className="flashcard__bar-item"
              onClick={(e) => toggleExpand(e, 'reference')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, 'reference')}
            >
              <span className="flashcard__icon">
                <Link />
              </span>
            </div>
          )}
        </div>

        {/* Explanation expansion */}
        {explanation && (
          <div
            className={`flashcard__expansion flashcard__expansion--explanation`}
            onClick={(e) => toggleExpand(e, 'explanation')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, 'explanation')}
          >
            {expandedSection === 'explanation' && explanation}
          </div>
        )}

        {/* Reference expansion */}
        {reference.length > 0 && (
          <div
            className={`flashcard__expansion flashcard__expansion--reference`}
            onClick={(e) => toggleExpand(e, 'reference')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, 'reference')}
          >
            {expandedSection === 'reference' &&
              reference.map((ref, idx) => (
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
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Flashcard;
