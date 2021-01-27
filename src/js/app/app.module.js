angular.module("app", ["templates"])
  .directive("app", appDirective)
  .directive("contentView", contentViewDirective)
  .directive("contentItem", contentItemDirective)
  .directive("filter", filterDirective)
  .directive("sidebarView", sidebarViewDirective)
  .directive("elementsView", elementsViewDirective)
  .directive("summaryView", summaryViewDirective)
  .service('itemService', ItemService);