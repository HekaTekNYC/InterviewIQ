import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './createFlashcard.styles.css'
import '../../../index.css'
import { Button } from 'flowbite-react';


// import Card from '../../shared/components/UIElements/Card';
// import PlaceItem from './PlaceItem';
// import FlashcardItem from '../components/FlahscardItem'
// import './PlaceList.css';


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
    <div className='CreateFlashcard flex items-center'>
      <div className=''>
        <div className=''>
          <div className=''>
            <br />
            <Link to='/' className='text-'>
              Show Flashcard List
            </Link>
          </div>

          <div>
      <Button className='color-purple'>Click me</Button>
    </div>
          <div className=''>
            <h1 className=''>Add Flashcard</h1>
            <p className=''>Create new flashcard</p>

            <form noValidate onSubmit={onSubmit}>
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

              <div className=''>
                <input
                  type='text'
                  placeholder='Definition'
                  name='definition'
                  className=''
                  value={flashcard.definition}
                  onChange={onChange}
                />
              </div>

              <div className=''>
                <input
                  type='text'
                  placeholder='Category'
                  name='category'
                  className=''
                  value={flashcard.category}
                  onChange={onChange}
                />
              </div>

              <div className=''>
                <input
                  type='text'
                  placeholder='Expanded Definition'
                  name='expandedDef'
                  className=''
                  value={flashcard.expandedDef}
                  onChange={onChange}
                />
              </div>

              <div className=''>
                <input
                  type='text'
                  placeholder='Hint 1'
                  name='hint1'
                  className=''
                  value={flashcard.hint1}
                  onChange={onChange}
                />
              </div>
              <div className=''>
                <input
                  type='text'
                  placeholder='Hint 2'
                  name='hint2'
                  className=''
                  value={flashcard.hint2}
                  onChange={onChange}
                />
              </div>
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