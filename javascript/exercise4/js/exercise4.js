function isLeapYear() {
  let yearToValidate = document.getElementById("validate").value;
  let result = document.getElementById("result");

  if ( yearToValidate % 4 !== 0) {
    result.innerHTML = "FALSE"
    return;
  } else if ( yearToValidate % 100 !== 0 ) {
    result.innerHTML = "TRUE"
    return;
  } else if ( yearToValidate % 400 === 0 ) {
    result.innerHTML = "TRUE"
    return;
  } else {
    result.innerHTML = "FALSE"
    return;
  }

}