function contentItemDirective() {
  return {
    scope: {
      selectedItem: "=",
      item: "=",
      isShowDateOnly: "=",
      onSelectItem: "&"
    },
    restrict: "E",
    templateUrl: "./js/app/content-view/content-item/content-item.tpl.html",
    controller: ["$scope", "itemService", contentItemCtrl]
  };

  function contentItemCtrl($scope, itemService) {

    // вывод даты в нужном формате (со временем или без)
    $scope.getDate = createdDate => {
      const d = new Date(createdDate);

      const year = d.getFullYear();
      const date = d.getDate();
      const month = d.getMonth() + 1;
      const hours = d.getHours();
      const minutes = d.getMinutes();

      const dateWithoutTime = `${padTwoDigits(date)}.${padTwoDigits(month)}.${year}`;

      if ($scope.isShowDateOnly) {
        return dateWithoutTime;
      }

      return `${dateWithoutTime} ${padTwoDigits(hours)}:${padTwoDigits(minutes)}`;
    };

    // выбор элемента списка
    $scope.onClickItem = elementId => {
      const selectedElem = itemService.getItemById(elementId);
      $scope.onSelectItem({selectedElem});
    };  
  }
}

function padTwoDigits(value) {
  return `${value}`.padStart(2, "0");
}