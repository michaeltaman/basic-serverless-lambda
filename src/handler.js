'use strict';

module.exports.generateRundomNumber = event => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log('Random generated integer is: ', randomNumber);
  return randomNumber;
};

