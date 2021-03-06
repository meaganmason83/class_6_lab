'use strict';

// var round = function(num, precision) {
//   return parseFloat(num.toFixed(precision));
// };

var pikePlace = {
  location: 'Pike Place Market',
  minCustomer: 14,
  maxCustomer: 35,
  averageCups: 1.2,
  averagePounds: 0.34,
  hoursOpen: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  customerPerHour: [],
  customerPerDay: 0,
  totalCustomers: null,
  cupsPerHour: [],
  cupsPerDay: 0,
  cupsIntoPounds: [],
  cupsPlusPounds: [],
  poundsPerHour: [],
  poundsPerDay: 0,
  totalBeansPerHour: [],
  totalBeansPerDay: 0,
  dailyToGoPackages: 0,
  employeesPerHour: [],
  employeesPerDay: 0,
  stringsForDOM: [],
  domLink: document.getElementById('pike'),
  ulEl: document.createElement('ul'),

  getRandomCustomer: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },

  generateCustomerData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.customerPerHour.push(this.getRandomCustomer(this.minCustomer, this.maxCustomer));
      this.customerPerDay += this.customerPerHour[i];
    }
  },

  generateTotalCustomers: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.totalCustomers += this.customerPerHour[i];
    }
  },

  generateCupsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsPerHour.push(this.customerPerHour[i] * this.averageCups);
      this.cupsPerDay += this.cupsPerHour[i];
    }
  },

  generateLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.poundsPerHour.push(this.customerPerHour[i] * this.averagePounds);
      this.poundsPerDay += this.poundsPerHour[i];
  }
},

  generateCupsLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsIntoPounds.push(this.cupsPerHour[i] / 16);
  }
},

  generateCupsPlusLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsPlusPounds.push(this.cupsIntoPounds[i] + this.poundsPerHour[i]);
    }
  },

  generateBeansData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.totalBeansPerHour.push(parseFloat(this.cupsIntoPounds[i].toFixed(0)) + parseFloat(this.poundsPerHour[i].toFixed(0)));
      this.totalBeansPerDay += parseFloat(this.totalBeansPerHour[i].toFixed(0));
    }
  },

  generateEmployeeData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.employeesPerHour.push(Math.ceil(this.customerPerHour[i] / 30));
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
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.stringsForDOM.push(this.hoursOpen[i] + ': ' + parseFloat(this.totalBeansPerHour[i].toFixed(2)) + ' lbs [' + parseFloat(this.customerPerHour[i].toFixed(0)) + ' customers, ' + parseFloat(this.cupsPerHour[i].toFixed(1)) + ' cups (' + parseFloat(this.cupsIntoPounds[i].toFixed(1)) + ' lbs), ' + parseFloat(this.poundsPerHour[i].toFixed(0)) + ' lbs to-go]');
        }
        this.stringsForDOM.push('Total customers at ' + this.name + ': ' + this.totalCustomers);
        this.stringsForDOM.push('Total cups sold at ' + this.name + ': ' + parseFloat(this.cupsPerDay.toFixed(2)));
        this.stringsForDOM.push('Total to-go pound packages sold at ' + this.name + ': ' + parseFloat(this.poundsPerDay.toFixed(0)));
        this.stringsForDOM.push('Total pounds of beans needed at ' + this.name + ': ' + parseFloat(this.totalBeansPerDay.toFixed(0)));

  }
};

