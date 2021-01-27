function summaryViewDirective() {
  return {
    scope: {
      items: "="
    },
    restrict: "E",
    templateUrl: "./js/app/content-view/summary-view/summary-view.tpl.html",
    controller: ["$scope", summaryViewCtrl]
  };

  function summaryViewCtrl($scope) {
    const items = $scope.items;

    $scope.getUniqueTags = () => {
      let newArr = [];

      for (let i = 0; i < items.length; i++) {
        let tags = items[i].tags;
        newArr.push(...tags);
      }

      let uniqueTags = [...new Set(newArr)].join(', ');

      return uniqueTags;
    };

    $scope.getLastItemByDate = () => {
      items.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }

        return 0;
      });

      return items[items.length - 1];
    };
  }
}