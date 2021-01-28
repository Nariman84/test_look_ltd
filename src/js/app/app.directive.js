function appDirective() {
  return {
    scope: {},
    restrict: "E",
    templateUrl: "./js/app/app.tpl.html",
    controller: ["$scope", "itemService", appCtrl]
  };

  function appCtrl($scope, itemService) {
    fetchItems();

    $scope.onSelectItem = data => {
      $scope.selectedItem = data.selectedElem;
    };

    $scope.onAddItem = () => {
      fetchItems();
    }

    $scope.onItemTagsChanged = () => {
      const itemId = $scope.selectedItem.id;
      $scope.selectedItem = itemService.getItemById(itemId);
      fetchItems();
    };

    function fetchItems() {
      $scope.items = itemService.getAllItems();
    }
  }
}