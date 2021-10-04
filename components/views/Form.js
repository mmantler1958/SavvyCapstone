export default () => `
      <form id="contactUs" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xpzkbyoa" method="post">
  <fieldset id="fs-frm-inputs">

    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required="">

    </div><label for="email-address">Email Address</label>

    <input type="email" name="_replyto" id="email-address" placeholder="email" required="">
    <label for="message">Message</label>


    <textarea rows="5" name="message" id="message" placeholder="message..." required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="C">

  </fieldset>
  <input type="submit" value="Submit">
</form>
`;
