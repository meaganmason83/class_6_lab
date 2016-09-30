'use strict';

var round = function(num, prec){
  return parseFloat(num.toFixed(prec));
};

var pikePlaceMarket = {
  location: 'Pike Place Market',
  minCust: 14,
  maxCust: 35,
  averageCups: 1.2,
  averagePounds: 0.34,
  hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  custPerHour: [],
  custPerDay: 0,
  totalCust: null,
  cupsPerHour: [],
  cupsPerDay: 0,
  cupsToLbs: [],
  cupsPlusLbs: [],
  lbsPerHour: [],
  lbsPerDay: 0,
  totalBeansPerDay: 0,
  employeesPerHour: [],
  employeesPerDay: 0,
  strings: [],

  getRandomCustomer: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },

  generateCustomerData: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.custPerHour.push(this.getRandomCustomer(this.minCust, this.maxCust));
      this.custPerDay += this.custPerHour[i];
    }
  },

  generateTotalCustomers: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.totalCust += this.custPerHour[i];
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

  generateCupsLbsData: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.cupsToLbs.push(this.cupsPerHour[i] / 16);
  }
},

  generateCupsPlusLbsData: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.cupsPlusLbs.push(this.cupsToLbs[i] + this.lbsPerHour[i]);
    }
  },

  generateBeansData: function() {
    this.totalBeansPerDay = this.cupsPerDay + this.lbsPerDay;
  },

  generateEmployeeData: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.employeesPerHour.push(Math.ceil(this.custPerHour[i] / 30));
      this.employeesPerDay += this.employeesPerHour[i];
    }
  }
};

pikePlaceMarket.generateCustomerData();
pikePlaceMarket.generateTotalCustomers();
pikePlaceMarket.generateCupsData();
pikePlaceMarket.generateLbsData();
pikePlaceMarket.generateCupsLbsData();
pikePlaceMarket.generateCupsPlusLbsData();
pikePlaceMarket.generateBeansData();
pikePlaceMarket.generateEmployeeData();

//D.O.M
var parent = document.getElementById('parentElement');
var child = document.createElement('p');
child.textContent = 'Some words we want in our p element';
parent.appendChild(child);

// //Inserting table
// var tableEl = document.getElementById('new-table');
//
// function myRow(obj) {
//   var rowEl = document.createElement('tr');
//   var blankCell = document.createElement('td');
//   blankCell.textContent = objblank;
//   rowEl.appendChild(blankCell);
//   //Add all your cells
//   tableEl.appendChild(rowEl);
// }
// myRow();
