// import http from "../http-common";

//this all corresponds with the http-common file. So if our endpoints in there are correct it correlates with this
const http = require('../http-common')

const getAll = () => {
  return http.get("/flashcard");
};

const get = id => {
  return http.get(`/flashcards/${id}`);
};

const create = data => {
  return http.post("/dash/AddFlashcard", data);
};

const update = (id, data) => {
  return http.put(`/flashcards/${id}`, data);
};

const remove = id => {
  return http.delete(`/flashcard/${id}`);
};

const removeAll = () => {
  return http.delete(`/flashcards`);
};

const findByTitle = title => {
  return http.get(`/flashcards?title=${title}`);
};

const FlashcardService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
console.log(`this is my flashcard service:`, FlashcardService)

module.exports = FlashcardService;