'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('nucalc', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /pulses when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/pulses");
  });


  describe('pulses', function() {

    beforeEach(function() {
      browser().navigateTo('#/pulses');
    });


    it('should render pulses view when user navigates to /pulses', function() {
      expect(element('div[title]').getAttribute("title")).
        toMatch(/Pulses/);
    });

  });


});

