(()=>{
    const app=angular.module("NarrowItDownApp",[]);
    app.controller("NarrowItDownController",NarrowItDownController);
    app.service("MenuSearchService",MenuSearchService);

    NarrowItDownController.$inject=["MenuSearchService"];
    function NarrowItDownController(menuSearchService)
    {
        menuSearchService.getMatchedMenuItems();
    }

    MenuSearchService.$inject=["$http"];
    function MenuSearchService($http)
    {
        this.getMatchedMenuItems=async (searchTerm)=>{
            console.log("hey");
            console.log((await $http({
                url:"https://davids-restaurant.herokuapp.com/menu_items.json"
            })).data);
        };
    }
})();