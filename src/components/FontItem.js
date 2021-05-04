import React from "react";

function FontItem(props) {
  return (
    <div className="font-item">
      <p>{props.item.fontName}</p>
      <p style={{ fontFamily: props.item.fontName }}>{props.text}</p>
    </div>
  );
}

export default FontItem;
