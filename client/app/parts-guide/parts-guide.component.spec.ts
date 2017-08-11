'use strict';

describe('Component: PartsGuideComponent', function() {
  // load the controller's module
  beforeEach(module('pcbuilderApp.parts-guide'));

  var PartsGuideComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PartsGuideComponent = $componentController('parts-guide', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
