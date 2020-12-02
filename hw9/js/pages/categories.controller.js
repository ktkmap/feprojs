(()=>{
    angular.module("MenuApp").controller("CategoriesController",CategoriesController);

    CategoriesController.$inject=["items"];
    function CategoriesController(items)
    {
        console.log("category control",items);
        this.items=items;
    }
})();