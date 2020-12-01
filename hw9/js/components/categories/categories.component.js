(()=>{
    angular.module("MenuApp")
    .component("categories",{
        templateUrl:"js/components/categories/categories.component.html",
        controller:CategoriesComponent,
        bindings:{

        }
    });

    CategoriesComponent.$inject=["MenuDataService"];
    function CategoriesComponent(menuDataService)
    {
        this.$onInit=async ()=>{
            console.log("categories init");
            console.log(await menuDataService.getAllCategories());
            console.log(await menuDataService.getItemsForCategory("L"));
        };
    }
})();