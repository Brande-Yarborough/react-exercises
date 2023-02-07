import { useState } from "react";
import BlogPreview from "./BlogPreview";

const INITIAL_BLOGS = [
  {
    id: 1,
    title: "The Pomodoro Technique",
    body: "Spiritual ipsum dolor amet fibonacci compassion pendulum, empath crystals manifestation transformation love lavender massage divination stones energy healing spiritual healing. Love Essential Oils love, goddess Sacred Geometry chanting healing. Lavender Chinese medicine chanting crystals practitioner candles. Sage tarot shamantic, harmonic peace Buddha bells Nepal joy manifestation compassion practitioner Essential Oils.",
  },
  {
    id: 2,
    title: "Apple CEO reduced his salary instead of laying off employees",
    body: "In an ideal world you better eat a reality sandwich before you walk back in that boardroom, nor touch base, nor usabiltiy, nor goalposts bake it in. Both the angel on my left shoulder and the devil on my right are eager to go to the next board meeting and say weâ€™re ditching the business model staff engagement, but we need to build it so that it scales, for we need to crystallize a plan if you're not hurting you're not winning. I have zero cycles for this we need to get all stakeholders up to speed and in the right place. Vertical integration. Let's not solutionize this right now parking lot it technologically savvy.",
  },
  {
    id: 3,
    title: "Beyonce announces 2023 Renaissance World Tour Dates",
    body: "Lorizzle ipsum dolizzle sit amizzle, shizzlin dizzle adipiscing elit. Nullizzle things velit, shut the shizzle up volutpat, suscipizzle quis, gravida vizzle, arcu. Pellentesque mofo i saw beyonces tizzles and my pizzle went crizzle. Sed erizzle. Fusce izzle fo shizzle my nizzle shiznit turpizzle tempizzle yo. Maurizzle pellentesque nibh izzle turpis. Bizzle izzle tortizzle. The bizzle eleifend my shizz nisi. In hac check out this platea dictumst. Bling bling dapibizzle. Curabitizzle tellizzle urna, fo shizzle daahng dawg, mattizzle ac, eleifend fo shizzle, nunc. Gangster suscipizzle. Integer sempizzle velizzle yippiyo shizzle my nizzle crocodizzle.",
  },
];

function BlogList() {
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);
  const [selectedBlog, setSelectedBlog] = useState();

  const blogTitlesHTML = blogs.map((blog) => (
  <button key={blog.id} className="btn btn-link" type="button" onClick={() => setSelectedBlog(blog)}>
  <h2>{blog.title}</h2>
  </button>
  ));

  return (
  <div className="row">
    <aside className="col-md-4">{blogTitlesHTML}</aside>
    {selectedBlog && <BlogPreview selectedBlog={selectedBlog}/>}
    
  </div>
  );
}

export default BlogList;
