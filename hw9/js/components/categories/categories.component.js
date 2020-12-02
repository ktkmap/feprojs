(()=>{
    angular.module("MenuApp")
    .component("categories",{
        templateUrl:"js/components/categories/categories.component.html",
        controller:CategoriesComponent,
        bindings:{
            items:"<"
        }
    });

    CategoriesComponent.$inject=[];
    function CategoriesComponent()
    {

    }
})();