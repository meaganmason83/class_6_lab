'use strict';

// var round = function(num, precision) {
//   return parseFloat(num.toFixed(precision));
// };

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
  totalBeansPerHour: [],
  totalBeansPerDay: 0,
  employeesPerHour: [],
  employeesPerDay: 0,
  stringsForDOM: [],
  domLink: document.getElementById('pike'),
  ulEl: document.createElement('ul'),

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
    for (var i = 0; i < this.hours.length; i++) {
      this.totalBeansPerHour.push(this.cupsToLbs[i] + this.lbsPerHour[i]);
      this.totalBeansPerDay = this.cupsPerDay + this.lbsPerDay;
    }
  },

  generateEmployeeData: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.employeesPerHour.push(Math.ceil(this.custPerHour[i] / 30));
      this.employeesPerDay += this.employeesPerHour[i];
    }
  },

  generateDOMData: function() {
    console.log('stringsForDOM', this.stringsForDOM[5]);
    console.log('domLink', this.domLink);
    for (var i = 0; i < this.stringsForDOM.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.stringsForDOM[i];
      this.ulEl.appendChild(liEl);
    }
    this.domLink.appendChild(this.ulEl);
},


  generateStringsForDOM: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.stringsForDOM.push(this.hours[i] + ': ' + Math.round(this.totalBeansPerHour[i], 1) + ' lbs [' + Math.round(this.custPerHour[i], 0) + ' customers, ' + Math.round(this.cupsPerHour[i], 1) + ' cups (' + Math.round(this.cupsToLbs[i], 1) + ' lbs), ' + Math.round(this.lbsPerHour[i], 0) + ' lbs to-go]');
    }
    this.stringsForDOM.push('Total customers at ' + this.location + ': ' + this.totalCust);
    this.stringsForDOM.push('Total cups sold at ' + this.location + ': ' + Math.round(this.cupsPerDay, 1));
    this.stringsForDOM.push('Total to-go pound packages sold at ' + this.location + ': '); //need to-go pound packages number
    this.stringsForDOM.push('Total pounds of beans needed at ' + this.location + ': ' + Math.round(this.lbsPerDay, 1));
  }
};

var capHill = {
  location: 'Capitol Hill',
  minCust: 12,
  maxCust: 28,
  averageCups: 3.2,
  averagePounds: 0.03,
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
  totalBeansPerHour: [],
  totalBeansPerDay: 0,
  employeesPerHour: [],
  employeesPerDay: 0,
  stringsForDOM: [],
  domLink: document.getElementById('cap hill'),
  ulEl: document.createElement('ul'),

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
    for (var i = 0; i < this.hours.length; i++) {
      this.totalBeansPerHour.push(this.cupsToLbs[i] + this.lbsPerHour[i]);
      this.totalBeansPerDay = this.cupsPerDay + this.lbsPerDay;
    }
  },

  generateEmployeeData: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.employeesPerHour.push(Math.ceil(this.custPerHour[i] / 30));
      this.employeesPerDay += this.employeesPerHour[i];
    }
  },

  generateDOMData: function() {
    console.log('stringsForDOM', this.stringsForDOM[5]);
    console.log('domLink', this.domLink);
    for (var i = 0; i < this.stringsForDOM.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.stringsForDOM[i];
      this.ulEl.appendChild(liEl);
    }
    this.domLink.appendChild(this.ulEl);
},


  generateStringsForDOM: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.stringsForDOM.push(this.hours[i] + ': ' + Math.round(this.totalBeansPerHour[i], 1) + ' lbs [' + Math.round(this.custPerHour[i], 0) + ' customers, ' + Math.round(this.cupsPerHour[i], 1) + ' cups (' + Math.round(this.cupsToLbs[i], 1) + ' lbs), ' + Math.round(this.lbsPerHour[i], 0) + ' lbs to-go]');
    }
    this.stringsForDOM.push('Total customers at ' + this.location + ': ' + this.totalCust);
    this.stringsForDOM.push('Total cups sold at ' + this.location + ': ' + Math.round(this.cupsPerDay, 1));
    this.stringsForDOM.push('Total to-go pound packages sold at ' + this.location + ': '); //need to-go pound packages number
    this.stringsForDOM.push('Total pounds of beans needed at ' + this.location + ': ' +  Math.round(this.lbsPerDay, 1));
  }
};

