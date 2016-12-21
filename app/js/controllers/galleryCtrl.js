(function(){
 "use strict";

  angular.module('galleryCtrl').controller('GalleryController', ['$state', '$mdDialog', 'jInfo', function($state, $mdDialog, jInfo){
    var vm = this;
    /*Functions*/
    vm.isSelected = isSelected;
    vm.changeSelected = changeSelected;
    vm.changeGallery = changeGallery;
    vm.navSelected = navSelected;

    /*Variables*/
    vm.items = jInfo.photos.engagement.type("all");
    

    vm.displayItems = vm.items[0].images;
    vm.displayCredit = true;
    vm.selectedid = vm.displayItems[0].id;
    var selectedImg = "";
    var selectedTitle = "";

    function isSelected(id)
    {
      return (id == vm.selectedid ? "selected" : "");
    }

    function changeSelected(item, ev, double)
    {
      if(double == true && (vm.selectedid == item.id)){
        // Open Dialog
        selectedImg = item.img;
        selectedTitle = item.title;
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'views/templates/_galleryPop.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: true
        });
      }
      else {
        vm.selectedid = item.id;
      }
    }
    function DialogController($scope, $mdDialog)
    {
      $scope.img = selectedImg;
      $scope.title = selectedTitle;
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };
    }

    function navSelected(item) {
      return (item.images == vm.displayItems ? "selected" : "");
    }
    function changeGallery(item){
      if(navSelected(item) == ""){
        vm.selectedid = 0;
        vm.displayItems = item.images;
        vm.displayCredit = item.credit;
      }
    }
  }]);

})();
