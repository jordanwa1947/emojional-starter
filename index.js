const emojis = document.querySelectorAll('button')
const emojiMessage = document.getElementById('emoji-message');
loopEmojis();
// happyEmoji.addEventListener('click', function () {
//   const responses = ["You go!", "Your smile just cheered me up!", "YAY!"];
//   let response = generateResponse(responses, 3);
//   emojiMessage.innerText = response;
// })
//
// sillyEmoji.addEventListener('click', function () {
//   const responses = ["Interesting response", "Sounds ... good?", "Me too."];
//   let response = generateResponse(responses, 3);
//   emojiMessage.innerText = response;
// })
//
// cryingEmoji.addEventListener('click', function () {
//   const responses = ["Do you want to talk?", "Keep your head up", "We can cry together!", "What can I do?"];
//   let response = generateResponse(responses, 4);
//   emojiMessage.innerText = response;
// })

function loopEmojis () {
  const responses = [["You go!", "Your smile just cheered me up!", "YAY!"],
  ["Do you want to talk?", "Keep your head up", "We can cry together!", "What can I do?"],
  ["Interesting response", "Sounds ... good?", "Me too."]]

  for (let i = 0; i < emojis.length; i++) {
    emojiOnClick(emojis[i], responses[i]);
  }
}

function emojiOnClick (emoji, responses) {
  emoji.addEventListener('click', function () {
    let response = generateResponse(responses, responses.length);
    emojiMessage.innerText = response;
  })
}

function generateResponse(responses, numberOfResponses) {
  let i = Math.floor(Math.random() * numberOfResponses);
  while (responses[i] === emojiMessage.innerText) {
    i = Math.floor(Math.random() * numberOfResponses);
  }
  return responses[i];
}
