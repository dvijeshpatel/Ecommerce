let viewForm = (function(){

    let viewForm = {
    init: function() {

      viewForm.render();
    },
    makeFormHTML: function() {
      return `<form class="user-details">
          <label class="form-title">User Details</label>
          <label class="required-field">Full Name</label>
            <input type="text" placeholder="Full name" name="fullName"  required/>

          <label class="required-field">Mobile number</label>
            <input type="text" placeholder="Mobile no"  name="mobileNo" required/>
          <label class="required-field">Pin Code</label>
            <input type="text" placeholder="Pincode" name="pinCode" required/>
          <label class="required-field"> Address</label>
          <textarea placeholder="Address" name="address" required>
          </textarea>
          <input type="submit" value="Deliver to this address"/>
        </form>`;
    },
    render: function() {
      document.querySelector(".form-wrapper").innerHTML = this.makeFormHTML();

    },
  };
return viewForm;
  })();