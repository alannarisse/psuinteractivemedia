$(function() {
  // Adjustable time setting (in seconds)
  let TOTAL_TIME = 50;
  let DECREMENT_INTERVAL = TOTAL_TIME / 10 * 1000; // 5 seconds if TOTAL_TIME is 50

  // State values (0-100)
  let feedLevel = 50;
  let sleepLevel = 50;
  let playLevel = 50;

  // Timers
  let feedTimer, sleepTimer, playTimer;
  let isPaused = false;

  // Check if pet already exists
  function init() {
    let petName = localStorage.getItem('petName');
    if (petName) {
      // Load saved levels if they exist
      let savedFeed = localStorage.getItem('feedLevel');
      let savedSleep = localStorage.getItem('sleepLevel');
      let savedPlay = localStorage.getItem('playLevel');
      let savedPaused = localStorage.getItem('isPaused');

      if (savedFeed !== null) feedLevel = parseInt(savedFeed);
      if (savedSleep !== null) sleepLevel = parseInt(savedSleep);
      if (savedPlay !== null) playLevel = parseInt(savedPlay);
      if (savedPaused === 'true') isPaused = true;
      $('#start').removeClass('hide')
      showCareScreen(petName);
    } else {
      showStartScreen();
    }
  }

  function showStartScreen() {
    $('#start').removeClass('hide');
    $('#care').addClass('hide');
    $('#startOver').addClass('hide');
  }

  function showCareScreen(name) {
    $('#start').addClass('hide');
    $('#care').removeClass('hide');
    $('#startOver').addClass('hide');
    $('#displayName').text(name);
    updateMeter('feed', feedLevel);
    updateMeter('sleep', sleepLevel);
    updateMeter('play', playLevel);
    $('#tamaImg').attr('src', 'images/sitting-dog.svg');

    if (isPaused) {
      $('#pauseBtn').text('Resume');
    } else {
      $('#pauseBtn').text('Pause');
      startTimers();
    }
  }

  function showGameOver() {
    stopTimers();
    clearSavedLevels();
    $('#start').addClass('hide');
    $('#care').addClass('hide');
    $('#startOver').removeClass('hide');
  }

  function resetMeters() {
    feedLevel = 50;
    sleepLevel = 50;
    playLevel = 50;
    isPaused = false;
    updateMeter('feed', feedLevel);
    updateMeter('sleep', sleepLevel);
    updateMeter('play', playLevel);
    $('#tamaImg').attr('src', 'images/sitting-dog.svg');
    $('#pauseBtn').text('Pause');
  }

  function updateMeter(type, value) {
    let $meter = $('#' + type + 'val');
    $meter.css('width', value + '%');

    // Update color based on value
    $meter.removeClass('meter-green meter-yellow meter-red');
    if (value >= 50) {
      $meter.addClass('meter-green');
    } else if (value > 25) {
      $meter.addClass('meter-yellow');
    } else {
      $meter.addClass('meter-red');
    }
  }

  function startTimers() {
    feedTimer = setInterval(function() {
      feedLevel = Math.max(0, feedLevel - 5);
      updateMeter('feed', feedLevel);
      checkDeath();
    }, DECREMENT_INTERVAL);

    sleepTimer = setInterval(function() {
      sleepLevel = Math.max(0, sleepLevel - 5);
      updateMeter('sleep', sleepLevel);
      checkDeath();
    }, DECREMENT_INTERVAL);

    playTimer = setInterval(function() {
      playLevel = Math.max(0, playLevel - 5);
      updateMeter('play', playLevel);
      checkDeath();
    }, DECREMENT_INTERVAL);
  }

  function stopTimers() {
    clearInterval(feedTimer);
    clearInterval(sleepTimer);
    clearInterval(playTimer);
  }

  function saveLevels() {
    localStorage.setItem('feedLevel', feedLevel);
    localStorage.setItem('sleepLevel', sleepLevel);
    localStorage.setItem('playLevel', playLevel);
    localStorage.setItem('isPaused', isPaused);
  }

  function clearSavedLevels() {
    localStorage.removeItem('feedLevel');
    localStorage.removeItem('sleepLevel');
    localStorage.removeItem('playLevel');
    localStorage.removeItem('isPaused');
    localStorage.removeItem('petName');
  }

  function checkDeath() {
    if (feedLevel <= 0 || sleepLevel <= 0 || playLevel <= 0) {
      showGameOver();
    }
  }

  // Name button click
  $('#setNameBtn').click(function(e) {
    e.preventDefault();
    let name = $('#nameField').val().trim();
    if (name) {
      localStorage.setItem('petName', name);
      resetMeters();
      showCareScreen(name);
      $('#start').addClass('hide')
    }
  });

  // Feed button
  $('#feedBtn').click(function(e) {
    e.preventDefault();
    feedLevel = Math.min(100, feedLevel + 10);
    updateMeter('feed', feedLevel);
    $('#tamaImg').attr('src', 'images/hungry-dog.svg');
  });

  // Sleep button
  $('#sleepBtn').click(function(e) {
    e.preventDefault();
    sleepLevel = Math.min(100, sleepLevel + 10);
    updateMeter('sleep', sleepLevel);
    $('#tamaImg').attr('src', 'images/sleepy-dog.svg');
  });

  // Play button
  $('#playBtn').click(function(e) {
    e.preventDefault();
    playLevel = Math.min(100, playLevel + 10);
    updateMeter('play', playLevel);
    $('#tamaImg').attr('src', 'images/playful-dog.svg');
  });

  // Pause/Resume button
  $('#pauseBtn').click(function(e) {
    e.preventDefault();
    if (isPaused) {
      // Resume
      isPaused = false;
      $('#pauseBtn').text('Pause');
      startTimers();
      saveLevels();
    } else {
      // Pause
      isPaused = true;
      $('#pauseBtn').text('Resume');
      stopTimers();
      saveLevels();
    }
  });

  // Restart button
  $('#restartBtn').click(function(e) {
    e.preventDefault();
    $('#nameField').val('');
    showStartScreen();
  });

  // Start the app
  init();
});
