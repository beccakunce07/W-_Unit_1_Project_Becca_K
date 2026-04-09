function CYOForm () {
  return (
<div>   
<form class="form">
  <label for="message">Create Your Own Self Love Bomb:</label>
  <input type="text" id="message" placeholder="Self love bomb here" minlength="2" pattern="[A-Za-z]" rows="63" cols="36" required></input>
  <label for="key">This relates to my:</label>
  <select id="category">
    <option value="Finances">Finances</option>
    <option value="Body">Body</option>
    <option value="Relationship">Relationship</option>
    <option value="Purpose">Relationship</option>
    <option value="Other">Other</option>
  </select>
  <button type="button" onclick="handleSubmit()">Add to Bank</button>
  
</form>
</div>
 

  )
}

export default CYOForm;
