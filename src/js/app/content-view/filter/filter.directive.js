function filterDirective() {
  return {
    scope: {
      hideTime: "&",
      onInputSearch: "&",
      filterByOption: "&"
    },
    restrict: "E",
    templateUrl: "./js/app/content-view/filter/filter.tpl.html",
    controller: ["$scope", filterCtrl]
  };

  function filterCtrl($scope) {

    $scope.selectOptions = ["title", "date"];
    
    // выбор параметра для сортировки списка
    let sortByProp = "title";
    $scope.sortByProp = function(activeProp) {
      if (arguments.length) {
        sortByProp = activeProp;
        $scope.filterByOption({sortByProp});
      } else {
        return sortByProp;
      }
    };

    // переключение фильтра для вывод даты в нужном формате (со временем или без)
    let isShowDateOnly;
    $scope.isShowDateOnly = function(isTimeOff) {
      if (arguments.length) {
        isShowDateOnly = isTimeOff;
        $scope.hideTime({isShowDateOnly});
      } else {
        return isShowDateOnly;
      }
    };

    // поиск элемента списка по title
    let searchTitle;
    $scope.searchTitle = function(newTitle) {
      if (arguments.length) {
        searchTitle = newTitle;
        $scope.onInputSearch({searchTitle});
      } else {
        return searchTitle;
      }
    };
  }
}