define(
    [
        'angular',
        '../homePage.module'
    ],
    function( angular, homePageModule ) {
        console.log("[DEBUG] Home Page Directive loading.");

        HomePageDirective.$inject = [ '$filter', '$document' ];

        function HomePageDirective( $filter, $document ) {

            HomePageLink.$inject = [ 'scope', 'element', 'attr' ];

            function HomePageLink( scope, element, attr ) {

            }

            HomePageController.$inject = [ '$scope', '$rootScope' ];

            function HomePageController( $scope, $rootScope ) {
                $scope.testStr = "home page directive test";
            }

            return {
                restrict: 'A',
                link: HomePageLink,
                controller: HomePageController,
                templateUrl: './js/app/homePage/views/homePage.tmpl.html'
            };

        }

        console.log("[DEBUG] Home Page Directive loaded.");

        return homePageModule.directive( 'homePageDirective', HomePageDirective );
    }
);
