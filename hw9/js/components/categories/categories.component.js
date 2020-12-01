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
        this.$onInit=()=>{
            console.log("categories init");
            menuDataService.getAllCategories();
        };
    }
})();