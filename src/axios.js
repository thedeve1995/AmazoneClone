import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://127.0.0.1:5001/e-clone-web-1e9f6/us-central1/api'
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
    // https://us-central1-e-clone-web-1e9f6.cloudfunctions.net/api
});

export default instance;