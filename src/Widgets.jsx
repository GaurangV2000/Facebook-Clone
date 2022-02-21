import React from "react";
import "./Widgets.css";

const Widgets = () => {
  return (
    <>
      <div className="widgets">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&width=500&show_text=true&height=274&appId"
          width="500"
          height="274"
          style={{border:"none",overflow:"hidden"}}
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default Widgets;
