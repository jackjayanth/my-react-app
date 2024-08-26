import { useState, useEffect } from "react";
function DeleteButton({ buttonName, id, sendingId }) {
  function sendingIdFunc(id) {
    sendingId(id);
  }
  return (
    <>
      <button className="btn btn-danger" onClick={() => sendingIdFunc(id)}>
        {buttonName}
      </button>
    </>
  );
}

export default DeleteButton;
