(function(){
 "use strict";

  angular.module('galleryCtrl').controller('GalleryController', ['$state', '$mdDialog',function($state, $mdDialog){
    var vm = this;
    /*Functions*/
    vm.isSelected = isSelected;
    vm.changeSelected = changeSelected;
    vm.changeGallery = changeGallery;
    vm.navSelected = navSelected;

    /*Variables*/
    vm.items = [{
        title: "Engagement Photos - City Tap House",
        credit: true,
        images: [{"id":0, "img":"engagement/CT1.jpg", "title":"Where He Proposed" },
        {"id":1, "img":"engagement/CT2.jpg", "title":"City Tap House" },
        {"id":2, "img":"engagement/CT3.jpg", "title":"City Tap House" },
        {"id":3, "img":"engagement/CT4.jpg", "title":"City Tap House" },
        {"id":4, "img":"engagement/CT5.jpg", "title":"City Tap House" },
        {"id":5, "img":"engagement/CT6.jpg", "title":"City Tap House" },
        {"id":6, "img":"engagement/CT7.jpg", "title":"City Tap House" },
        {"id":7, "img":"engagement/CT8.jpg", "title":"City Tap House" },
        {"id":8, "img":"engagement/CT9.jpg", "title":"City Tap House" },
        {"id":9, "img":"engagement/CT10.jpg", "title":"City Tap House" },
        {"id":10, "img":"engagement/CT11.jpg", "title":"City Tap House" },
        {"id":11, "img":"engagement/CT12.jpg", "title":"City Tap House" },
        {"id":12, "img":"engagement/CT13.jpg", "title":"City Tap House" },
        {"id":13, "img":"engagement/CT14.jpg", "title":"City Tap House" },
        {"id":14, "img":"engagement/CT15.jpg", "title":"City Tap House" },
        {"id":15, "img":"engagement/CT16.jpg", "title":"City Tap House" },
        {"id":16, "img":"engagement/CT17.jpg", "title":"City Tap House" },
        {"id":17, "img":"engagement/CT18.jpg", "title":"City Tap House" },
        {"id":18, "img":"engagement/CT19.jpg", "title":"City Tap House" },
        {"id":19, "img":"engagement/CT20.jpg", "title":"City Tap House" },
        {"id":20, "img":"engagement/CT21.jpg", "title":"City Tap House" },
        {"id":21, "img":"engagement/CT22.jpg", "title":"City Tap House" },
        {"id":22, "img":"engagement/CT23.jpg", "title":"City Tap House" },
        {"id":23, "img":"engagement/CT24.jpg", "title":"City Tap House" },
        {"id":24, "img":"engagement/CT25.jpg", "title":"City Tap House" },
        {"id":25, "img":"engagement/CT26.jpg", "title":"City Tap House" },
        {"id":26, "img":"engagement/CT27.jpg", "title":"City Tap House" },
        {"id":27, "img":"engagement/CT28.jpg", "title":"City Tap House" },
        {"id":28, "img":"engagement/CT29.jpg", "title":"City Tap House" },
        {"id":29, "img":"engagement/CT30.jpg", "title":"City Tap House" },
        {"id":30, "img":"engagement/CT31.jpg", "title":"City Tap House" }]
      },
      {
          title: "Engagement Photos - University of Delaware",
          credit: true,
          images: [{"id":0, "img":"engagement/UD1.jpg", "title":"Where It All Started" },
          {"id":1, "img":"engagement/UD2.jpg", "title":"Univ. of Delaware" },
          {"id":2, "img":"engagement/UD3.jpg", "title":"Univ. of Delaware" },
          {"id":3, "img":"engagement/UD4.jpg", "title":"Univ. of Delaware" },
          {"id":4, "img":"engagement/UD5.jpg", "title":"Univ. of Delaware" },
          {"id":5, "img":"engagement/UD6.jpg", "title":"Univ. of Delaware" },
          {"id":6, "img":"engagement/UD7.jpg", "title":"Univ. of Delaware" },
          {"id":7, "img":"engagement/UD8.jpg", "title":"Univ. of Delaware" },
          {"id":8, "img":"engagement/UD9.jpg", "title":"Univ. of Delaware" },
          {"id":9, "img":"engagement/UD10.jpg", "title":"Univ. of Delaware" },
          {"id":10, "img":"engagement/UD11.jpg", "title":"Univ. of Delaware" },
          {"id":11, "img":"engagement/UD12.jpg", "title":"Univ. of Delaware" },
          {"id":12, "img":"engagement/UD13.jpg", "title":"Univ. of Delaware" },
          {"id":13, "img":"engagement/UD14.jpg", "title":"Univ. of Delaware" },
          {"id":14, "img":"engagement/UD15.jpg", "title":"Univ. of Delaware" },
          {"id":15, "img":"engagement/UD16.jpg", "title":"Univ. of Delaware" }]
        },
      {
          title: "Thru The Years",
          credit: false,
          images: [{"id":0, "img":"theyears/t4.jpg", "title":"UD Kab" },
          {"id":1, "img":"theyears/t0.jpg", "title":"New Years in NY" },
          {"id":2, "img":"theyears/t10.jpg", "title":"Proposal Night" },
          {"id":3, "img":"theyears/t14.jpg", "title":"Valentines Day Masquerade" },
          {"id":4, "img":"theyears/t5.jpg", "title":"Philly Nights" },
          {"id":5, "img":"theyears/t8.jpg", "title":"Marty Mcfly & His Minion" },
          {"id":6, "img":"theyears/t7.jpg", "title":"Masquerade fun" },
          {"id":7, "img":"theyears/t15.jpg", "title":"Grace's 25th" },
          {"id":8, "img":"theyears/t18.jpg", "title":"Dave and Buster Shenanigans" },
          {"id":9, "img":"theyears/t19.jpg", "title":"Kris's 25th" },
          {"id":10, "img":"theyears/t3.jpg", "title":"2010 'Kab'" },
          {"id":11, "img":"theyears/t1.jpg", "title":"Thanksgiving 2016" },
          {"id":12, "img":"theyears/t12.jpg", "title":"Parasailing" },
          {"id":13, "img":"theyears/t13.jpg", "title":"Grace's 21st" },
          {"id":14, "img":"theyears/t6.jpg", "title":"Photobombers" },
          {"id":15, "img":"theyears/t9.jpg", "title":"Cheeeesssee Cake" },
          {"id":16, "img":"theyears/t2.jpg", "title":"Summer days in '11'" },
          {"id":17, "img":"theyears/t17.jpg", "title":"Day Festival out in DE" },
          {"id":18, "img":"theyears/t20.jpg", "title":"Grace's 18th... yikes" }]
        }
    ];

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
