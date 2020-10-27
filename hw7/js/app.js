(()=>{
    const app=angular.module("ShoppingListCheckOff",[]);
    app.controller("ToBuyController",ToBuyController);
    app.controller("AlreadyBoughtController",AlreadyBoughtController);
    app.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

    ToBuyController.$inject=["ShoppingListCheckOffService"];
    function ToBuyController(shoppingListService)
    {

    }

    AlreadyBoughtController.$inject=["ShoppingListCheckOffService"];
    function AlreadyBoughtController(shoppingListService)
    {
        this.hello=shoppingListService.hey;
    }

    function ShoppingListCheckOffService()
    {
        this.hey=3;
        this.buyList=[
            {
                name:"cookies",
                count:10,
                pricePerItem:2.20
            },
            {
                name:"cookies2",
                count:124,
                pricePerItem:12.20
            },
            {
                name:"cookies3",
                count:1,
                pricePerItem:52.12
            },
            {
                name:"cookies4",
                count:1330,
                pricePerItem:75.60
            },
            {
                name:"cookies5",
                count:561,
                pricePerItem:92.88
            }
        ];
        this.boughtList=[];
    }
})();