import { MdPlayArrow, MdPause } from "react-icons/md"; // Material Design
import React, { useState } from 'react';


function CYOForm() {
  const [input, setInput] = useState("");
  // Change to an array of objects to include a unique ID
  const [messageList, setMessageList] = useState([]);
  // Track which item is being edited
  const [editId, setEditId] = useState(null); 

  const handleSubmit = (m) => {
    m.preventDefault();
    if (!input.trim()) return; // Prevents empty submits from being added to the displayed list.

    if (editId) { //To be able to edit the love bomb.

      setMessageList(messageList.map(item => 
        item.id === editId ? { ...item, text: input } : item 
      ));
      setEditId(null);
    } else { //adding with the date id
      
      setMessageList([...messageList, { id: Date.now(), text: input }]);
    }
    setInput("");
  };

  // Allows for deletes
  const deleteItem = (id) => {
    setMessageList(messageList.filter(item => item.id !== id));
  };

  // Set Up Edit Mode
  const startEdit = (item) => {
    setEditId(item.id);
    setInput(item.text);
  };
  return (
    <div>   
      <form className ="CYOform" onSubmit = {handleSubmit}>
        <label for="message">Speak Kindly to Yourself Here Please:</label>
        <input value = {input} 
        onChange = {(m) => setInput(m.target.value)}
        placeholder = "i.e. 'I am loved and adored allways always.'"/>
        <label for="key">This relates to my:</label>
        <select id="category">
          <option value="Finances">finances</option>
          <option value="Body">body</option>
          <option value="Relationship">relationship</option>
          <option value="Purpose">purpose</option>
          <option value="Life In General">life in general</option>
          <option value="Something Else">something else</option>
        </select>
       <button type="submit">
          {editId ? "Update Bank" : "Add to Bank"}
        </button>
      </form>
  <ul>
   {messageList.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => startEdit(item)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
    ))}
  </ul>
</div>
  )
}
export default CYOForm;


  