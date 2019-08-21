const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.timeanddate.com/weather/israel",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      $('tbody').children().find('a').each((i,el)=>{
        const item = $(el).attr('href');

        console.log(item);
      });
    }
  }
);
