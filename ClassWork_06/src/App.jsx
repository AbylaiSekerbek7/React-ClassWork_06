import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "./actions/post.action";
import "./App.css";
import { decrement, increment, multipleTwo, divideTwo, reset, } from "./store/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.post);
  
  const { count } = useSelector((state) => state.counter);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(multipleTwo())}>* 2</button>
      <button disabled={count == 0} onClick={() => dispatch(divideTwo())}>/ 2</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <div>
        {posts.map((post) => (
          <h3 key={post.id}>{post.title}</h3>
        ))}
        {console.log("Status: ", {status})}
      </div>
    </div>
  );
}

export default App;
