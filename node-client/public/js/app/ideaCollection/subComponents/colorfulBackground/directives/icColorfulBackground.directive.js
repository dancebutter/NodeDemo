define(
    [
        '../icColorfulBackground.module',
        'angular'
    ],
    function( icColorfulBackgroundModule, angular ) {
        IcColorfulBackgroundDirective.$inject = [ '$filter', '$document', '$interval' ];
        function IcColorfulBackgroundDirective( $filter, $document, $interval ) {
            IcColorfulBackgroundLink.$inject = [ 'scope', 'element', 'attr' ];
            function IcColorfulBackgroundLink( scope, element, attr ) {
                scope.colorR = 0;
                scope.colorG = 0;
                scope.colorB = 0;
                var cpR = 1;
                var cpG = 1;
                var cpB = 1;
                var colorful;
				element.css({
                    width: '400px',
                    height: '400px',
                    backgroundColor: 'rgb(' + scope.colorR + ',' + scope.colorG + ',' + scope.colorB + ')'
				});

                scope.startColorful = function() {
                    colorful = $interval( backgroundColorChange, 30 );
                };
                scope.stopColorful = function() {
                    $interval.cancel( colorful );
                };

                function backgroundColorChange() {
                    scope.colorR += cpR;
                    scope.colorG += cpG;
                    scope.colorB += cpB;
                    if( scope.colorR >= 255 || scope.colorR <=0 || Math.random() < 0.01 ) {
                        cpR = 0 - cpR;
                    }
                    if( scope.colorG >= 255 || scope.colorG <=0 || Math.random() < 0.01 ) {
                        cpG = 0 - cpG;
                    }
                    if( scope.colorB >= 255 || scope.colorB <=0 || Math.random() < 0.01 ) {
                        cpB = 0 - cpB;
                    }
    				element.css({
                        backgroundColor: 'rgb(' + scope.colorR + ',' + scope.colorG + ',' + scope.colorB + ')'
    				});
                }
            }

            IcColorfulBackgroundController.$inject = [ '$scope' ];
            function IcColorfulBackgroundController( $scope ) {

            }

            return {
                restrict: 'A',
                link: IcColorfulBackgroundLink,
                controller: IcColorfulBackgroundController,
                templateUrl: './js/app/ideaCollection/subComponents/colorfulBackground/views/icColorfulBackground.tmpl.html'
            };
        }

        return icColorfulBackgroundModule.directive( 'icColorfulBackgroundDirective', IcColorfulBackgroundDirective );
    }
);
