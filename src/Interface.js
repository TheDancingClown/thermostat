$(function() {
  let thermostat = new Thermostat();
  setStyles()
  // $("#temperature").text(thermostat.temp)

  function setStyles() {
    document.getElementById('temperature').textContent = thermostat.temp;
    document.getElementById('eco').textContent = thermostat.ecoMode;
    showTemperature();
    showEcoMode();
    displayWeather(document.getElementById('location').textContent)
	}

  function populateStorage() {
    localStorage.setItem('temperature', document.getElementById('temperature').textContent);
    localStorage.setItem('ecomode', thermostat.ecoMode);
    localStorage.setItem('location', document.getElementById('location').textContent);
		setStyles()
  }
  
  $("#up").on("click", function() {
		$("#message").text(thermostat.increase());
    $("#temperature").text(thermostat.temp);
    populateStorage();
  });

  $("#down").on("click", function() {
		$("#message").text(thermostat.decrease());
    $("#temperature").text(thermostat.temp)
    populateStorage()
  });

  $("#reset").on("click", function() {
    localStorage.clear()
    thermostat.reset()
    $("#temperature").text(thermostat.temp)
    setStyles()
  });

  $('#ecomode').on('click', function() {
    thermostat.switchMode()
    $("#message").text('')
    populateStorage()
  });

  function showTemperature() {
    if(thermostat.energyUsage() == "low") {
			$('#temperature').css('color', 'green');
		} else if(thermostat.energyUsage() == "medium"){
			$('#temperature').css('color', 'black'); 
		} else if(thermostat.energyUsage() == 'high') { 
			$('#temperature').css('color', 'red'); 
		}
  };

  function showEcoMode() {
    if(thermostat.ecoMode == 'Eco') {
      $("#eco").text('eco')
    }
    else {
      $("#eco").text('')
    }
  }

  $('#selectCity').on('submit', function(event) {
		event.preventDefault();
		let city = $('#city').val();
    displayWeather(city);
    $('#location').text(city);
    populateStorage();
	});

  function displayWeather(city) {
    city = $("#location").text(localStorage.getItem('location'))
    if(city) {
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var token = '&appid=2e32145359025f11feb76cabef2e20fd';
      var units = '&units=metric';
      $.get(url + token + units, function(data) {
        $("#city-temp").text(data.main.temp); 
        })
      }
    }

    // function displayCity() {
    //   $("#location").text(localStorage.getItem('location'))
    // }
  
});