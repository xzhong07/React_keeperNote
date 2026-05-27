import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <form onSubmit={submitNote}>
      <input
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Take a note..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default CreateArea;