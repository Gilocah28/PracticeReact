import React, { useEffect, useState } from "react";
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
} from "../../service/apiService";

const AxiosComponents = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postData = await fetchPosts();
      setPosts(postData);
    };
    getPosts();
  }, []);

  const handleUpdatePost = async (id) => {
    const updatedPostData = {
      title: "Updated Post",
      body: `This is Updated Post ${Date.now()}`,
      userId: 1,
    };

    const updatedPost = await updatePost(id, updatedPostData);
    setPosts(posts.map((p) => (p.id === id ? updatedPost : p)));
  };

  const handleDeletePost = async (id) => {
    await deletePost(id);
    setPosts(posts.filter((p) => p.id !== id));
  };

  const handleCreatePost = async () => {
    const newPost = {
      title: "New Post",
      body: `This is new Post. ${Date.now()}`,
      userId: 1,
    };

    const post = await createPost(newPost);
    setPosts([post,...posts]);
  };

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-header">Posts</h1>
        <button className="btn btn-success" onClick={handleCreatePost}>
          Create
        </button>

        {posts.map((post) => (
          <div className="post" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.body}</p>

            <button
              className="btn btn-primary"
              onClick={() => handleUpdatePost(post.id)}
            >
              Update
            </button>

            <button
              className="btn btn-danger"
              onClick={() => handleDeletePost(post.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AxiosComponents;
