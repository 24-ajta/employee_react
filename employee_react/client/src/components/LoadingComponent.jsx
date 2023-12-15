import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {css} from '@emotion/react'
const override = css `
  display: "block",
  margin: "0 auto",
  borderColor: "red",
`;

function LoadingComponent() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("red");

  return (
    // <div className="sweet-loading">
    //   {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
    //   {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

    //   <ClipLoader
    //     color={color}
    //     loading={loading}
    //     cssOverride={override}
    //     size={150}
    //     aria-label="Loading Spinner"
    //     data-testid="loader"
    //   />
    // </div>
    <div className="d-flex justify-content-center">
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
  );
}

export default LoadingComponent;