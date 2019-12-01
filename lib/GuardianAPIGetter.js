function GuardianAPIGetter() {

}

GuardianAPIGetter.prototype.getResponse = function (inputURL) {

  var response;

  Http.onreadystatechange = function() {
  response = Http.responseText;
  console.log("inside", response);
};
  Http.open("GET", url);
  Http.send();
  console.log(response);
  return this.response;
};
