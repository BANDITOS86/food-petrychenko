window.addEventListener("DOMContentLoaded", () => {
  const tabs = require("./modules/tabs");
  const modal = require("./modules/modal");
  const slider = require("./modules/slider");
  const calc = require("./modules/calc");
  const cards = require("./modules/cards");
  const forms = require("./modules/forms");
  const timer = require("./modules/timer");

  tabs();
  modal();
  slider();
  calc();
  cards();
  forms();
  timer();
});
