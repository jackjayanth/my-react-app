import React, { useState } from "react";

function GetData({ onSubmit, data }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      userId: 1,
      id: data.length + 1,
      title: title,
      body: body,
    };
    onSubmit(dataToSend);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Body:
          {/* <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          /> */}
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default GetData;
