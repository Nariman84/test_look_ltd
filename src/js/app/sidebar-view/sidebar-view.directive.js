function sidebarViewDirective() {

  return {
    scope: {
      selectedItem: "=",
      updateTagsInSummary: "&"
    },
    restrict: "E",
    templateUrl: "./js/app/sidebar-view/sidebar-view.tpl.html",
    controller: ["$scope", "$element", "itemService", sidebarViewCtrl],
  };

  function sidebarViewCtrl($scope, $element, itemService) {
    
    // добавление нового тега
    $scope.addNewTag = () => {
      const tagName = $scope.tagName;
      
      if (tagName && tagName.trim()) {
        itemService.addTagToItem(tagName);
        $scope.tagName = '';
      }
    };

    // удаление тега
    $scope.removeTag = tagIdx => {
      itemService.removeTag(tagIdx);
    };
  }
}