import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../index.css';

function UpdateFlashcard(props) {
  const [flashcard, setFlashcard] = useState({
    term: "",
    definition: "",
    category: [],
    expandedDef: "",
    hint1: "",
    hint2: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3500/api/flashcards/${id}`)
      .then((res) => {
        setFlashcard({
          term: res.data.term,
          definition: res.data.definition,
          category: res.data.category,
          expandedDef: res.data.expandedDef,
          hint1: res.data.hint1,
          hint2: res.data.hint2,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateFlashcard');
      });
  }, [id]);

  const onChange = (e) => {
    setFlashcard({ ...flashcard, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      term: flashcard.term,
      definition: flashcard.definition,
      category: flashcard.category,
      expandedDef: flashcard.expandedDef,
      hint1: flashcard.hint1,
      hint2: flashcard.hint2,
    };

    axios
      .put(`http://localhost:3500/api/flashcards/${id}`, data)
      .then((res) => {
        navigate(`/show-flashcard/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateFlashcard!');
      });
  };

  return (
    <div className='UpdateFlashcard'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Flashcard List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Flashcard</h1>
            <p className='lead text-center'>Update Flashcard</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='term'>Term</label>
              <input
                type='text'
                placeholder='Term'
                name='term'
                className='form-control'
                value={flashcard.term}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='definition'>Definition</label>
              <input
                type='text'
                placeholder='Definition'
                name='defintion'
                className='form-control'
                value={flashcard.definition}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='category'>Category</label>
              <input
                type='text'
                placeholder='Category'
                name='category'
                className='form-control'
                value={flashcard.category}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='expandedDef'>Expanded Definition</label>
              <input
                type='text'
                placeholder='Published Date'
                name='expandedDef'
                className='form-control'
                value={flashcard.expandedDef}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='hint1'>Hint 1:</label>
              <input
                type='text'
                placeholder='Hint One'
                name='hint1'
                className='form-control'
                value={flashcard.hint1}
                onChange={onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='hint2'>Hint 2:</label>
              <input
                type='text'
                placeholder='Hint Two'
                name='hint2'
                className='form-control'
                value={flashcard.hint2}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Flashcard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateFlashcard;