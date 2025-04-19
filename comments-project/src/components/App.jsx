import React, { useEffect, useState } from "react";
import Loding from "./Loding";
import Tostify from "./tostify";
import Comments from "./comments";
const App = () => {
  const [postId, setPostId] = useState(1);
  const [titel, setTitel] = useState();
  const [loading, setLoading] = useState(true);
  const [masseg, setMasseg] = useState("");
  function ChangeHandler(event) {
    setPostId(event.target.value);
    setLoading(true);
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((post) => {
        setTitel(post.title);
        setLoading(false);
        setMasseg(`post ${postId} is loaded`);
      });
  }, [postId]);

  return (
    <div className="conteyner">
      <input type="number" value={postId} onChange={ChangeHandler} />
      <div>{loading ? <Loding /> : <Comments titel={titel} />}</div>
      <Tostify type="success" masseg={masseg} />
    </div>
  );
};

export default App;
