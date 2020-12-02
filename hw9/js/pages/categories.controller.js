(()=>{
    angular.module("MenuApp").controller("CategoriesController",CategoriesController);

    CategoriesController.$inject=["items"];
    function CategoriesController(items)
    {
        this.items=items;
        console.log("category control",items);
    }
})();