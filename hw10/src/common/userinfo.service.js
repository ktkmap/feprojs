(()=>{
    angular.module("common").service("UserInfoService",UserInfoService);

    UserInfoService.$inject=[];
    function UserInfoService()
    {
        this.registeredUser=null;

        this.addUser=(user)=>{
            console.log("new registered user",user);
            this.registeredUser=user;
        };
    }
})();