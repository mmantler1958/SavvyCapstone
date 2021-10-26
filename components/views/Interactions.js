export default st => `
<div class="searchContainer-med">
<div id="searchWrapper-med">
  <label for="searchMed">Select Drug Name</label>
  <input name="searchMed" type="text" id="inputMed" placeholder="search for medication name">
  </div>
  <ul id="list" class="hideList">
${st.Meds}
  </ul>
</div>`;
