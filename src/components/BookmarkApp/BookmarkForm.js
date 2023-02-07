import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BookmarkList from "./BookmarkList";
import { nanoid } from "nanoid";

function BookmarkForm({ bookmarks, setBookmarks }) {
  const [url, setURL] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  const addBookmark = (newBookmark) => {
    setBookmarks([...bookmarks, newBookmark]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBookmark = {
      id: nanoid(),
      url,
      title,
      tag,
    };

    addBookmark(newBookmark);
    setURL("");
    setTitle("");
    setTag("");
  };

  const handleNewURL = (event) => {
    setURL(event.target.value);
  };

  const handleNewTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleNewTag = (event) => {
    setTag(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="url">
        {/* <Form.Label>URL</Form.Label> */}
        <Form.Control
          type="url"
          placeholder="URL"
          value={url}
          onChange={handleNewURL}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="title">
        {/* <Form.Label>Title</Form.Label> */}
        <Form.Control
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleNewTitle}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="tag">
        {/* <Form.Label>Tag</Form.Label> */}
        <Form.Control
          type="text"
          placeholder="Tag"
          value={tag}
          onChange={handleNewTag}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BookmarkForm;
