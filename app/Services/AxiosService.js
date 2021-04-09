export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/lane/todos',
  timeout: 3000
})
