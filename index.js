import { Footer, Main, Nav } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo(window.location.origin);
//*********************** */
// USE ROUTER.HOOKS
//********************* */

router.on("/", () => render(state.Home)).resolve();
router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();
function render(st) {
  document.querySelector("#root").innerHTML = `

  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
  // router.updatePageLinks();
}
//
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
// Adding NIH API call to get all medicine names
const getMeds = async () => {
  const MD = await fetch(
    "https://rxnav.nlm.nih.gov/REST/RxTerms/allconcepts.json"
  );
  const meds = await MD.json();
  console.log(meds);
  return meds;
};
// getMeds().then(data => console.log(data));
