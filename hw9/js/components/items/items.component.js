(()=>{
    angular.module("MenuApp")
    .component("items",{
        templateUrl:"js/components/items/items.component.html",
        controller:ItemsComponent,
        bindings:{
            category:"<",
            items:"<"
        }
    });

    ItemsComponent.$inject=[];
    function ItemsComponent()
    {

    }
})();