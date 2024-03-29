
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidNumber(value) {
  return /^(\+[0-9]+)$/.test(value);
}

function LoginViaOtp() {
  var email = $("#loginemail").val();
  var otp = $("#LoginOtp").val();

  $.ajax({
    url: '/Customer/LoginViaOTP',
    data: { email: email, OTP: otp },
    type: 'GET',
    success: function (data) {
      window.location.href = '/';
    },
    error: function () {
      alert('Issue Faced Wile Loggin In via OTP');
    }
  });
}

function VerifyMailOtp() {
  var email = $("#Email").val();
  var otp = $("#verificationcode").val();

  $.ajax({
    url: '/Customer/VerifyEmailOtp',
    data: { email: email, otp: otp },
    type: 'GET',
    success: function (data) {
      if (data == true) {
        $('#verificationcode').toggle();
        $('#phoneverify').prop('disabled', false);
        $('#successemail').prop('hidden', false);
        $('#emailverify').prop('hidden', true);
        $('#mailcode').prop('hidden', true);
        document.getElementById("Email").value = email;
        alert('OTP Verified Successfully!');
      } else {
        alert('Wrong OTP. Please Enter Again!!!');
      }
    },
    error: function () {
      // Handle AJAX error (optional)
      alert('An error occurred while sending the verification Message.');
    }
  });
}

function VerifyMobileOtp() {
  var phone = $("#Phone").val();
  var otp = $("#verificationcodemessage").val();

  $.ajax({
    url: '/Customer/VerifyMobileOtp',
    data: { number: phone, otp: otp },
    type: 'GET',
    success: function (data) {
      if (data == true) {
        $('#verificationcodemessage, #messagecode').toggle();
        $('#register-button').prop('disabled', false);
        $('#successmessage').prop('hidden', false);
        $('#phoneverify').prop('hidden', true);
        alert('OTP Verified Successfully!');
      } else {
        alert('Wrong OTP. Please Enter Again!!!');
      }
    },
    error: function () {
      // Handle AJAX error (optional)
      alert('An error occurred while sending the verification Message.');
    }
  });
}

function sendVerificationEmail() {
  var email = $("#Email").val();

  if (email != "" && email != null) {
    if (isValidEmail(email)) {
      $.ajax({
        url: '/Customer/SendVerificationEmail?email=' + email, // Update the URL with your actual endpoint
        type: 'GET',
        success: function (data) {
          if (data == true) {
            $('#verificationcode, #emailverify').toggle();
            $('#mailcode').prop('hidden', false);
            //$('#Email').prop('disabled', true);
            $('#emailverify').hide();
            alert('Verification email sent successfully!');
          } else {
            alert('Failed to send verification email: ' + data.errorMessage);
          }
        },
        error: function () {
          // Handle AJAX error (optional)
          alert('An error occurred while sending the verification email.');
        }
      });
    }
    else {
      alert("Please Enter a Proper Email Address");
    }
  }
  else {
    alert("Please Enter a Email Value");
  }
}

function sendVerificationMessage() {
  var phone = $("#Phone").val();

  if (phone != null && phone != "") {
    if (isValidNumber(phone)) {
      $.ajax({
        url: '/Customer/SendWhatsAppMessage?to=' + encodeURIComponent(phone), // Update the URL with your actual endpoint
        type: 'GET',
        //data: { email: email },
        success: function (data) {
          // Handle success (optional)
          if (data == true) {
            // Display a success message or update the UI
            $('#verificationcodemessage, #messagecode, #phoneverify').toggle();
            //$('#phoneVal').prop('disabled', true);
            $('#phoneverify').hide();
            // Display a success message or update the UI
            alert('Verification Message sent successfully!');
          } else {
            // Handle any errors returned from the server
            alert('Failed to send verification Message: ' + data.errorMessage);
          }
        },
        error: function () {
          // Handle AJAX error (optional)
          alert('An error occurred while sending the verification Message.');
        }
      });
    }
    else {
      alert("Please Enter a Valid Phone Number with a Country Code")
    }
  }
  else {
    alert("Please Enter a Mobile Number");
  }
}

