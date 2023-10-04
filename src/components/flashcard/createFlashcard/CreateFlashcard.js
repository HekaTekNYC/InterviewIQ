import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './createFlashcard.styles.css'

import { useNavigate } from 'react-router-dom';

const CreateFlashcard = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [flashcard, setFlashcard] = useState({
    id: null,
    term: "",
    definition: "",
    category: [],
    expandedDef: "",
    hint1: "",
    hint2: "",
  });

  const onChange = (e) => {
    setFlashcard({ ...flashcard, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3500/api/flashcards', flashcard)
      .then((res) => {
        setFlashcard({
          id:'',
          term: "",
          definition: "",
          category: "",
          expandedDef: "",
          hint1: "",
          hint2: "",
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateFlashcard!');
      });
  };

  return (
    <div className='CreateFlashcard'>
      {/* <div className='container mx-auto px-4'> */}
      <div className=''>
        {/* <div className='row'> */}
        <div className=''>
          {/* <div className='col-md-8 m-auto'> */}
          <div className=''>
            <br />
            {/* <Link to='/' className='btn btn-outline-warning float-left'> */}
            <Link to='/' className=''>
              Show Flashcard List
            </Link>
          </div>
          {/* <div className='col-md-8 m-auto'> */}
          <div className=''>
            {/* <h1 className='display-4 text-center'>Add Flashcard</h1> */}
            <h1 className=''>Add Flashcard</h1>
            <p className=''>Create new flashcard</p>

            <form noValidate onSubmit={onSubmit}>
              {/* <div className='form-group'> */}
              <div className=''>
                <input
                  type='text'
                  placeholder='Flashcard Term'
                  name='term'
                  // className='form-control'
                  className=''
                  value={flashcard.term}
                  onChange={onChange}
                />
              </div>
              <br />

              {/* <div className='form-group'> */}
              <div className=''>
                <input
                  type='text'
                  placeholder='Definition'
                  name='definition'
                  // className='form-control'
                  className=''
                  value={flashcard.definition}
                  onChange={onChange}
                />
              </div>

              {/* <div className='form-group'> */}
              <div className=''>
                <input
                  type='text'
                  placeholder='Category'
                  name='category'
                  // className='form-control'
                  className=''
                  value={flashcard.category}
                  onChange={onChange}
                />
              </div>

              {/* <div className='form-group'> */}
              <div className=''>
                <input
                  type='text'
                  placeholder='Expanded Definition'
                  name='expandedDef'
                  // className='form-control'
                  className=''
                  value={flashcard.expandedDef}
                  onChange={onChange}
                />
              </div>

              {/* <div className='form-group'> */}
              <div className=''>
                <input
                  type='text'
                  placeholder='Hint 1'
                  name='hint1'
                  // className='form-control'
                  className=''
                  value={flashcard.hint1}
                  onChange={onChange}
                />
              </div>
              {/* <div className='form-group'> */}
              <div className=''>
                <input
                  type='text'
                  placeholder='Hint 2'
                  name='hint2'
                  // className='form-control'
                  className=''
                  value={flashcard.hint2}
                  onChange={onChange}
                />
              </div>

              {/* <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              /> */}
              <input
                type='submit'
                className=''
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFlashcard;