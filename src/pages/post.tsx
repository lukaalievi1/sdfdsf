import React, { useState } from "react";

interface Post {
  title: string;
  description: string;
  createdAt: string;
}

const Post: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [array, setArray] = useState<Post[]>([]);

  const handleAddPost = () => {
    const newPost: Post = {
      title: title,
      description: description,
      createdAt: new Date().toUTCString(),
    };

    setArray([...array, newPost]);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="App">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddPost}>Add Post</button>

      <div>
        {array.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>{post.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;