function JumpToOtpLogin() {
  $("#normalLogin").hide();
  $("#OtpLogin").show();
  $("#otplabel").hide();
}

function JumpToNormalLogin() {
  $("#normalLogin").show();
  $("#OtpLogin").hide();
}

function ShowMessagePhone() {
  var yourButton = document.getElementById("phoneverify");

  if (yourButton && yourButton.disabled) {
    alert("Please complete email verification.");
  } else {
  }
}

function ShowMessageRegister() {
  var phoneVerifyButton = document.getElementById("successemail");
  var emailVerifyButton = document.getElementById("successmessage");

  if (phoneVerifyButton && isHidden(phoneVerifyButton)) {
    alert("Please complete phone verification.");
  } else if (emailVerifyButton && isHidden(emailVerifyButton)) {
    alert("Please complete email verification.");
  } else {
    // Additional conditions for other buttons can be added here
  }
}

function isHidden(element) {
  return element.offsetParent === null;
}

function SendOtpforLogin() {
  var email = $("#loginemail").val();

  if (email != "" && email != null) {
    $.ajax({
      url: '/Customer/SendLoginViaOtpVerification?email=' + email, // Update the URL with your actual endpoint
      type: 'GET',
      success: function (data) {
        if (data == true) {
          $("#OtpLogin").show();
          $("#otplabel").show();
          $('#OtpLoginbtn').prop('hidden', false);
          $('#LoginOtp').prop('hidden', false);
          $('#SendOtpLogin').prop('hidden', true);
          $('#backtonormal').prop('hidden', true);

          alert('Verification Code sent successfully on Mail and WhatsApp Both!');
        } else {
          alert('Failed to send verification email');
        }
      },
      error: function () {
        // Handle AJAX error (optional)
        alert('An error occurred while sending the verification email.');
      }
    });
  }
  else {
    alert("Please Enter the Email For Login.");
  }
}

var oldMailVal = "";
function updateEmailValue() {
  var successEmailButton = $("#successemail");
  var verificationCodeInput = $("#mailcode");
  var beforeChangeValue = oldMailVal;
  var afterChangeVal = $("#Email").val();

  if (successEmailButton.is(":hidden") && verificationCodeInput.is(":hidden")) {
    $("#Email").val(afterChangeVal);
    oldMailVal = afterChangeVal
    console.log("Updated Email Value:", emailValue);
  } else {
    $("#Email").val(beforeChangeValue);
    console.log("Success Email Button is not visible, not updating email value");
  }
}

var oldPhoneVal = "";
function updatePhoneValue() {
  var successEmailButton = $("#successmessage");
  var verificationCodeInput = $("#messagecode");
  var beforeChangeValue = oldPhoneVal;
  var afterChangeVal = $("#Phone").val();

  if (successEmailButton.is(":hidden") && verificationCodeInput.is(":hidden")) {
    $("#Phone").val(afterChangeVal);
    oldPhoneVal = afterChangeVal
    console.log("Updated Phone Value:", emailValue);
  } else {
    $("#Phone").val(beforeChangeValue);
    console.log("Success Phone Button is not visible, not updating Phone value");
  }
}

function GetInstagramImages(id) {
  console.log("Hello");
  var image = $("#link").val();
  $.ajax({
    type: 'GET',
    url: '/Customer/InstaPost',
    data: { imageUrl: image },
    success: function (data) {
      // Update the image source
      $('#main-product-img-' + id).attr('src', data.imageBase64);
      $('#add-to-cart-button-' + id).prop('disabled', false);
    },
    error: function () {
      alert('Failed to load the image.');
    }
  });
}

function GetProfile(id) {
  console.log("Hello");
  var image = $("#username").val();
  $.ajax({
    type: 'GET',
    url: '/Customer/InstaProfile',
    data: { username: image },
    success: function (data) {
      // Update the image source
      $('#main-product-img-' + id).attr('src', data.imageBase64);
      $('#add-to-cart-button-' + id).prop('disabled', false);
    },
    error: function () {
      alert('Failed to load the image.');
    }
  });
}
