function contentViewDirective() {
  return {
    scope: {
      selectedItem: "=",
      items: "=",
      onClickItem: "&"
    },
    restrict: "E",
    templateUrl: "./js/app/content-view/content-view.tpl.html",
    controller: ["$scope", "$element", "itemService", contentViewCtrl]
  };

  function contentViewCtrl($scope, $element, itemService) {    

    $scope.selectedOption = "title";

    // Выбор элемента списка    
    $scope.onItemSelect = selectedElem => {
      $scope.onClickItem({selectedElem});
    };

    // выбор параметра для сортировки списка
    $scope.filterByOption = selectedOption => {
      $scope.selectedOption = selectedOption;
    }

    // сортировка по title/date
    $scope.hideTime = isHiddenTime => {
      $scope.isHiddenTime = isHiddenTime;
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
      }
    };  
  }
}
