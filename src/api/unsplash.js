import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID AJt0r0BdAQg5YUr0e6Ct0d4zJUMbVvJfWRlyg2VyGHw",
  },
});
