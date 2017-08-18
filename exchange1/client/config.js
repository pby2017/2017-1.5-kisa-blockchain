Accounts.ui.config({
//  passwordSignupFields: 'USERNAME_ONLY'

  /*extraSignupFields: [{
      fieldName: "username",
      fieldLabel: "username",
      inputType: 'text'
  }]*/

  extraSignupFields: [{
        fieldName: 'firstname',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'lastname',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }, {
          fieldName: 'accountnumber',
          fieldLabel: 'Wallet address',
          inputType: 'text',
          visible: true,
          validate: function(value, errorFunction) {
            if (!value) {
              errorFunction("Please write your wallet address");
              return false;
            } else {
              return true;
            }
          }
      }, {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});
