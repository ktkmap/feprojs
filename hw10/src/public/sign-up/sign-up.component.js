(()=>{
    angular.module("public")
    .component("signUp",{
        templateUrl:"src/public/sign-up/sign-up.component.html",
        controller:SignUpComponent,
        bindings:{

        }
    });

    SignUpComponent.$inject=["UserInfoService","MenuService"];
    function SignUpComponent(userInfoService,menuService)
    {
        this.user={};
        this.completed=false;

        this.favouriteInvalid=false;

        this.submitUser=async ()=>{
            this.user.favouriteInfo=await menuService.getMenuItem(this.user.favourite);
            userInfoService.addUser(this.user);
            this.completed=true;
        };

        this.favouriteBlur=async ()=>{
            var favouriteRes=await menuService.getMenuItem(this.user.favourite);

            if (!favouriteRes)
            {
                this.favouriteInvalid=true;
            }

            else
            {
                this.favouriteInvalid=false;
            }
        };
    }
})();