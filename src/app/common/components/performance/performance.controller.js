function PerformanceController($state) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.isPerformanceState = $state.is('portfolios.performance');

    $ctrl.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $ctrl.series = ['Series A', 'Series B'];

    $ctrl.options = {
      maintainAspectRatio: false,
      responsive: true
    };

    $ctrl.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
  };
}

angular.module('performance')
  .controller('PerformanceController', PerformanceController);
