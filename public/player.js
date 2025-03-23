const dragArea = document.getElementById('dragArea');
let offsetX, offsetY;

dragArea.addEventListener('mousedown', (e) => {
  offsetX = e.clientX - document.getElementById('lofiPlayer').offsetLeft;
  offsetY = e.clientY - document.getElementById('lofiPlayer').offsetTop;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMouseMove);
  });
});

function onMouseMove(e) {
  const player = document.getElementById('lofiPlayer');
  player.style.left = `${e.clientX - offsetX}px`;
  player.style.top = `${e.clientY - offsetY}px`;
}

function togglePlayer() {
  const playerIframe = document.getElementById('lofiStream');
  playerIframe.classList.toggle('hide');
  const button = document.getElementById('toggleButton');
  button.innerText = playerIframe.classList.contains('hide') ? '🎵' : '🔊';
}

//  time and weather
function updateTimeAndWeather() {
  // Time
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById('currentTime').textContent = `Time: ${currentTime}`;

  // Weather
  const apiKey = '96170d730cc5dbda75ee5810dd865b52';
  const city = 'Mechelen';
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(weatherApiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0].description;
      const temp = data.main.temp;
      document.getElementById('currentWeather').textContent = `${weather}, ${temp}°C`;
    })
    .catch((error) => console.error('Error fetching weather data:', error));
}


setInterval(updateTimeAndWeather, 60000);

updateTimeAndWeather();
