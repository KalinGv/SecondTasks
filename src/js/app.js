//imports from other files
import '../css/main.scss';
import '../css/input-elements.scss';
import {secretButton, secretParagraph, img12} from './dom-loader';

//making the secret message to apper by clicking the button
var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton();
    updateImg();
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = 'Hide the Secret';
    } else {
        secretButton.textContent = 'Show the Secret';
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}

function updateImg() {
 if (showSecret) {
    img12.src='../src/img/img2.jpg';
 } else {
    img12.src='../src/img/img1.jpg';
 }
};