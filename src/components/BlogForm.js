import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BlogForm({ addblogPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const blogPost = {
      title,
      body,
    };

    addblogPost(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Blog Title</Form.Label>
        <Form.Control
          onChange={handleTitleChange}
          value={title}
          type="text"
          placeholder="Enter title"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBody">
        <Form.Label>Blog Body</Form.Label>
        <Form.Control
          onChange={handleBodyChange}
          value={body}
          type="text"
          placeholder="Enter body"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BlogForm;
