(()=>{
    angular.module("public")
    .component("signUp",{
        templateUrl:"src/public/sign-up/sign-up.component.html",
        controller:SignUpComponent,
        bindings:{

        }
    });

    SignUpComponent.$inject=["UserInfoService"];
    function SignUpComponent(userInfoService)
    {
        this.user={};
        this.completed=false;

        this.submitUser=()=>{
            userInfoService.addUser(this.user);
            this.completed=true;
        };
    }
})();