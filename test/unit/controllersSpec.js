describe('mycontroller', function() {

    beforeEach(function() {
        module('myapp');
        scope = {};
    });

    it('should populate the scope with a name', inject(function($controller) {
        var ctrl = $controller('mycontroller', {
            $scope: scope
        });
        expect(scope.name).toBe('world');
    }));

    it('should populate the scope with a name', inject(function($controller) {
        var ctrl = $controller('mycontroller', {
            $scope: scope
        });
        expect(scope.numbers.length).toBe(3);
    }));

});
