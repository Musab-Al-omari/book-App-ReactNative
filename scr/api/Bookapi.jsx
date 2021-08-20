import axios from 'axios';
// ('https://www.googleapis.com/books/v1/volumes?q=${search_field}+${searchBy[i]}');
export default axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});
