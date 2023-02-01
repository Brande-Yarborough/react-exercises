import { useState } from "react";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Blog Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBody">
        <Form.Label>Blog Body</Form.Label>
        <Form.Control type="text" placeholder="Enter body" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BlogForm;
