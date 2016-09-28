'use strict';

var pikePlaceMarket = {
  location: 'Pike Place Market',
  minCust: 14,
  maxCust: 35,
  cupsPerHour: 1.2,
  poundsPerHour: 0.34,
  //randomCustCount: []
  //hours: ['6am', '9pm']

  randomCustomer: function() {
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(randomCust);
    }
  }
pikePlaceMarket.randomCustomer();

  /*outputList: ['randomCustomersHour', 'cupsPerHour', 'poundsPerHour'],

  totalBeansNeeded: function() {
    return cupsPerHour + poundsPerHour;
  }
