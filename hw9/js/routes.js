(()=>{
    angular.module("MenuApp").config(Router);

    Router.$inject=["$stateProvider","$urlRouterProvider"];
    function Router($stateProvider,$urlRouterProvider)
    {
        $urlRouterProvider.otherwise("/");

        $stateProvider.state("home",{
            url:"/",
            templateUrl:"js/pages/home.html"
        })
        .state("categories",{
            url:"/categories/",
            templateUrl:"js/pages/categories.html",
            controller:"CategoriesController as categoriesCtrl",
            resolve:{
                items:["MenuDataService",(menuDataService)=>{
                    return menuDataService.getAllCategories();
                }]
            }
        })
        .state("items",{
            url:"/categories/{categoryShortName}",
            templateUrl:"js/pages/items.html",
            controller:"ItemsController as itemsCtrl",
            resolve:{
                items:["MenuDataService","$stateParams",(menuDataService,$stateParams)=>{
                    return menuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
            }
        });
    }
})();