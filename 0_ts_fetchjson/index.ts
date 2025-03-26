import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  // console.log(response.data);
  const { ID, Title, finished } = response.data;
  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${Title}
    Is it finished? ${finished}`);
});
