export default () => `
  <form id="contactlist" action="">
    <h1>Contact List</h1>
    <div id="person1">
      <div>Contact 1:</div>
      <label for="">Full Name</label>
      <input type="text" id="fullname", name="fullname">
      <label class="email" for="">Email</label>
      <input type="email" id="email", name="email">
    </div>
    <div id="person2">
       <div>Contact 2:</div>
      <label class="label" for="">Full Name</label>
      <input type="text" id="fullname", name="fullname">
      <label class="email"   for="">Email</label>
      <input type="email" id="email", name="email">
    </div>
     <div id="person3">
        <div>Contact 3:</div>
      <label for="">Full Name</label>
      <input type="text" id="fullname", name="fullname">
      <label class="email"   for="">Email</label>
      <input type="email" id="email", name="email">
    </div>
    <button  id="btnsave" type="submit">Save</button>
  </form>
`;
