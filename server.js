const request = require("request");
const cheerio = require("cheerio");
const express = require("express");

app = express();

request(
  "https://www.timeanddate.com/weather/israel",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      let cities = [];
      const $ = cheerio.load(html);
      $("tbody")
        .children()
        .find("a")
        .each((i, el) => {
          const cityName = $(el).text();
          const link = $(el).attr("href");

          const city = {
            name: cityName,
            link: "https://www.timeanddate.com" + link
          };
          cities.push(city);
        });
      getCityInfo(cities);
    }
  }
);

const trythis = [];
function getCityInfo(cities) {
  cities.forEach(city => {
    request(city.link, (error, response, html) => {
      let cityInfo = [];
      if (!error && response.statusCode == 200) {
        //let info = [];

        const $ = cheerio.load(html);
        $("table#wt-48")
          .children()
          .find("tr td.sep-l ")
          .each((i, el) => {
            $(el).text() !== "" && cityInfo.push($(el).text());
          });
        const info = {
          cityName: city.name,
          sourceLink: city.link,
          allInfo: cityInfo
        };
        trythis.push(info);
        // info.push({
        //   cityName: city.name,
        //   sourceLink: city.link,
        //   allInfo: cityInfo
        // });
      }
    });
  });
}

app.get("/", (req, res) => {
  setTimeout(() => {
    res.send(trythis);
  }, 5000);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
