(()=>{
    angular.module("MenuApp")
    .component("menuApp",{
        templateUrl:"js/menuapp.component.html",
        controller:MenuAppComponent,
        bindings:{

        }
    });

    MenuAppComponent.$inject=[];
    function MenuAppComponent()
    {
        // this.categories=[];

        // this.$onInit=async ()=>{
        //     $q(async (resolve)=>{
        //         resolve(await menuDataService.getAllCategories());
        //     }).then((res)=>{
        //         console.log("got categories",res);
        //         this.categories=res;
        //     });
        // };
    }
})();