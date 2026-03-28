//form
const form = document.createElement("createYourOwnForm");
form.method = "POST";
form.action = "/submit-data";

const slbInput = document.createElement("input");
slbInput.type = "text";
slbInput.slb = "selfLoveBomb";
slbInput.placeholder = "Enter Your Own Self Love Bomb";

const submitBtn = document.createElement("input");
submitBtn.type = "submit";
submitBtn.value = "Submit";

form.appendChild(slbInput);
form.appendChild(submitBtn);
document.body.appendChild(form); // Must append to body for submission to work
