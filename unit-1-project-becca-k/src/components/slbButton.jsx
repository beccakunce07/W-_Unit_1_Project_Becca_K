import selfLoveBombBank from "./slb_bank";

const slbButton = () => {
<><button id="slbButton">Click for a Self Love Bomb</button><p id="displayArea"></p></>

const button = document.getElementById('slbButton');
const display = document.getElementById('displayArea');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * selfLoveBombBank.length);
    display.textContent = selfLoveBombBank.message[randomIndex];
});
}
export default slbButton