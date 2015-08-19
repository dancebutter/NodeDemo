define(
    [
        'angular',
        './app.module'
    ], function( angular, app ) {

        NodeClientController.$inject = [ '$scope' ];

        function NodeClientController( $scope ) {
            $scope.name = "Hello Node!!";
        }

        return app.controller( 'nodeClientCtroller', NodeClientController );
    }
);