var capHill = {
  location: 'Capitol Hill',
  minCustomer: 12,
  maxCustomer: 28,
  averageCups: 3.2,
  averagePounds: 0.03,
  hoursOpen: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  customerPerHour: [],
  customerPerDay: 0,
  totalCustomers: null,
  cupsPerHour: [],
  cupsPerDay: 0,
  cupsIntoPounds: [],
  cupsPlusPounds: [],
  poundsPerHour: [],
  poundsPerDay: 0,
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
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.customerPerHour.push(this.getRandomCustomer(this.minCustomer, this.maxCustomer));
      this.customerPerDay += this.customerPerHour[i];
    }
  },

  generateTotalCustomers: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.totalCustomers += this.customerPerHour[i];
    }
  },

  generateCupsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsPerHour.push(this.customerPerHour[i] * this.averageCups);
      this.cupsPerDay += this.cupsPerHour[i];
    }
  },

  generateLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.poundsPerHour.push(this.customerPerHour[i] * this.averagePounds);
      this.poundsPerDay += this.poundsPerHour[i];
  }
},

  generateCupsLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsIntoPounds.push(this.cupsPerHour[i] / 16);
  }
},

  generateCupsPlusLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsPlusPounds.push(this.cupsIntoPounds[i] + this.poundsPerHour[i]);
    }
  },

  generateBeansData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.totalBeansPerHour.push(parseFloat(this.cupsIntoPounds[i].toFixed(0)) + parseFloat(this.poundsPerHour[i].toFixed(0)));
      this.totalBeansPerDay += parseFloat(this.totalBeansPerHour[i].toFixed(0));
    }
  },

  generateEmployeeData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.employeesPerHour.push(Math.ceil(this.customerPerHour[i] / 30));
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
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.stringsForDOM.push(this.hoursOpen[i] + ': ' + parseFloat(this.totalBeansPerHour[i].toFixed(2)) + ' lbs [' + parseFloat(this.customerPerHour[i].toFixed(0)) + ' customers, ' + parseFloat(this.cupsPerHour[i].toFixed(1)) + ' cups (' + parseFloat(this.cupsIntoPounds[i].toFixed(1)) + ' lbs), ' + parseFloat(this.poundsPerHour[i].toFixed(0)) + ' lbs to-go]');
        }
        this.stringsForDOM.push('Total customers at ' + this.name + ': ' + this.totalCustomers);
        this.stringsForDOM.push('Total cups sold at ' + this.name + ': ' + parseFloat(this.cupsPerDay.toFixed(2)));
        this.stringsForDOM.push('Total to-go pound packages sold at ' + this.name + ': ' + parseFloat(this.poundsPerDay.toFixed(0)));
        this.stringsForDOM.push('Total pounds of beans needed at ' + this.name + ': ' + parseFloat(this.totalBeansPerDay.toFixed(0)));
  }
};

var seaLibrary = {
  location: 'Seattle Public Library',
  minCustomer: 9,
  maxCustomer: 45,
  averageCups: 2.6,
  averagePounds: 0.02,
  hoursOpen: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  customerPerHour: [],
  customerPerDay: 0,
  totalCustomers: null,
  cupsPerHour: [],
  cupsPerDay: 0,
  cupsIntoPounds: [],
  cupsPlusPounds: [],
  poundsPerHour: [],
  poundsPerDay: 0,
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
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.customerPerHour.push(this.getRandomCustomer(this.minCustomer, this.maxCustomer));
      this.customerPerDay += this.customerPerHour[i];
    }
  },

  generateTotalCustomers: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.totalCustomers += this.customerPerHour[i];
    }
  },

  generateCupsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsPerHour.push(this.customerPerHour[i] * this.averageCups);
      this.cupsPerDay += this.cupsPerHour[i];
    }
  },

  generateLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.poundsPerHour.push(this.customerPerHour[i] * this.averagePounds);
      this.poundsPerDay += this.poundsPerHour[i];
  }
},

  generateCupsLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsIntoPounds.push(this.cupsPerHour[i] / 16);
  }
},

  generateCupsPlusLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsPlusPounds.push(this.cupsIntoPounds[i] + this.poundsPerHour[i]);
    }
  },

  generateBeansData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.totalBeansPerHour.push(parseFloat(this.cupsIntoPounds[i].toFixed(0)) + parseFloat(this.poundsPerHour[i].toFixed(0)));
      this.totalBeansPerDay += parseFloat(this.totalBeansPerHour[i].toFixed(0));
    }
  },

  generateEmployeeData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.employeesPerHour.push(Math.ceil(this.customerPerHour[i] / 30));
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
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.stringsForDOM.push(this.hoursOpen[i] + ': ' + parseFloat(this.totalBeansPerHour[i].toFixed(2)) + ' lbs [' + parseFloat(this.customerPerHour[i].toFixed(0)) + ' customers, ' + parseFloat(this.cupsPerHour[i].toFixed(1)) + ' cups (' + parseFloat(this.cupsIntoPounds[i].toFixed(1)) + ' lbs), ' + parseFloat(this.poundsPerHour[i].toFixed(0)) + ' lbs to-go]');
        }
        this.stringsForDOM.push('Total customers at ' + this.name + ': ' + this.totalCustomers);
        this.stringsForDOM.push('Total cups sold at ' + this.name + ': ' + parseFloat(this.cupsPerDay.toFixed(2)));
        this.stringsForDOM.push('Total to-go pound packages sold at ' + this.name + ': ' + parseFloat(this.poundsPerDay.toFixed(0)));
        this.stringsForDOM.push('Total pounds of beans needed at ' + this.name + ': ' + parseFloat(this.totalBeansPerDay.toFixed(0)));
  }
};

