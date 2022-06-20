import React from "react";
import { useGlobalContext } from "./Context";
import "./stories.css";
const Stories = () => {
  const { hits, nbPages, isLoading, removePost } = useGlobalContext();
  if (isLoading) {
    return (
      <>
        <h2 className="text-center">Loading.....</h2>
      </>
    );
  }

  return (
    <>
      {hits.map((curPost) => {
        const { title, author, num_comments, url, objectID } = curPost;

        return (
          <div className="outerBox" key={objectID}>
            <div className="innerBox">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    by {author} | <span>{num_comments} comments</span>
                  </h6>

                  <a
                    href={url}
                    className="card-link btn btn-info"
                    target="_blank"
                  >
                    Read More...
                  </a>

                  <a
                    href="#"
                    className="card-link btn btn-danger"
                    onClick={() => removePost(objectID)}
                  >
                    Remove
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Stories;
