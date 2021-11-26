import { Footer, Main, Nav } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";
// import { Interactions } from "./components/views";
let medList = [];
let currentRow = 0;
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
  console.log(st.page);
  if (st.page === "ContactUs") {
  }
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
      e.target.title = entry;
      console.log(entry);
      let searchResult = [];
      medList.find(med => {
        if (med.fullName.includes(entry)) {
          searchResult.push(med);
        }
      });
      console.log(searchResult);
      if (entry === searchResult[0].fullName) {
        document.querySelector("#list").classList.add("hideList");
        console.log("medMatches");
      } else {
        document.querySelector("#list").classList.remove("hideList");
      }
      // console.log(searchResult);
      let theList1 = "";
      searchResult.forEach(med => {
        theList1 =
          theList1 +
          `<li class="list-item" id=${med.rxcui}>${med.fullName}</li>`;
        // console.log(med.rxcui);
      });
      theList.innerHTML = theList1;
      // let matchList = document.querySelectorAll("li");
      // console.log(matchList);
      document.querySelector("#list").addEventListener("click", e => {
        console.log(e.target);
        document.querySelector("#inputMed").value = e.target.innerText;
        document.querySelector("#inputMed").title = e.target.innerText;
        document.querySelector("#list").classList.add("hideList");
      });
      // console.log(j);
      // document
      //   .querySelectorAll(".list-item")
      // j.addEventListener("click", e => console.log(e.target.id));
    });
  }
  //
  // Start of page MedSchedule
  //
  if (st.page === "MedSchedule") {
    addItem();
  } // End of page MedSchedule
}
//
//  MedSchedule Page supporting functions
//

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
//
//

function addItem() {
  let AddButton = document.querySelector("#button-add");
  let SearchButton = document.querySelector("#button-search");
  let theLOVList = document.querySelector("#LOV");
  let theLOVListValues;
  let entry;
  let MedID;

  let scheduleList = document.querySelector("#schedule-list");
  AddButton.disabled = true;
  let searchResult = [];
  SearchButton.addEventListener("click", e => {
    entry = document.querySelector("#input-med").value.toUpperCase();

    console.log(entry);

    searchResult = [];
    medList.find(med => {
      if (med.fullName.includes(entry)) {
        searchResult.push(med);
      }
    });
    if (searchResult.length === 0) {
      AddButton.disabled = true;
    }

    theLOVListValues = "";
    searchResult.forEach(med => {
      theLOVListValues =
        theLOVListValues + `<li class="" id=${med.rxcui}>${med.fullName}</li>`;
    });
    theLOVList.innerHTML = theLOVListValues;

    theLOVList.addEventListener("click", e => {
      document.querySelector("#input-med").value = e.target.innerText;
      document.querySelector("#input-med").title = e.target.innerText;
      MedID = e.path[0].id;
      entry = e.target.innerText;
      theLOVList.innerHTML = "";
      AddButton.disabled = false;
    });

    // AddButton.addEventListener("click", e => {
  });
  AddButton.addEventListener("click", e => {
    const scheduleRow = `
            <div class="schedule-list-item" id="new-item">
              <input   name="searchMed" type="text" id="new-med" class="get-med" placeholder="Medication">
              <input type="checkbox" id="new-morning" name="morning">
              <input type="checkbox" id="new-noon" name="noon">
              <input type="checkbox" id="new-evening" name="evening">
              <div> <button class="button-delete">Delete</button></div>

              <div> <button class="button-save">Save</button></div>
            </div>
              `;
    scheduleList.insertAdjacentHTML("beforeend", scheduleRow);
    let newItem = document.getElementById("new-item");
    newItem.id = MedID;
    newItem.querySelector("#new-med").value = document.querySelector(
      "#input-med"
    ).value;
    newItem.querySelector("#new-med").title = document.querySelector(
      "#input-med"
    ).value;
    newItem.querySelector("#new-med").disabled = true;
    document.querySelector("#input-med").value = "";
    newItem = document.getElementById(MedID);
    AddButton.disabled = true;
    // let newMed = newItem.querySelector("#new-med");
    // newMed.value = document.querySelector("#input-med").value;
    // document.getElementById("new-med").id = MedID;

    // document.getElementById(MedID).value = document.getElementById(
    //   "input-med"
    // ).value;

    // // console.log(newMorning);
    // document.getElementById("new-item").id = MedID;
    // // document.getElementById("input-med").value = "";
    // document.querySelector("#new-morning").checked = document.querySelector(
    //   "#input-morning"
    // ).checked;
    // console.log("new morning", document.querySelector("#new-morning").checked);
    // console.log(document.getElementById(MedID).value);
  });
}
