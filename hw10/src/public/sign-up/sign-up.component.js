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
        this.username="";

        this.$onChanges=()=>{
            console.log(this.username);
        };
    }
})();