var seaLibrary = {
  location: 'Seattle Public Library',
  minCust: 9,
  maxCust: 45,
  averageCups: 2.6,
  averagePounds: 0.02,
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
  totalBeansPerHour: [],
  totalBeansPerDay: 0,
  employeesPerHour: [],
  employeesPerDay: 0,
  stringsForDOM: [],
  domLink: document.getElementById('library'),
  ulEl: document.createElement('ul'),

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
    for (var i = 0; i < this.hours.length; i++) {
      this.totalBeansPerHour.push(this.cupsToLbs[i] + this.lbsPerHour[i]);
      this.totalBeansPerDay = this.cupsPerDay + this.lbsPerDay;
    }
  },

  generateEmployeeData: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.employeesPerHour.push(Math.ceil(this.custPerHour[i] / 30));
      this.employeesPerDay += this.employeesPerHour[i];
    }
  },

  generateDOMData: function() {
    console.log('stringsForDOM', this.stringsForDOM[5]);
    console.log('domLink', this.domLink);
    for (var i = 0; i < this.stringsForDOM.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.stringsForDOM[i];
      this.ulEl.appendChild(liEl);
    }
    this.domLink.appendChild(this.ulEl);
},


  generateStringsForDOM: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.stringsForDOM.push(this.hours[i] + ': ' + Math.round(this.totalBeansPerHour[i], 1) + ' lbs [' + Math.round(this.custPerHour[i], 0) + ' customers, ' + Math.round(this.cupsPerHour[i], 1) + ' cups (' + Math.round(this.cupsToLbs[i], 1) + ' lbs), ' + Math.round(this.lbsPerHour[i], 0) + ' lbs to-go]');
    }
    this.stringsForDOM.push('Total customers at ' + this.location + ': ' + this.totalCust);
    this.stringsForDOM.push('Total cups sold at ' + this.location + ': ' + Math.round(this.cupsPerDay, 1));
    this.stringsForDOM.push('Total to-go pound packages sold at ' + this.location + ': '); //need to-go pound packages number
    this.stringsForDOM.push('Total pounds of beans needed at ' + this.location + ': ' +  Math.round(this.lbsPerDay, 1));
  }
};

//TODO:create function to call all methods!
pikePlaceMarket.generateCustomerData();
pikePlaceMarket.generateTotalCustomers();
pikePlaceMarket.generateCupsData();
pikePlaceMarket.generateLbsData();
pikePlaceMarket.generateCupsLbsData();
pikePlaceMarket.generateCupsPlusLbsData();
pikePlaceMarket.generateBeansData();
pikePlaceMarket.generateEmployeeData();
pikePlaceMarket.generateStringsForDOM();
pikePlaceMarket.generateDOMData();

capHill.generateCustomerData();
capHill.generateTotalCustomers();
capHill.generateCupsData();
capHill.generateLbsData();
capHill.generateCupsLbsData();
capHill.generateCupsPlusLbsData();
capHill.generateBeansData();
capHill.generateEmployeeData();
capHill.generateStringsForDOM();
capHill.generateDOMData();

seaLibrary.generateCustomerData();
seaLibrary.generateTotalCustomers();
seaLibrary.generateCupsData();
seaLibrary.generateLbsData();
seaLibrary.generateCupsLbsData();
seaLibrary.generateCupsPlusLbsData();
seaLibrary.generateBeansData();
seaLibrary.generateEmployeeData();
seaLibrary.generateStringsForDOM();
seaLibrary.generateDOMData();

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
