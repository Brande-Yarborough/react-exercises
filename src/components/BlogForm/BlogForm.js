import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const INITIAL_POST = [{ title: "React", body: "React is fun" }];

function BlogForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useState(INITIAL_POST);

  const addblogPost = (newBlogPost) => {
    setPost([...post, newBlogPost]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const blogPost = {
      title,
      body,
    };

    addblogPost(blogPost);
    setTitle("");
    setBody("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Control
          onChange={handleTitleChange}
          value={title}
          type="text"
          placeholder="Enter title"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBody">
        <textarea
        id="body"
        name="body"
          onChange={handleBodyChange}
          value={body}
          type="text"
          placeholder="Enter body"
        ></textarea>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BlogForm;
