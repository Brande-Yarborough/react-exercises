import {useState} from "react";
import BlogForm from "./components/BlogForm/BlogForm";
import ContactForm from "./components/ContactList/ContactForm";
import BlogList from "./components/BlogReadingApp/BlogList";
import BookmarkList from "./components/BookmarkApp/BookmarkList"
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [selection, setSelection] = useState("a");

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };
  
  return (
    <div className="container mt-5"> 
    <header>
      <button className="btn btn-link" type="button" onClick={()=> setSelection("a")}>
        Blog Form</button>
      <button className="btn btn-link" type="button" onClick={() => setSelection("b")}
      >Contact Form</button>
      <button className="btn btn-link" type="button" onClick={() => setSelection("c")}>Blog Reading App</button>
      <button className="btn btn-link" type="button" onClick={() => setSelection("d")}>Bookmark App</button>
      <button className="btn btn-link" type="button" onClick={() => setSelection("e")}>Blog CMS</button>
    </header>
    
    {selection === "a" && <BlogForm/>}
    {selection === "b" && <ContactForm/>}
    {selection === "c" && <BlogList/>}
    {selection === "d" && <BookmarkList/>}
    </div>
  );

}

export default App;
