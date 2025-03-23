import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  
  return (
    <div>
      <h2>Task Details (ID: {id})</h2>
      <p>More details about this task...</p>
    </div>
  );
}

export default Detail;