var southLakeUnion = {
  location: 'South Lake Union',
  minCustomer: 5,
  maxCustomer: 18,
  averageCups: 1.3,
  averagePounds: 0.04,
  hoursOpen: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  customerPerHour: [],
  customerPerDay: 0,
  totalCustomers: null,
  cupsPerHour: [],
  cupsPerDay: 0,
  cupsIntoPounds: [],
  cupsPlusPounds: [],
  poundsPerHour: [],
  poundsPerDay: 0,
  totalBeansPerHour: [],
  totalBeansPerDay: 0,
  employeesPerHour: [],
  employeesPerDay: 0,
  stringsForDOM: [],
  domLink: document.getElementById('slu'),
  ulEl: document.createElement('ul'),

  getRandomCustomer: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },

  generateCustomerData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.customerPerHour.push(this.getRandomCustomer(this.minCustomer, this.maxCustomer));
      this.customerPerDay += this.customerPerHour[i];
    }
  },

  generateTotalCustomers: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.totalCustomers += this.customerPerHour[i];
    }
  },

  generateCupsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsPerHour.push(this.customerPerHour[i] * this.averageCups);
      this.cupsPerDay += this.cupsPerHour[i];
    }
  },

  generateLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.poundsPerHour.push(this.customerPerHour[i] * this.averagePounds);
      this.poundsPerDay += this.poundsPerHour[i];
  }
},

  generateCupsLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsIntoPounds.push(this.cupsPerHour[i] / 16);
  }
},

  generateCupsPlusLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsPlusPounds.push(this.cupsIntoPounds[i] + this.poundsPerHour[i]);
    }
  },

  generateBeansData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.totalBeansPerHour.push(parseFloat(this.cupsIntoPounds[i].toFixed(0)) + parseFloat(this.poundsPerHour[i].toFixed(0)));
      this.totalBeansPerDay += parseFloat(this.totalBeansPerHour[i].toFixed(0));
    }
  },

  generateEmployeeData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.employeesPerHour.push(Math.ceil(this.customerPerHour[i] / 30));
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
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.stringsForDOM.push(this.hoursOpen[i] + ': ' + parseFloat(this.totalBeansPerHour[i].toFixed(2)) + ' lbs [' + parseFloat(this.customerPerHour[i].toFixed(0)) + ' customers, ' + parseFloat(this.cupsPerHour[i].toFixed(1)) + ' cups (' + parseFloat(this.cupsIntoPounds[i].toFixed(1)) + ' lbs), ' + parseFloat(this.poundsPerHour[i].toFixed(0)) + ' lbs to-go]');
        }
        this.stringsForDOM.push('Total customers at ' + this.name + ': ' + this.totalCustomers);
        this.stringsForDOM.push('Total cups sold at ' + this.name + ': ' + parseFloat(this.cupsPerDay.toFixed(2)));
        this.stringsForDOM.push('Total to-go pound packages sold at ' + this.name + ': ' + parseFloat(this.poundsPerDay.toFixed(0)));
        this.stringsForDOM.push('Total pounds of beans needed at ' + this.name + ': ' + parseFloat(this.totalBeansPerDay.toFixed(0)));
  }
};

