import axios from "axios";

const postApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
});

export const fetchAllPosts = async () => {
  const res = await postApi.get(`/api/posts`);
  return res.data;
};

export const createPost = async (data: any) => {
  const res = await postApi.post(`/api/posts`, data);
  return res.data;
};
