(()=>{
    const app=angular.module("ShoppingListCheckOff",[]);
    app.controller("ToBuyController",ToBuyController);
    app.controller("AlreadyBoughtController",AlreadyBoughtController);
    app.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

    ToBuyController.$inject=["ShoppingListCheckOffService"];
    function ToBuyController(shoppingListService)
    {
        this.buyList=shoppingListService.buyList;
        this.buyItem=shoppingListService.buyItem;
    }

    AlreadyBoughtController.$inject=["ShoppingListCheckOffService"];
    function AlreadyBoughtController(shoppingListService)
    {
        this.boughtList=shoppingListService.boughtList;
    }

    function ShoppingListCheckOffService()
    {
        this.buyList=[
            {
                item:"cookies",
                count:10,
                pricePerItem:2.20
            },
            {
                item:"cookies2",
                count:124,
                pricePerItem:12.20
            },
            {
                item:"cookies3",
                count:1,
                pricePerItem:52.12
            },
            {
                item:"cookies4",
                count:1330,
                pricePerItem:75.60
            },
            {
                item:"cookies5",
                count:561,
                pricePerItem:92.88
            }
        ];

        this.boughtList=[];

        this.buyItem=(item)=>{
            this.buyList.splice(this.buyList.indexOf(item),1);
            this.boughtList.push(item);
        };
    }
})();