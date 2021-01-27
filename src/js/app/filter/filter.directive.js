function filterDirective() {
  return {
    scope: {
      hideTime: "&",
      onInputSearch: "&",
      filterByOption: "&"
    },
    restrict: "E",
    templateUrl: "./js/app/filter/filter.tpl.html",
    controller: ["$scope", "$element", filterCtrl]
  };

  function filterCtrl($scope, $element) {

    $scope.selectOptions = ["title", "date"];
    
    // выбор параметра для сортировки списка
    let selectedOption = "title";
    $scope.selectedOption = function(activeOption) {
      if (arguments.length) {
        selectedOption = activeOption;
        $scope.filterByOption({selectedOption});
      } else {
        return selectedOption;
      }
    };

    // переключение фильтра для вывод даты в нужном формате (со временем или без)
    let isHiddenTime;
    $scope.isHiddenTime = function(isTimeOff) {
      if (arguments.length) {
        isHiddenTime = isTimeOff;
        $scope.hideTime({isHiddenTime});
      } else {
        return isHiddenTime;
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