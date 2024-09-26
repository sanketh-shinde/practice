import axios from "axios";
import { useEffect, useReducer } from "react";

const initialState = {
  isLoading: true,
  post: {},
  errorMessage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        isLoading: false,
        post: action.payload,
        error: "",
      };
    case "failed":
      return {
        isLoading: false,
        post: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

const FetchDataUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "success", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "failed", payload: "Something went wrong!" });
      });
  }, []);

  return (
    <>
      <h1>{state.isLoading ? "Loading" : state.post.title}</h1>
      <h1>{state.error ? state.error : null}</h1>
    </>
  );
};

export default FetchDataUseReducer;
