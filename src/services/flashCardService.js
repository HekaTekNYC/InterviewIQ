import http from "../http-common";

const getAll = () => {
  return http.get("/flashcards");
};

const get = id => {
  return http.get(`/flashcards/${id}`);
};

const create = data => {
  return http.post("/flashcards", data);
};

const update = (id, data) => {
  return http.put(`/flashcards/${id}`, data);
};

const remove = id => {
  return http.delete(`/flashcards/${id}`);
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

export default FlashcardService;