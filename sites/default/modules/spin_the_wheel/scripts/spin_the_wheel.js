(function () {
  'use strict';
  console.log("start");
  var app = angular.module('newplayer', []);
  console.log(app);
  app.directive('spinTheWheel', spinTheWheel);
  console.log(app);
  app.controller('goSpinTheWheel', function($scope,$rootScope) {
    $scope.go = function() {
      console.log("click");
      $rootScope.$emit('spin-to-win');
    }
  });
  /** @ngInject */
  function spinTheWheel($log, $timeout, $rootScope) {
    console.log("directive");
    var directive = {
      restrict: 'E',
      scope: {
        spinTime: '@',
        delayTime: '@',
        shuffleSpaces: '@'
      },
      link: link,
      controller: spinTheWheelController,
      controllerAs: 'vm',
      transclude: true,
      replace: true,
      template: '<div class="np-spinner-content wheels ng-isolate-scope" spintime="2000" data-difficulty="1">'
      + '<div class="wheel" ng-transclude="" style="opacity: 1; transform-style: preserve-3d; transform: matrix(1, 0, 0, 1, 0, 0); transform-origin: 0% 5% 0px;">'
      + '<div>300</div>'
      + '<div>0</div>'
      + '<div>600</div>'
      + '<div>1000</div>'
      + '<div>700</div>'
      + '<div>800</div>'
      + '<div>Mac</div>'
      + '<div>400</div>'
      + '<div>400</div>'
      + '<div>500</div>'
      + '<div>200</div>'
      + '<div>800</div>'
      + '<div>0</div>'
      + '<div>300</div>'
      + '<div>700</div>'
      + '<div>Daddy</div>'
      + '<div>600</div>'
      + '<div>100</div>'
      + '<div>200</div>'
      + '<div>100</div>'
      + '</div>'
      + '</div>'
    }
    return directive;
    function link(scope, element, attrs) {
      var spin_time = attrs.spintime || 2000,
          delay_time = attrs.delaytime || 1000,
          shuffle_spaces = attrs.shufflespaces || true;
      var $wheel = element.find('.wheel');
      var $wheel_div = element.find('.wheel div');
      TweenMax.set($wheel, {
        alpha: 0
      });
      function shuffle() {
        element.find('.wheel div[data-pick="true"]').removeAttr('data-pick');
        var difficulty = element.data('difficulty');
        element.find('.wheel div:eq(' + difficulty + ')').attr('data-pick', 'true');
        if (shuffle_spaces) {
          var spaces = element.find('.wheel div').detach();
          element.find('.wheel').append(_.shuffle(spaces));
        }
      }
      function spin() {
        var $choice = element.find('.wheel div[data-pick="true"]').remove();
        element.find('.wheel').append($choice);
        //////////////////////////////////////////////////////////////////////////////////////
        // using clipping now :: no spin for you! //
        //////////////////////////////////////////////////////////////////////////////////////
        TweenMax.to($choice, 0.25, {
          alpha: 0
        });
        TweenMax.to($wheel, 0.25, {
          alpha: 0
        });
        if (!Modernizr.csstransforms3d) {
          element.find('.wheel').append(element.find('.wheel div').clone());
          element.find('.wheel div').css({
            'position': 'relative',
            'margin-bottom': '0px'
          });
          element.find('.wheel').animate({"top": "-=1250px"}, 5000);
          return;
        }
        TweenMax.set($wheel, {
          transformStyle: 'preserve-3d',
          alpha: 0
        });
        _.each(element.find('.wheel div'), function (elem, index) {
//                    console.log(
//                            '\n::::::::::::::::::::::::::::::::::::::npSpinner::data tests:::::::::::::::::::::::::::::::::::::::::::::::::',
//                            '\n::index::', index,
//                            '\n:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::'
//                            );
          //////////////////////////////////////////////////////////////////////////////////////
          // adjust index amount (number in template) vs numberDisplayed to detirmine facete
          // number displayed.
          //////////////////////////////////////////////////////////////////////////////////////
          var numberDisplayed = 20;
          TweenMax.to(elem, 0, {
            rotationX: (numberDisplayed * index),
            transformOrigin: '0 10 -200px'
          });
        });
        //////////////////////////////////////////////////////////////////////////////////////
        // test code for use in the console, select the
        // s='10% 10% -100px';e='10% 10% -100px';wheel = $('.wheel');TweenMax.fromTo(wheel, 5,
        // {rotationX:-360,transformOrigin:s}, {rotationX:0,transformOrigin:e})
        //////////////////////////////////////////////////////////////////////////////////////
        var transformOrigin = '0% 5% -200px';
        TweenMax.fromTo($wheel, 5, {
          alpha: 0,
          rotationX: 900,
          transformOrigin: transformOrigin
        }, {
          alpha: 1,
          rotationX: 0,
          transformOrigin: transformOrigin
//                    ease: Elastic.easeOut.config(1, 0.3)
        });
        TweenMax.to($choice, 0.25, {
          alpha: 1,
          ease: Power3.easeOut
        });
      }
      $timeout(function () {
        shuffle();
        spin();
      }, delay_time);
      function spinAgain() {
        shuffle();
        spin();
      }
      $rootScope.$on('spin-to-win', spinAgain);
    }
    /** @ngInject */
    function spinTheWheelController($scope, $rootScope) {
      var vm = this;
      init();
      console.log("init");
      function init() {
      }
    }
  }
  console.log("end");

})();


