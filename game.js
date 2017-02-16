"use strict";

const choices = ["✊", "✋", "✌"];
const results = { "✊✋": "🤖", "✋✊": "🕺", "✊✌": "🕺", "✌✊": "🤖", "✌✋": "🕺", "✋✌": "🤖", "✋✋": "Nobody", "✊✊": "Nobody", "✌✌": "Nobody" };

function respond(e) {
  let random = Math.floor(Math.random() * 3);
  let computer = choices[random];
  let lookup = e.target.textContent + computer;
  let winner = results[lookup];
  window.choice.innerHTML = `
    <p>🕺 chose ${e.target.textContent}</p>
    <p>🤖 chose ${computer}</p>
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
  "load", () => choices.forEach(setup)
);
