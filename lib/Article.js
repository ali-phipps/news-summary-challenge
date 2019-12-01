function Article(apiUrl, headline, webUrl, imageUrl) {
  this.baseRequestUrl
   = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=';
  this.apiUrl = apiUrl;
  this.headline = headline;
  this.webUrl = webUrl;
  this.imageUrl = imageUrl;
  this.summary;

}

Article.prototype.getSummary = function () {
  const url = this.baseRequestUrl + this.apiUrl + "?show-fields=body";
  console.log(url);
  const Http = new XMLHttpRequest();

  Http.onreadystatechange = function() {
  this.summary = Http.responseText;
  console.log("inside", this.summary);
};
  Http.open("GET", url);
  Http.send();

};
