import React, { useEffect, useReducer } from "react";
import Loding from "./Loding";
import Tostify from "./tostify";
import Comments from "./comments";

const initState = {
  postId: 1,
  title: "",
  loading: true,
  masseg: "",
};

const actionTypes = {
  GET_REQUEST: "GET_REQUEST",
  GET_CHANGE: "GET_CHANGE",
};

function reduser(state, action) {
  switch (action.type) {
    case actionTypes.GET_CHANGE:
      return {
        ...state,
        postId: action.postId,
        loading: action.loading,
      };
    case actionTypes.GET_REQUEST:
      return {
        ...state,
        title: action.title,
        loading: action.loading,
        masseg: `post ${action.postId} is loaded`,
      };
    default:
      break;
  }
}

const App = () => {
  const [{ postId, title, loading, masseg }, dispatch] = useReducer(
    reduser,
    initState
  );

  function ChangeHandler(event) {
    dispatch({
      type: actionTypes.GET_CHANGE,
      postId: event.target.value,
      loading: true,
    });
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((post) => {
        dispatch({
          type: actionTypes.GET_REQUEST,
          title: post.title,
          loading: false,
          postId: postId,
        });
      });
  }, [postId]);

  return (
    <div className="conteyner">
      <input type="number" value={postId} onChange={ChangeHandler} />
      <div>{loading ? <Loding /> : <Comments title={title} />}</div>
      <Tostify type="success" masseg={masseg} />
    </div>
  );
};

export default App;
