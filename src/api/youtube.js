import axios from "axios";

const KEY = "AIzaSyDJsPlai4AVZ9VPlf7aFzjSNlPQQ8QtqcM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
