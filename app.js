'use strict';

var pikePlaceMarket = {
  location: 'Pike Place Market',
  minCust: 14,
  maxCust: 35,
  randomCust: null,
  averageCups: 1.2,
  averagePounds: 0.34,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
  randomCustomerMethod: function() {
    this.randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return this.randomCust;
  },
  averageCupsMethod: function() {
    return this.averageCups * this.randomCust;
  },
  averagePoundsMethod: function() {
    return this.averagePounds * this.randomCust;
  }

  //totalBeansNeeded: function() {
  //  return cupsPerHour + poundsPerHour;
//  }
};
