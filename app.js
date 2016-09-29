'use strict';

var pikePlaceMarket = {
  location: 'Pike Place Market',
  minCust: 14,
  maxCust: 35,
  averageCups: 1.2,
  averagePounds: .34,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
  custPerHour: [],
  custPerDay: 0,
  cupsPerHour: [],
  cupsPerDay: 0,
  lbsPerHour: [],
  lbsPerDay: 0,
  employeesPerHour: [],
  employeesPerDay: 0,

  getRandomCustomer: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },

  generateCustomerData: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.custPerHour.push(this.getRandomCustomer(this.minCust, this.maxCust));
      this.custPerDay += this.custPerHour[i];
    }
  },

  generateCupsData: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.cupsPerHour.push(this.custPerHour[i] * this.averageCups);
      this.cupsPerDay += this.cupsPerHour[i];
    }
  },

  generateLbsData: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.lbsPerHour.push(this.custPerHour[i] * this.averagePounds);
      this.lbsPerDay += this.lbsPerHour[i];
    }
  },

  generateEmployeeData: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.employeesPerHour.push(Math.ceil(this.custPerHour[i] / 30));
      this.employeesPerDay += this.employeesPerHour[i];
    }
  }

  // averageCupsMethod: function() {
  //   return this.averageCups * this.randomCust;
  // },
  // averagePoundsMethod: function() {
  //   return this.averagePounds * this.randomCust;
  // },
  // totalCupsMethod: function() {
  //   console.log('Total cups sold at Pike Place Market: ' + (this.averageCups * this.randomCust)) * 16;
  // },
  // totalPoundsMethod: function() {
  //   console.log('Total to-go pound packages sold at Pike Place Market: ' + (this.averagePounds * this.randomCust)) * 16;
  // },
  // totalCustomerMethod: function() {
  //   console.log('Total customers at Pike Place Market: ' + (this.maxCust - this.minCust)) * 16;
  // },
  // totalBeansMethod: function() {
  //   console.log('Total pounds of beans needed at Pike Place Market: ' + (this.averageCups + this.averagePounds) * (this.maxCust - this.minCust)) * 16;
  // }
  //I still need a method for total employees needed.
  //I'm stuck on how to print out my methods for a given hour (ie "6:00am: 86.4 lbs [23 customers, 27.6 cups (1.4 lbs), 85 lbs to-go]")
};

pikePlaceMarket.generateCustomerData();
pikePlaceMarket.generateCupsData();
pikePlaceMarket.generateLbsData();
pikePlaceMarket.generateEmployeeData();
