var nodeDemoModule = angular.module( 'nodeDemo', ['ui.router'] );

nodeDemoModule.controller( 'mainCtrl', [ '$scope', function( $scope ) {
    $scope.name = "Hello Node.";
}]);
