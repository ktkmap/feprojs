(()=>{
    angular.module("data").service("MenuDataService",MenuDataService);

    MenuDataService.$inject=[];
    function MenuDataService()
    {
        this.getAllCategories=()=>{
            console.log("asdasd");
        };

        this.getItemsForCategory=(categoryShortName)=>{

        };
    }
})();