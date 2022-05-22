window.addEventListener("load", () => {
  let temperatureDegree = document.querySelector(".temperature-degree");
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let locationTimezone = document.querySelector(".location-timezone");
  let icon = document.querySelector(".icon");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Milton%20Keynes?unitGroup=metric&key=3VH82D7G4V7PX3KFN4HYRHJSE&contentType=json`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          const { temp, conditions, icon } = data.currentConditions; //destructuring from api
          const { timezone } = data.stations;

          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = conditions;
          locationTimezone.textContent = data.timezone;
          icon.textContent.icon;
        });
    });
  }
});
