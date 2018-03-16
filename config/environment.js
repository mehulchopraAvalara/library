/*jshint node:true*/
'use strict';

module.exports = function(environment/* , appConfig */) {
  const ENV = { 
    modulePrefix: 'library',
    environment: environment,
  };

  return ENV;
};
