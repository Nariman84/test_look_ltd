function elementsViewDirective() {
  return {
    scope: {},
    restrict: "E",
    templateUrl: "./js/app/elements-view/elements-view.tpl.html",
    controller: ["$scope", "$element", elementsViewCtrl],
  };

  function elementsViewCtrl($scope, $element) {
    $scope.items = [
      "item 1 item 1 item 1 item 1 item 1",
      "item 2 item 2 item 2 item 2 item 2",
      "item 3"
    ];

    $scope.model = {
      width: 300,
    };

    $scope.setWidth = () => {
      let width = $scope.model.width;
      if (!width) {
        width = 1;
        $scope.model.width = width;
      }
      $element.css("width", `${width}px`);
    };

    $scope.setWidth();
  }
}