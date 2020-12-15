(()=>{
    angular.module("public")
    .component("myInfo",{
        templateUrl:"src/public/my-info/my-info.component.html",
        controller:MyInfoComponent,
        bindings:{

        }
    });

    MyInfoComponent.$inject=["UserInfoService","MenuService"];
    function MyInfoComponent(userInfoService,menuService)
    {
        this.noRegisteredUser=true;

        this.$onInit=()=>{
            if (userInfoService.registeredUser)
            {
                this.noRegisteredUser=false;
            }

            // TESTING
            menuService.getMenuItem("L16");
        };
    }
})();