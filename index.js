import { Footer, Main, Nav } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";
import { Interactions } from "./components/views";
let medList = [];
// let searchDone = false;
dotenv.config();

const router = new Navigo(window.location.origin);
//*********************** */
// USE ROUTER.HOOKS
//********************* */

router.hooks({
  before: (done, params) => {
    const page =
      // eslint-disable-next-line no-prototype-builtins
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";
    if (page === "Home") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
        )
        .then(response => {
          state.Home.weather = {};
          state.Home.weather.city = response.data.name;
          state.Home.weather.temp = response.data.main.temp;
          state.Home.weather.feelsLike = response.data.main.feels_like;
          state.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch(err => console.log(err));
    }

    // .then(response => {
    //   const { minConceptGroup } = response.data;
    //   const { minConcept } = minConceptGroup;
    //   medList = [...minConcept];
    // let medMatchesHTML = "";
    // medList.forEach(med => {
    //   medMatchesHTML += `<li>${med.fullName.toUpperCase()}</li>`;
    // });
    // state.Interactions.MedList = medMatchesHTML;
    // medMatches.innerHTML = medMatchesHTML;
    // console.log(medList);
    // let x = medList.filter(med => med.fullName.includes("venla"));
    // let x = medlist.find(med => med.rxcui = "2045")
    // x.forEach(d => console.log(d));

    // console.log("end");
    // const List = minConcept.map(drug => {
    //   //   // console.log(drug.fullName, drug.rxcui);

    //   return `{"rxcui": "${drug.rxcui}", "fullname":"${drug.fullName}" }`;
    // });

    // state.Interactions = [];

    // state.Interactions.MedList = List;
    //console.log(List.find(med => med.rxcui === 2045404));
    // console.log(List); //["2045404"]

    //   done();
    // })
    // .catch(err => console.log(err));
  }
  // if (page === "Pizza") {
  //   axios
  //     .get(`${process.env.PIZZA_PLACE_API_URL}`)
  //     .then(response => {
  //       state.Pizza.pizzas = response.data;
  //       done();
  //     })
  //     .catch(error => {
  //       console.log("It puked", error);
  //     });
  // }
});
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

  router.updatePageLinks();

  addEventListeners(st);
}

// add menu toggle to bars icon in nav bar
function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  let medList = [];
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  // Add event listener for input with id 'searchMed'

  if (st.page === "Interactions") {
    let theList = document.querySelector("#list");
    axios
      .get("https://rxnav.nlm.nih.gov/REST/RxTerms/allconcepts.json")
      .then(response => {
        const { minConceptGroup } = response.data;
        const { minConcept } = minConceptGroup;
        medList = [...minConcept];
        medList.forEach(med => {
          med.fullName = med.fullName.toUpperCase();
        });
      });
    console.log("start interactions");
    console.log(medList);
    document.querySelector("#inputMed").addEventListener("keyup", e => {
      let entry = e.target.value.toUpperCase();
      console.log(entry);
      let searchResult = [];
      medList.find(med => {
        if (med.fullName.includes(entry)) {
          searchResult.push(med);
        }
      });
      console.log(searchResult);
      let theList1 = "";
      searchResult.forEach(med => {
        theList1 = theList1 + `<li>${med.fullName}</li>`;
      });
      theList.innerHTML = theList1;
    });
  }
}
