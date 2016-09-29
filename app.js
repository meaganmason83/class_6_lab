'use strict';

var pikePlaceMarket = {
  location: 'Pike Place Market',
  minCust: 14,
  maxCust: 35,
  randomCust: [],
  averageCups: 1.2,
  averagePounds: .34,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
  randomCustomerMethod: function() {
    this.randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return this.randomCust;
    //randomCust.push();
  },
  averageCupsMethod: function() {
    return this.averageCups * this.randomCust;
  },
  averagePoundsMethod: function() {
    return this.averagePounds * this.randomCust;
  },
  totalCupsMethod: function() {
    console.log('Total cups sold at Pike Place Market: ' + (this.averageCups * this.randomCust)) * 16;
  },
  totalPoundsMethod: function() {
    console.log('Total to-go pound packages sold at Pike Place Market: ' + (this.averagePounds * this.randomCust)) * 16;
  },
  totalCustomerMethod: function() {
    console.log('Total customers at Pike Place Market: ' + (this.maxCust - this.minCust)) * 16;
  },
  totalBeansMethod: function() {
    console.log('Total pounds of beans needed at Pike Place Market: ' + (this.averageCups + this.averagePounds) * (this.maxCust - this.minCust)) * 16;
  }
  //I still need a method for total employees needed.
  //I'm stuck on how to print out my methods for a given hour (ie "6:00am: 86.4 lbs [23 customers, 27.6 cups (1.4 lbs), 85 lbs to-go]")
};
