define(
    [
        'angular',
        '../d3Playground.module',
        'd3'
    ],
    function( angular, d3PlaygroundModule, d3 ) {
        D3PlaygroundDirective.$inject = [ '$filter', '$document' ];
        function D3PlaygroundDirective() {

            D3PlaygroundController.$inject = [ '$scope' ];
            function D3PlaygroundController( $scope ) {
                $scope.d3ChangeColor = function() {
                    d3.selectAll("p").style("color", "red");
                };
            }

            return {
                restrict : 'E',
                controller : D3PlaygroundController,
                templateUrl: './js/app/d3Playground/views/d3Playground.tmpl.html'
            };
        }

        return d3PlaygroundModule.directive( 'd3PlaygroundDirective', D3PlaygroundDirective );
    }
);
