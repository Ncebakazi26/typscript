import assert from 'assert';
import greet from '../greet';


describe('My function', function() {
    it('should test', function() {
        assert.equal("Hello,Bob Crow we will be in touch at:bob@crow.com",greet({
            firstName :"Bob", 
            lastName :"Crow",
            email :"bob@crow.com"
          }));
    });
});