// Name: Matthew Gerszewski
// Date Created: Jan 20, 2020
// Date last modified: Jan 21, 2020
// Most recent revision: 0

function validateForm() {
  // First, errors are cleared. Then, name and email input are verified as valid. If either the name or email fields do not meet the requirements the user is alerted of the requirements and has-error class names are attached to the respective field(s) with error(s). If both the name and email are valid, the user is notified that their entry is valid.

  clearErr();
  
  var contactName = document.forms["contactForm"]["name"].value;
  var contactEmail = document.forms["contactForm"]["email"].value;
  var contactNameValid = true;
  var contactEmailValid = true;

  var contactNameType = typeof(contactName);

  if(contactNameType !== "string" || contactName === "") {
    alert("Please enter your name into the name field so that we may know who we are responding to.");
    document.forms["contactForm"]["name"].parentElement.className = "col-sm-7 has-error";
    document.forms["contactForm"]["name"].focus();
    contactNameValid = false;
  }

  // Credit for regular expression to webpage https://www.w3resource.com/javascript/form/email-validation.php
  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactEmail) || contactEmail === "") {
    alert("Please enter a valid email address into the email field so that we may contact you.");
    document.forms["contactForm"]["email"].parentElement.className = "col-sm-7 has-error";
    document.forms["contactForm"]["email"].focus();
    contactEmailValid = false;
  }

  if(contactNameValid === true && contactEmailValid === true) {
    alert("Thank you for entering a valid name and email address and any other information you provided. We appreciate your interest in Matty's Magnificent Munchies and will respond within the next 24 hours! Hope to see you at either of our locations!")
  }

  return false;
  // Returning false to the form that calls this function prevents the form from being submitted and the page from being updated.
}

function clearErr() {
  // Purpose - An error class name may be attached to the name or email address parent elements in the event the user enters invalid information. This function clears class name errors when called.
  
  for (var loopCounter = 0; loopCounter < document.forms["contactForm"].elements.length; loopCounter += 1) {
    if (document.forms["contactForm"].elements[loopCounter].parentElement.className.indexOf("has-error") != -1) {
      document.forms["contactForm"].elements[loopCounter].parentElement.className = "col-sm-7";
    }
  }
}