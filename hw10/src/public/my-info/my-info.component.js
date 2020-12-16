(()=>{
    angular.module("public")
    .component("myInfo",{
        templateUrl:"src/public/my-info/my-info.component.html",
        controller:MyInfoComponent,
        bindings:{

        }
    });

    MyInfoComponent.$inject=["UserInfoService","ApiPath"];
    function MyInfoComponent(userInfoService,apiPath)
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
                this.favouriteItemImg=`${apiPath}/images/${favouriteId}.jpg`;

                this.userLoaded=true;
            }
        };
    }
})();