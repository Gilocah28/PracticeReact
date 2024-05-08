import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../service/apiService";

const AxiosComponents = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
        const postData = await fetchPosts();
        setPosts(postData);
    }
    getPosts()
   
  }, []);

  console.log(posts)

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-header">Posts</h1>

        {posts.map((post) => (
          <div className="post" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AxiosComponents;
