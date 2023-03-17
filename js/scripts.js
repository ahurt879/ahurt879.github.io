/*!
* Start Bootstrap - Business Casual v7.0.8 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
  const listHoursArray = document.body.querySelectorAll('.list-hours li');
  const todayIndex = new Date().getDay();
  if (listHoursArray.length > todayIndex) {
    listHoursArray[todayIndex].classList.add('today');
  }
});

// Dynamic text for Buisness Hours
document.addEventListener('DOMContentLoaded', function() {

  function updateText() {
    const date = new Date();
    const hour = date.getHours();
    const day = date.getDay();
    let text = '';

    if (day > 0 && day < 6 && hour >= 8 && hour < 17) {
      // Weekday between 8am and 5pm
      text = 'Call Now, We\'re Open';
    } else if (day > 0 && day <= 4 && hour >= 17) {
      // Monday to Thursday after 5pm
      text = 'We Open Tomorrow at 8am';
    } else if (day === 5 && hour >= 17) {
      // Friday after 5pm
      text = 'Enjoy Your Weekend! We\'ll be back Monday at 8am.';
    } else if (day === 6 || day === 0) {
      // Saturday or Sunday
      text = 'Enjoy Your Weekend! We\'ll be back Monday at 8am.';
    } else {
      // Outside of business hours
      text = 'We\'re currently closed. Our business hours are Monday to Friday, 8am to 5pm.';
    }

    const dynamicText = document.getElementById('dynamic-text');
    if (dynamicText) {
      dynamicText.textContent = text;
  }
}

  // Call updateText initially
  updateText();

  // Call updateText every minute to update the text
  setInterval(updateText, 60000);

});

  
  