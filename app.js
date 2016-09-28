'use strict';

var pikePlaceMarket = {
  location: 'Pike Place Market',
  minCust: 14,
  maxCust: 35,
  averageCups: 1.2,
  averagePounds: 0.34,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],

  randomCustomer: function(hours) {
    //for(var i = 0; i < hours.length; i++) {
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(randomCust);
    console.log(hours);
  }

};

  //averageCupsMethod: function() {
  //  var averageCups =
  //}

//pikePlaceMarket.randomCustomer();

  //outputList: ['randomCustomersHour', 'cupsPerHour', 'poundsPerHour'],

  //totalBeansNeeded: function() {
  //  return cupsPerHour + poundsPerHour;
//  }
