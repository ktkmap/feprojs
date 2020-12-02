(()=>{
    angular.module("MenuApp").controller("ItemsController",ItemsController);

    ItemsController.$inject=["items"];
    function ItemsController(items)
    {
        console.log("items controller got items",items);
        this.items=items;
    }
})();