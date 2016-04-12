 var assert = require('assert');
 var add    = require('../src/add.js');

 describe('add()', function() {
     it('should return 4 when you pass in 3, 1', function(){
         assert.equal(add(3, 1), 4);
     })
 })
