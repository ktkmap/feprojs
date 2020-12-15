(()=>{
    angular.module("public")
    .component("myInfo",{
        templateUrl:"src/public/my-info/my-info.component.html",
        controller:MyInfoComponent,
        bindings:{

        }
    });

    MyInfoComponent.$inject=["UserInfoService"];
    function MyInfoComponent(userInfoService)
    {
        this.userLoaded=false;
        this.currentUser=null;

        this.favouriteItemImg="";

        this.$onInit=async ()=>{
            if (userInfoService.registeredUser)
            {
                console.log("loading user",userInfoService.registeredUser);
                this.currentUser=userInfoService.registeredUser;

                var favouriteId=userInfoService.registeredUser.favourite;
                this.favouriteItemImg=`https://ktkm-feprojs.herokuapp.com/images/${favouriteId}.jpg`;

                this.userLoaded=true;
            }
        };
    }
})();