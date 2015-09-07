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
                Caman.DEBUG = true;
                /* variable */
                $scope.imgFile = null;
                $scope.canvasElement = document.getElementById('imageProcessingCanvas');
                /* image para */
                // $scope.brightnessValue = 0;
                $scope.contrastValue = 0;
                $scope.rawImageDataArray = null;

                /* functions */
                $scope.imgLoad = imgLoad;
                $scope.imgLoadCanvas = imgLoadCanvas;
                $scope.getGrayImage = getGrayImage;
                $scope.setBrightness = setBrightness;


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
                    loadImgDataForCanvas( theFile.target.result );

                    Caman( '#imgViewer', function() {
                        var camanObject = this;

                        $scope.brightnessMouseup = function() {
                            camanObject.revert( function() {
                                camanObject.brightness($scope.brightnessValue);
                                camanObject.contrast($scope.contrastValue);
                                camanObject.render();
                            });
                        };

                        $scope.contrastMouseup = function() {
                            camanObject.revert( function() {
                                camanObject.brightness($scope.brightnessValue);
                                camanObject.contrast($scope.contrastValue);
                                camanObject.render();
                            });
                        };

                    });
                }

                function uploadFailed( event ) {
                    console.log( event );
                }

                // function setBrightness( value ) {
                //     if( angular.isNumber(value) ) {
                //         Caman( '#imgViewer', function() {
                //             this.brightness(value).render();
                //         });
                //     }
                // }

                function imgLoadCanvas( element ) {
                    if( element && element.files.length >=1 ) {
                        var file = element.files[0];
                        //loadImgDataForCanvas( file );
                    } else {
                        $log.error("[ERROR] Load image canvas failed, files length invaild: " + element.files.length );
                    }
                }

                function loadImgDataForCanvas( data ) {
                    var img = new Image();
                    img.src = data;
                    var imgWidth = img.width;
                    var imgHeight = img.height;
                    $scope.canvasElement.width = imgWidth;
                    $scope.canvasElement.height = imgHeight;
                    // draw image
                    var ctx = $scope.canvasElement.getContext('2d');
                    ctx.drawImage( img, 0, 0, imgWidth, imgHeight );
                    var imageData = ctx.getImageData( 0, 0, imgWidth, imgHeight );
                    $scope.rawImageDataArray = angular.copy( imageData.data );
                }

                function getGrayImage() {
                    var ctx = $scope.canvasElement.getContext('2d');
                    var imageData = ctx.getImageData( 0, 0, $scope.canvasElement.width, $scope.canvasElement.height );
                    var data = imageData.data;
                    for( var i = 0; i < data.length; i += 4 ) {
                        var brightness = 0.33 * data[i] + 0.33 * data[i+1] + 0.33 * data[i+2];
                        data[i] = brightness;
                        data[i+1] = brightness;
                        data[i+2] = brightness;
                    }
                    ctx.putImageData(imageData, 0, 0);
                }

                $scope.$watch('brightnessValue', setBrightness );
                function setBrightness() {
                    value = parseInt( $scope.brightnessValue );
                    if( angular.isNumber( value ) && !isNaN( value ) ) {
                        var ctx = $scope.canvasElement.getContext('2d');
                        var imageData = ctx.getImageData( 0, 0, $scope.canvasElement.width, $scope.canvasElement.height );
                        var data = imageData.data;
                        for( var i = 0; i < data.length; i += 4 ) {
                            data[i] = $scope.rawImageDataArray[i] + value >= 255 ? 255 : $scope.rawImageDataArray[i] + value ;
                            data[i+1] = $scope.rawImageDataArray[i+1] + value >= 255 ? 255 : $scope.rawImageDataArray[i+1] + value ;
                            data[i+2] = $scope.rawImageDataArray[i+2] + value >= 255 ? 255 : $scope.rawImageDataArray[i+2] + value ;
                        }
                        ctx.putImageData( imageData, 0, 0 );
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
