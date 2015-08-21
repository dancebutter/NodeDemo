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

            ImageProcessingController.$inject = [ '$scope','$log', '$http', '$document' ];
            function ImageProcessingController( $scope, $log, $http, $document ) {
                /* variable */
                $scope.imgFile = null;
                /* image para */
                $scope.brightnessValue = 0;

                /* functions */
                $scope.imgLoad = imgLoad;

                function imgLoad( element ) {
                    if( element && element.files.length >=1 ) {
                        var file = element.files[0];
                        loadImgData( file, processImgData );
                    } else {
                        $log.error("[ERROR] Load image failed, files length invaild: " + element.files.length );
                    }
                }

                function loadImgData( file, callback ) {
                    var reader = new FileReader();

                    reader.onload = function( theFile ) {
                        $log.debug( "[DEBUG] Load Image Data Success.");
                        processImgData( theFile );
                    };
                    reader.onerror = function( error ) {
                        $log.error( "[ERROR] Load Image Data failed. " + error );
                        uploadFailed( error );
                    };
                    reader.readAsDataURL( file );
                }

                function processImgData( theFile ) {
                    var imgElement = $document.find( '#imgViewer' );
                    //var imgElement = angular.element( document.querySelector( '#imgViewer' ) );
                    imgElement[0].src = theFile.target.result;

                    Caman( '#imgViewer', function() {
                        var camanObject = this;

                        $scope.$watch( 'brightnessValue', function( newValue, oldValue ) {
                            if( newValue && newValue !== oldValue ) {
                                var value = parseInt(newValue);
                                //setBrightness( value );
                                camanObject.revert( function() {
                                    camanObject.brightness(value).render();
                                });
                            }
                        });

                        // $scope.$watch( 'brightnessValue', _.debounce( function( brightnessValue ) {
                        //     $scope.$apply(function() {
                        //         var value = parseInt( brightnessValue );
                        //         camanObject.revert( function() {
                        //             camanObject.brightness(value).render();
                        //         });
                        //     })
                        // }, 1000));
                    });
                }

                function uploadFailed( event ) {
                    console.log( event );
                }

                function setBrightness( value ) {
                    if( angular.isNumber(value) ) {
                        Caman( '#imgViewer', function() {
                            this.brightness(value).render();
                        });
                    }
                }

            }

            return {
                restrict: 'E',
                link: ImageProcessingLink,
                controller: ImageProcessingController,
                templateUrl: './js/app/imageProcessing/views/imageProcessing.tmpl.html'
            };
        }
        console.log("[DEBUG] Image Processing Directive loaded.");
        return imageProcessingModule.directive( 'imageProcessingDirective', ImageProcessingDirective );
    }
);
