(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      console.log("got categories",response.data);
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      console.log(`got for category ${category}`,response.data);
      return response.data;
    });
  };

  /** get json for an item, give it shortname of item to get*/
  this.getMenuItem=async (shortname)=>{
    try
    {
      var res=(await $http.get(`${ApiPath}/menu_items/${shortname}.json`)).data;
    }

    catch (e)
    {
      console.log(`failed to get menu item ${shortname}`);
    }

    console.log("got menu item",res);
    return res;
  };

}



})();
