import { nanoid } from "nanoid";
import {useState} from "react";
import BookmarkForm from "./BookmarkForm";

const INITIAL_DATA = [
    {
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",
        title: "The Input (Form Input) element",
        tag: "HTML",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
        title: "Array.prototype.push()",
        tag: "JS",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString",
        title: "Array.prototype.toString()",
        tag: "JS",
      },
];

function BookmarkList() {
    const [bookmarks, setBookmarks] = useState(INITIAL_DATA);
    const [filter, setFilter] = useState(null);

    // const arrayOfTags = bookmarks.map((bookmark) => bookmark.tag);
    // const setOfUniqueTags = new Set(getJustAnArrayOfTags);
    // const arrayOfUniqueTags = [...createSetUsingTagsArray]

    //doing all 3 of these steps in 1 below

    const tags = [...new Set(bookmarks.map((bookmark) => bookmark.tag.toLowerCase()))];

    const tagsHTML = tags.map((tag) => (
        <button key={tag} className="btn btn-link" type="button" onClick={() => setFilter(tag)}>
            {tag.toUpperCase()}
        </button>
    ));
   
    //condition for filter
    const bookmarksHTML = bookmarks
    .filter((bookmark) => filter ? bookmark.tag.toLowerCase() === filter : bookmark) //when not set to all this is what executes and filters bookmarks
    .map((bookmark) => (
        <div>
            <a href={bookmark.url}>
            <span>{bookmark.title}</span>
            </a>
        </div>
    ));

    return (
    <div>
        <header>
            <button className="btn btn-link" type="button" onClick={() => setFilter(null)}>All</button>
            {tagsHTML}
        </header>
        {bookmarksHTML}
        <div>

        <BookmarkForm bookmarks={bookmarks} setBookmarks={setBookmarks}/>
        </div>
    </div>
    );
}

export default BookmarkList;