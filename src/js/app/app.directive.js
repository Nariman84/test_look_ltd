function appDirective() {
  return {
    scope: {},
    restrict: "E",
    templateUrl: "./js/app/app.tpl.html",
    controller: ["$scope", "$element", "itemService", appCtrl]
  };

  function appCtrl($scope, $element, itemService) {
    $scope.items = itemService.getAllItems();

    $scope.onItemSelect = item => {
      $scope.selectedItem = item;
    };
  }
}