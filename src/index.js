import Tooltip from "./modules/tooltip";
import Dropdown from "./modules/dropdown";
import Tabs from "./modules/tabs";

// create a tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));

tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

console.log("test");
