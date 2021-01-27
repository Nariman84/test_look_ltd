function contentItemDirective() {
  return {
    scope: {
      selectedItem: "=",
      item: "=",
      isHiddenTime: "=",
      onItemSelect: "&"
    },
    restrict: "E",
    templateUrl: "./js/app/content-item/content-item.tpl.html",
    controller: ["$scope", "$element", "itemService", contentItemCtrl]
  };

  function contentItemCtrl($scope, $element, itemService) {

    // вывод даты в нужном формате (со временем или без)
    $scope.getDate = createdDate => {
      const d = new Date(createdDate);

      const year = d.getFullYear();
      const date = d.getDate();
      const month = d.getMonth() + 1;
      const hours = d.getHours();
      const minutes = d.getMinutes();

      const dateWithoutTime = `${getValueDate(date)}.${getValueDate(month)}.${year}`;

      if ($scope.isHiddenTime) {
        return dateWithoutTime;
      }

      return `${dateWithoutTime} ${getValueDate(hours)}:${getValueDate(minutes)}`;
    };

    // выбор элемента списка
    $scope.onClickItem = elementId => {
      const selectedElem = itemService.getItemById(elementId);
      $scope.onItemSelect({selectedElem});
    };  
  }
}

function getValueDate(val) {
  return val < 10 ? `0${val}` : `${val}`;
}