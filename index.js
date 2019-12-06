const happyEmoji = document.getElementById('happy-emoji');
const sillyEmoji = document.getElementById('silly-emoji');
const cryingEmoji = document.getElementById('crying-emoji');

const emojiMessage = document.getElementById('emoji-message');

happyEmoji.addEventListener('click', function () {
  const responses = ["You go!", "Your smile just cheered me up!", "YAY!"];
  let response = generateResponse(responses, 3);
  emojiMessage.innerText = response;
})

sillyEmoji.addEventListener('click', function () {
  const responses = ["Interesting response", "Sounds ... good?", "Me too."];
  let response = generateResponse(responses, 3);
  emojiMessage.innerText = response;
})

cryingEmoji.addEventListener('click', function () {
  const responses = ["Do you want to talk?", "Keep your head up", "We can cry together!", "What can I do?"];
  let response = generateResponse(responses, 4);
  emojiMessage.innerText = response;
})

function generateResponse(responses, numberOfResponses) {
  let i = Math.floor(Math.random() * numberOfResponses);
  while (responses[i] === emojiMessage.innerText) {
    i = Math.floor(Math.random() * numberOfResponses);
  }
  return responses[i];
}
