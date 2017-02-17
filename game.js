"use strict";

const results = {
  "✊": {
    "✊": "Nobody",
    "✋": "🤖",
    "✌": "😀",
  },
  "✋": {
    "✊": "😀",
    "✋": "Nobody",
    "✌": "🤖",
  },
  "✌": {
    "✊": "😀",
    "✋": "🤖",
    "✌": "Nobody",
  }
};

const choice = Object.keys(results);

function respond(e) {
  let random = Math.floor(Math.random() * choice.length);
  let computerChoice = choice[random];
  let humanChoice = e.target.textContent;
  let winner = results[humanChoice][computerChoice];
  window.choice.innerHTML = `
    <p>😀 chose ${humanChoice}</p>
    <p>🤖 chose ${computerChoice}</p>
    <p>${winner} won!</p>
  `;
}

function setup(say) {
  let d = document.createElement("button");
  d.textContent = say;
  d.onclick = respond;
  window.game.appendChild(d);
}

window.addEventListener(
  "load", () => choice.forEach(setup)
);
