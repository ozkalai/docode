import React from "react";

function Thumbnail({ item }) {
  return (
    <img src={`http://talent.docode.com.tr/thumbnail/${item.thumbnail}.jpg`} />
  );
}

export default Thumbnail;
