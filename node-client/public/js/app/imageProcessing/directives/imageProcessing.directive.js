define(
    [
        'angular',
        '../imageProcessing.module'
    ],
    function( angular, imageProcessingModule ) {
        console.log("[DEBUG] Image Processing Directive loading.");

        ImageProcessingDirective.$inject = [ '$filter' ];
        function ImageProcessingDirective( $filter ) {

            ImageProcessingLink.$inject = [ 'scope', 'element', 'attr' ];
            function ImageProcessingLink( scope, element, attr ) {

            }

            ImageProcessingController.$inject = [ '$scope' ];
            function ImageProcessingController( $scope ) {
                $scope.testStr = "Image Processing Directive Test";
            }

            return {
                restrict: 'A',
                link: ImageProcessingLink,
                controller: ImageProcessingController,
                templateUrl: './js/app/imageProcessing/views/imageProcessing.tmpl.html'
            };
        }
        console.log("[DEBUG] Image Processing Directive loaded.");
        return imageProcessingModule.directive( 'imageProcessingDirective', ImageProcessingDirective );
    }
);
