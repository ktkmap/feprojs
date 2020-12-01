(()=>{
    angular.module("MenuApp")
    .component("categories",{
        templateUrl:"js/components/categories/categories.component.html",
        controller:CategoriesComponent,
        bindings:{

        }
    });

    CategoriesComponent.$inject=["$q","MenuDataService"];
    function CategoriesComponent($q,menuDataService)
    {
        this.categories=[];

        this.$onInit=async ()=>{
            $q(async (resolve)=>{
                resolve(await menuDataService.getAllCategories());
            }).then((res)=>{
                this.categories=res;
                console.log("got categories",res);
            });
        };
    }
})();