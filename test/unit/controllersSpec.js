describe('mycontroller', function() {

    beforeEach(module('myapp'));

    it('should populate the scope with a name', inject(function($controller) {
    	var scope = {};
    	var ctrl = $controller('mycontroller', {$scope:scope});
    	expect(scope.name).toBe('world');
    }));
});
