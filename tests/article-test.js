
  function testNew() {
    var article = new Article("http://content.guardianapis.com/us-news/2019/dec/01/donald-trump-2020-election-democratic-revival-nato-meeting-uk",
      "https://www.theguardian.com/us-news/2019/dec/01/donald-trump-2020-election-democratic-revival-nato-meeting-uk",
      "Faith, but fury too, for Donald Trump at home",
      "https://media.guim.co.uk/2ff3b4243f467559bdd1c614aa17d524f79574d6/0_296_4500_2700/500.jpg");

    var expectedArticle = {
      headline: "A Headline",
      articleUrl:"www.atesturl.com/foranarticle",
      articleSourceURL:"wwww.guardian.co.uk/thearticle",
      imageURL:"www.atest.com/image",
      summary:"An interesting article summary"

    }
    // expect.toEqual(note.create("Hello World"), "Hello World")
  }

function testGetSummary() {
  var article = new Article("http://content.guardianapis.com/us-news/2019/dec/01/donald-trump-2020-election-democratic-revival-nato-meeting-uk",
    "https://www.theguardian.com/us-news/2019/dec/01/donald-trump-2020-election-democratic-revival-nato-meeting-uk",
    "Faith, but fury too, for Donald Trump at home",
    "https://media.guim.co.uk/2ff3b4243f467559bdd1c614aa17d524f79574d6/0_296_4500_2700/500.jpg");
    console.log(article)
  var response = article.getSummary();


}



// testNew();
testGetSummary();
