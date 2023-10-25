import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElements/Button';
import './PlaceList.css';

const FlashcardList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No flashcard found. Would you like to create one?</h2>
          <Button to="/flashcards/new">Share Flashcard</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(flashcard => (
        <FlashcardItem
          key={flashcard.id}
          id={flashcard.id}
          image={flashcard.imageUrl}
          term={flashcard.term}
          description={flashcard.definition}
          hint1={flashcard.hint1}
          hint2={flashcard.hint2}
          creatorId={flashcard.creator}
        />
      ))}
    </ul>
  );
};

export default FlashcardList;