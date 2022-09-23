import React, { useState } from "react";
import "./css/story.style.css";
// const [storyImg, setStoryImg] = useState(img);

const Story = () => {
  return (
    <div className="storyOuterBody">
      <div className="storyInnerBody">
        <div className="storyText">
          <h4>DISCOVER</h4>
          <h1>UPCOMING EVENTS</h1>
          <p>
            Velit enim consequat do pariatur mollit ad magna ipsum elit
            consectetur anim est. Sit fugiat aliquip laborum nostrud consectetur
            ullamco Lorem velit tempor reprehenderit. Veniam nulla laboris
            officia amet.
          </p>
          <div className="storyChangesBtn">
            {/* <span className="dot" onClick={hello}></span> */}
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="storyImg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtE1pq9ES09xzopms6OB8xJ7Mmv3fGsoAPXw&usqp=CAU" />
        </div>
      </div>
    </div>
  );
};

export default Story;
