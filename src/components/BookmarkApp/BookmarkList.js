import {useState} from "react";

const INITIAL_DATA = [
    {
        url: 'https://developer.mozilla.org/en-US/', 
        title: 'MDN Developer Resources', 
        tag: 'HTML',
    }
];

function BookmarkList() {
    const [bookmarks, setBookmarks] = useState(INITIAL_DATA);
    const [filter, setFilter] = useState("all");

    // const getJustAnArrayOfTags = bookmarks.map((bookmark) => bookmark.tag);
    // const createSetUsingTagsArray = new Set(getJustAnArrayOfTags);
    // const useSetToCreateAnArrayOfUniqueValues = [...createSetUsingTagsArray]

    //doing all 3 of these steps in 1 below

    const tags = [...new Set(bookmarks.map((bookmark) => bookmark.tag.toLowerCase()))];

    const tagsHTML = tags.map((tag) => (
        <button key={tag} className="btn btn-link" type="button" onClick={() => setFilter(tag)}>
            {tag.toUpperCase}
        </button>
    ));
   
    //condition for filter
    const bookmarksHTML = bookmarks
    .filter((bookmark) => filter ? bookmark.tag.toLowerCase()=== filter : bookmark) //when not set to all this is what executes and filters bookmarks
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
    </div>
    );
}

export default BookmarkList;