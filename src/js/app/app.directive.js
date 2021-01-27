function appDirective() {
  return {
    scope: {},
    restrict: "E",
    templateUrl: "./js/app/app.tpl.html",
    controller: ["$scope", "itemService", appCtrl]
  };

  function appCtrl($scope, itemService) {
    $scope.items = itemService.getAllItems();

    $scope.onSelectItem = data => {
      $scope.selectedItem = data.selectedElem;
    };

    $scope.onItemTagsChanged = () => {
      // $scope.items = itemService.getAllItems();
    };
  }
}