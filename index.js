import { Footer, Main, Nav } from "./components";
import * as state from "./store";

function render(state) {
  document.querySelector("#root").innerHTML = `

  ${Nav(state.Links)}
  ${Main(state.Home)}
  ${Footer()}
  `;
}
render(state);

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
