const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let key = ``;
function generateKey(length, characters) {
    for (var i = 0; i < length; i++) {
        key += characters[Math.floor(Math.random() * characters.length)];
      }
      return key;
}
generateKey(16, characters);
document.getElementById(`key`).innerHTML = key; 