(()=>{
    const app=angular.module("NarrowItDownApp",[]);
    app.controller("NarrowItDownController",NarrowItDownController);
    app.service("MenuSearchService",MenuSearchService);
    app.directive("foundItems",FoundItemsComponent);

    NarrowItDownController.$inject=["$q","MenuSearchService"];
    function NarrowItDownController($q,menuSearchService)
    {
        this.found=[];
        this.searchTerm="";
        this.firstSearch=false;

        this.searchItems=()=>{
            $q(async (resolve)=>{
                resolve(await menuSearchService.getMatchedMenuItems(this.searchTerm));
            }).then((res)=>{
                this.found=res;
                this.firstSearch=true;
            });
        };

        this.removeItem=(itemIndex)=>{
            console.log("removing",itemIndex);
            this.found=this.found.filter((x)=>{
                return x.id!=itemIndex;
            });
        };
    }

    MenuSearchService.$inject=["$http"];
    function MenuSearchService($http)
    {
        // get items from menu api that match the search
        // async getMatchedMenuItems(searchTerm:string):Promise<MenuItem[]>
        this.getMatchedMenuItems=async (searchTerm)=>{
            if (!searchTerm.length)
            {
                return [];
            }

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
                items:"<foundItems",
                doRemove:"&onRemove",
                firstSearch:"<"
            }
        };
    }
})();