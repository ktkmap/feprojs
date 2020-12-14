(()=>{
    angular.module("public")
    .component("myInfo",{
        templateUrl:"src/public/my-info/my-info.component.html",
        controller:MyInfoComponent,
        bindings:{

        }
    });

    MyInfoComponent.$inject=[];
    function MyInfoComponent()
    {

    }
})();