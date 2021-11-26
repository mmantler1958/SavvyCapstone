import morning from "../../img/sunrise.png";
import noon from "../../img/noon.png";
import evening from "../../img/moon.png";
export default st => `

<h1>Medication Schedule</h1>
<div class="schedule-input">

     <input   name="searchMed" type="text" id="input-med" class="get-med" placeholder="Search Medication">

     <button id="button-search" type="submit"  class>Search</button>
     <button id="button-add"  disabled class>Add</button>

</div>
 <div id="LOV">

   </div>
<div id="schedule-list">
 <div class="header-row-input">
    <div class="child-medication">Medication</div>
    <div class="child-morning">Morning</div>
    <div class="child-noon">Noon</div>
    <div class="child-evening">Evening </div>
 </div>
</div>
`;
