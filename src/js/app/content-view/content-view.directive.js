function contentViewDirective() {
  return {
    scope: {
      selectedItem: "=",
      items: "=",
      onSelectItem: "&",
      onAddItem: "&"
    },
    restrict: "E",
    templateUrl: "./js/app/content-view/content-view.tpl.html",
    controller: ["$scope", "itemService", contentViewCtrl]
  };

  function contentViewCtrl($scope, itemService) {

    $scope.sortByProp = "title";

    // выбор параметра для сортировки списка (title/date)
    $scope.onFilterByOption = sortByProp => {
      $scope.sortByProp = sortByProp;
    };

    // вывод даты в нужном формате (со временем или без)
    $scope.onHideTime = isShowDateOnly => {
      $scope.isShowDateOnly = isShowDateOnly;
    };

    // поиск элемента списка по title
    $scope.onInputSearch = searchTitle => {
      $scope.query = {title: searchTitle};
    };

    //добавление нового элемента списка
    $scope.addItem = () => {
      const newItemTitle = $scope.newItemTitle;

      if (newItemTitle && newItemTitle.trim()) {
        const item = itemService.addItem(newItemTitle);
        $scope.lastItemByDate = item;
        $scope.newItemTitle = '';
        $scope.onAddItem();
      }
    };
  }
}
