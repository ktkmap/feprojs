(()=>{
    angular.module("public")
    .component("signUp",{
        templateUrl:"src/public/sign-up/sign-up.component.html",
        controller:SignUpComponent,
        bindings:{

        }
    });

    SignUpComponent.$inject=[];
    function SignUpComponent()
    {
        this.user={};

        this.submitUser=()=>{
            console.log(this.user);
        };
    }
})();