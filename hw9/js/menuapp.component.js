(()=>{
    angular.module("MenuApp")
    .component("menuApp",{
        templateUrl:"js/menuapp.component.html",
        controller:MenuAppComponent,
        bindings:{

        }
    });

    MenuAppComponent.$inject=["MenuDataService"];
    function MenuAppComponent(menuDataService)
    {
        // testing
        this.$onInit=async ()=>{
            console.log("all categories",await menuDataService.getAllCategories());
            console.log("all categories",await menuDataService.getItemsForCategory("L"));
        };
    }
})();