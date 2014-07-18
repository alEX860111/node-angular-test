describe('mycontroller', function() {

    beforeEach(function() {
        module('myapp');
        scope = {};
    });

    it('should populate the scope with a title', inject(function($controller) {
        var ctrl = $controller('mycontroller', {
            $scope: scope
        });
        expect(scope.title).toBe('My favorite cars');
    }));

    it('should populate the scope with a cars array', inject(function($controller) {
        var ctrl = $controller('mycontroller', {
            $scope: scope
        });
        expect(scope.cars.length).toBe(5);
    }));

});
