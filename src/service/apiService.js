import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// get post requests
export const fetchPosts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}?_limit=10`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Update Post
export const updatePost = async (id, updatedPost) => {
  try {
    const { data } = await axios.put(`${API_URL}/${id}`, updatedPost);
    return data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw new Error("Failed to update post");
  }
};

// Delete Post
export const deletePost = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
};

// Adding Post
export const createPost = async (newPost) => {
  try {
    const { data } = await axios.post(API_URL, newPost);
    return data;
  } catch (error) {
    console.log(error);
  }
};
