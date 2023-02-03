import { useState } from "react";

function BlogPreview({selectedBlog}) {
  return (
    <div className="col-md-8">
      <h2>{selectedBlog.title}</h2>
      <p>{selectedBlog.body}</p>

    </div>
  );
}

export default BlogPreview;
