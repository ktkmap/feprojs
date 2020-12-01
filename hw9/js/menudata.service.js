(()=>{
    angular.module("data").service("MenuDataService",MenuDataService);

    MenuDataService.$inject=["$http"];
    function MenuDataService($http)
    {
        this.getAllCategories=async ()=>{
            console.log("getting all categories");

            return (await $http({
                url:"https://davids-restaurant.herokuapp.com/categories.json"
            })).data;
        };

        this.getItemsForCategory=async (categoryShortName)=>{
            console.log(`getting for category ${categoryShortName}`);

            return (await $http({
                url:`https://davids-restaurant.herokuapp.com/menu_items.json?category=${categoryShortName}`
            })).data;
        };
    }
})();