import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createFlashcard } from '../../actions/action'

const AddFlashcard = () => {
  const initialFlashcardState = {
    id: null,
    term: "",
    definition: "",
    category: "",
    completed: "",
    tag: "",
    star: "",
    expandedDef: "",
    hint1: "",
    hint2: "",
    notes: "",
    published: false
  };
  const [flashcard, setFlashcard] = useState(initialFlashcardState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFlashcard({ ...flashcard, [name]: value });
  };

  const saveFlashcard = () => {
    const { term, definition } = flashcard;
    // do we need to capitilize flashcard?

    dispatch(createFlashcard(term, definition))
      .then(data => {
        setFlashcard({
          id: data.id,
          term: data.term,
          definition: data.definition,
          category: data.category,
          completed: data.completed,
          tag: data.tag,
          star: data.star,
          expandedDef: data.expandedDef,
          hint1: data.hint1,
          hint2: data.hint2,
          notes: data.notes,
          published: data.published
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newFlashcard = () => {
    setFlashcard(initialFlashcardState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
    {submitted ? (
      <div>
        <h4>You submitted successfully!</h4>
        <button className="btn btn-success" onClick={newFlashcard}>
          Add
        </button>
      </div>
    ) : (
      <div>
        <div className="form-group">
          <label htmlFor="term">Term</label>
          <input
            type="text"
            className="form-control"
            id="term"
            required
            value={flashcard.term}
            onChange={handleInputChange}
            name="term"
          />
        </div>

        <div className="form-group">
          <label htmlFor="definition">Definition</label>
          <input
            type="text"
            className="form-control"
            id="definition"
            required
            value={flashcard.definition}
            onChange={handleInputChange}
            name="definition"
          />
        </div>
        <div className="form-group">
          <label htmlFor="expandedDef">Expanded Definition</label>
          <input
            type="text"
            className="form-control"
            id="expandedDef"
            required
            value={flashcard.expandedDef}
            onChange={handleInputChange}
            name="expandedDef"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            required
            value={flashcard.category}
            onChange={handleInputChange}
            name="category"
          />
        </div>
        <div className="form-group">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            required
            value={flashcard.tag}
            onChange={handleInputChange}
            name="tag"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Hint1">Hint 1</label>
          <input
            type="text"
            className="form-control"
            id="hint1"
            value={flashcard.hint1}
            onChange={handleInputChange}
            name="hint1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Hint2">Hint 2</label>
          <input
            type="text"
            className="form-control"
            id="Hint2"
            
            value={flashcard.hint2}
            onChange={handleInputChange}
            name="Hint2"
          />
        </div>
        

        <button onClick={saveFlashcard} className="btn btn-success">
          Submit
        </button>
      </div>
    )}
  </div>

  );
};

export default AddFlashcard;