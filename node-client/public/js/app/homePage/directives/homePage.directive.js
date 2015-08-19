define(
    [
        'angular',
        '../homePage.module'
    ],
    function( angular, homePageModule ) {


        function HomePageDirective() {

        }

        return homePageModule.directive( 'homePageDirective', HomePageDirective );
    }
);
