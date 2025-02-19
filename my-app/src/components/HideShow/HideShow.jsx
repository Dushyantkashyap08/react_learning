import React from "react";

const HideShow = ({ hide, toggleHide }) => {
  return (
    <div>
      <p hidden={hide}>Hi, this is a paragraph</p>

      {hide ? (
        <button onClick={toggleHide}>Show</button>
      ) : (
        <button onClick={toggleHide}>Hide</button>
      )}
    </div>
  );
};

export default HideShow;
