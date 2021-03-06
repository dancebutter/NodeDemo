define(
    [
        'angular',
        '../icDragableDiv.module'
    ],
    function( angular, icDragableDiv ) {

        /**
         * @ngdoc directive
         * @name IcDragableDivDirective
         * @author Ken Zhang
         * @description
         * Div component can be drag around the page.
         */
        IcDragableDivDirective.$inject = [ '$filter', '$document' ];
        function IcDragableDivDirective( $filter, $document ) {

            IcDragableDivLink.$inject = [ 'scope', 'element', 'attr' ];
            function IcDragableDivLink( scope, element, attr ) {
                var initTop = 80;
                var initLeft = 0;
				var startX = 0;
                var startY = 0;
                var x = initLeft;
                var y = initTop;
				element.css({
                    position: 'absolute',
                    top: initTop + 'px',
                    left: initLeft + 'px'
				});
				element.on( 'mousedown', function( event ) {
					// Prevent default dragging of selected content
					event.preventDefault();
					startX = event.screenX - x;
					startY = event.screenY - y;
					$document.on( 'mousemove', mousemove );
					$document.on( 'mouseup', mouseup );
				});
				function mousemove( event ) {
					x = event.screenX - startX;
					y = event.screenY - startY;
					element.css({
						top: y + 'px',
						left: x + 'px'
					});
				}

				function mouseup() {
					$document.off( 'mousemove', mousemove );
					$document.off( 'mouseup', mouseup );
				}
            }

            IcDragableDivController.$inject = [ '$scope' ];
            function IcDragableDivController( $scope ) {
                $scope.sliderValue = 128;
                $scope.sliderPer = 50;
                $scope.$watch( 'sliderValue', function(newValue, oldValue) {
                    $scope.sliderPer = parseInt ( ( $scope.sliderValue / 255 ) * 100 );
                });
            }

            return {
                restrict: 'A',
                link: IcDragableDivLink,
                controller: IcDragableDivController,
                templateUrl: './js/app/ideaCollection/subComponents/dragableDiv/views/icDragableDiv.tmpl.html'
            };
        }

        return icDragableDiv.directive( 'icDragableDivDirective', IcDragableDivDirective );
    }
);
