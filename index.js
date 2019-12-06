const happyEmoji = document.getElementById('happy-emoji');
const sillyEmoji = document.getElementById('silly-emoji');
const cryingEmoji = document.getElementById('crying-emoji');

const emojiMessage = document.getElementById('emoji-message');

happyEmoji.addEventListener('click', function () {
  const responses = ["You go!", "Your smile just cheered me up!", "YAY!"];
  let randIndex = Math.floor(Math.random() * 3);
  emojiMessage.innerText = responses[randIndex];
})

sillyEmoji.addEventListener('click', function () {
  const responses = ["Interesting response", "Sounds ... good?", "Me too."];
  let randIndex = Math.floor(Math.random() * 3);
  emojiMessage.innerText = responses[randIndex];
})

cryingEmoji.addEventListener('click', function () {
  const responses = ["Do you want to talk?", "Keep your head up", "We can cry together!", "What can I do?"];
  let randIndex = Math.floor(Math.random() * 4);
  emojiMessage.innerText = responses[randIndex];
})
