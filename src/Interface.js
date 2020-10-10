$(function() {
  let thermostat = new Thermostat();
  setStyles()
  // $("#temperature").text(thermostat.temp)

  function setStyles() {
    document.getElementById('temperature').textContent = thermostat.temp;
    showTemperature();
    showEcoMode();
	}

  function populateStorage() {
    localStorage.setItem('temperature', document.getElementById('temperature').textContent);
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
    populateStorage()
    $("#temperature").text(thermostat.temp)
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
    if(thermostat.ecoMode == true) {
      $("#eco").text('eco')
    }
    else {
      $("#eco").text('')
    }
  }
  
});