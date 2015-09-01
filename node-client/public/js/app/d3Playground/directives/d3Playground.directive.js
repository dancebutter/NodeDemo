define(
    [
        'angular',
        '../d3Playground.module'
    ],
    function( angular, d3PlaygroundModule ) {
        D3PlaygroundDirective.$inject = [ '$filter', '$document' ];
        function D3PlaygroundDirective() {

            D3PlaygroundController.$inject = [ '$scope' ];
            function D3PlaygroundController( $scope ) {

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
