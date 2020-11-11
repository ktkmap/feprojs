(()=>{
    const app=angular.module("NarrowItDownApp",[]);
    app.controller("NarrowItDownController",NarrowItDownController);
    app.service("MenuSearchService",MenuSearchService);
    app.directive("foundItems",FoundItemsComponent);

    NarrowItDownController.$inject=["MenuSearchService"];
    function NarrowItDownController(menuSearchService)
    {
        this.found=[];
        this.found2=[1,2,3];
        this.searchTerm="";

        this.searchItems=()=>{
            // this.found=await menuSearchService.getMatchedMenuItems(this.searchTerm);
            // console.log(this.found);
        };
    }

    MenuSearchService.$inject=["$http"];
    function MenuSearchService($http)
    {
        // get items from menu api that match the search
        // getMatchedMenuItems(searchTerm:string):MenuItem[]
        this.getMatchedMenuItems=async (searchTerm)=>{
            var menuItems=(await $http({
                url:"https://davids-restaurant.herokuapp.com/menu_items.json"
            })).data.menu_items;

            searchTerm=searchTerm.toLowerCase();

            console.log("all items",menuItems);

            var res=menuItems.filter((x)=>{
                return x.description.indexOf(searchTerm)>=0;
            });

            console.log("matched items",res);
            return res;
        };
    }

    function FoundItemsComponent()
    {
        return {
            templateUrl:"js/found-items.component.html",
            restrict:"E",
            scope:{
                items:"=foundItems"
            }
        };
    }
})();