var seaTacAirport = {
  location: 'Sea-Tac Airport',
  minCustomer: 28,
  maxCustomer: 44,
  averageCups: 1.1,
  averagePounds: 0.41,
  hoursOpen: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  customerPerHour: [],
  customerPerDay: 0,
  totalCustomers: null,
  cupsPerHour: [],
  cupsPerDay: 0,
  cupsIntoPounds: [],
  cupsPlusPounds: [],
  poundsPerHour: [],
  poundsPerDay: 0,
  totalBeansPerHour: [],
  totalBeansPerDay: 0,
  employeesPerHour: [],
  employeesPerDay: 0,
  stringsForDOM: [],
  domLink: document.getElementById('seatac'),
  ulEl: document.createElement('ul'),

  getRandomCustomer: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },

  generateCustomerData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.customerPerHour.push(this.getRandomCustomer(this.minCustomer, this.maxCustomer));
      this.customerPerDay += this.customerPerHour[i];
    }
  },

  generateTotalCustomers: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.totalCustomers += this.customerPerHour[i];
    }
  },

  generateCupsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsPerHour.push(this.customerPerHour[i] * this.averageCups);
      this.cupsPerDay += this.cupsPerHour[i];
    }
  },

  generateLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.poundsPerHour.push(this.customerPerHour[i] * this.averagePounds);
      this.poundsPerDay += this.poundsPerHour[i];
  }
},

  generateCupsLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsIntoPounds.push(this.cupsPerHour[i] / 16);
  }
},

  generateCupsPlusLbsData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.cupsPlusPounds.push(this.cupsIntoPounds[i] + this.poundsPerHour[i]);
    }
  },

  generateBeansData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.totalBeansPerHour.push(parseFloat(this.cupsIntoPounds[i].toFixed(0)) + parseFloat(this.poundsPerHour[i].toFixed(0)));
      this.totalBeansPerDay += parseFloat(this.totalBeansPerHour[i].toFixed(0));
    }
  },

  generateEmployeeData: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.employeesPerHour.push(Math.ceil(this.customerPerHour[i] / 30));
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
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.stringsForDOM.push(this.hoursOpen[i] + ': ' + parseFloat(this.totalBeansPerHour[i].toFixed(2)) + ' lbs [' + parseFloat(this.customerPerHour[i].toFixed(0)) + ' customers, ' + parseFloat(this.cupsPerHour[i].toFixed(1)) + ' cups (' + parseFloat(this.cupsIntoPounds[i].toFixed(1)) + ' lbs), ' + parseFloat(this.poundsPerHour[i].toFixed(0)) + ' lbs to-go]');
        }
        this.stringsForDOM.push('Total customers at ' + this.name + ': ' + this.totalCustomers);
        this.stringsForDOM.push('Total cups sold at ' + this.name + ': ' + parseFloat(this.cupsPerDay.toFixed(2)));
        this.stringsForDOM.push('Total to-go pound packages sold at ' + this.name + ': ' + parseFloat(this.poundsPerDay.toFixed(0)));
        this.stringsForDOM.push('Total pounds of beans needed at ' + this.name + ': ' + parseFloat(this.totalBeansPerDay.toFixed(0)));
  }
};

//TODO:create function to call all methods!
pikePlace.generateCustomerData();
pikePlace.generateTotalCustomers();
pikePlace.generateCupsData();
pikePlace.generateLbsData();
pikePlace.generateCupsLbsData();
pikePlace.generateCupsPlusLbsData();
pikePlace.generateBeansData();
pikePlace.generateEmployeeData();
pikePlace.generateStringsForDOM();
pikePlace.generateDOMData();

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

southLakeUnion.generateCustomerData();
southLakeUnion.generateTotalCustomers();
southLakeUnion.generateCupsData();
southLakeUnion.generateLbsData();
southLakeUnion.generateCupsLbsData();
southLakeUnion.generateCupsPlusLbsData();
southLakeUnion.generateBeansData();
southLakeUnion.generateEmployeeData();
southLakeUnion.generateStringsForDOM();
southLakeUnion.generateDOMData();

seaTacAirport.generateCustomerData();
seaTacAirport.generateTotalCustomers();
seaTacAirport.generateCupsData();
seaTacAirport.generateLbsData();
seaTacAirport.generateCupsLbsData();
seaTacAirport.generateCupsPlusLbsData();
seaTacAirport.generateBeansData();
seaTacAirport.generateEmployeeData();
seaTacAirport.generateStringsForDOM();
seaTacAirport.generateDOMData();

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
