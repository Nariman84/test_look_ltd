function sidebarViewDirective() {

  return {
    scope: {
      selectedItem: "=",
      onItemTagsChanged: "&"
    },
    restrict: "E",
    templateUrl: "./js/app/sidebar-view/sidebar-view.tpl.html",
    controller: ["$scope", "itemService", sidebarViewCtrl],
  };

  function sidebarViewCtrl($scope, itemService) {

    // добавление нового тега
    $scope.addNewTag = () => {
      const item = $scope.selectedItem;
      const tagName = $scope.tagName;

      if (tagName && tagName.trim()) {
        itemService.addTagToItem(item.id, tagName);
        $scope.tagName = '';
        $scope.onItemTagsChanged();
      }
    };

    // удаление тега
    $scope.removeTagAt = tagIdx => {
      const item = $scope.selectedItem;
      itemService.removeTagAt(item.id, tagIdx);
      $scope.onItemTagsChanged();
    };
  }
}