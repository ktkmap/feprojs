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
        this.userLoaded=false;
        this.currentUser=null;

        this.favouriteItemName=null;
        this.favouriteItemImg="";

        this.$onInit=async ()=>{
            if (userInfoService.registeredUser)
            {
                console.log("loading user",userInfoService.registeredUser);
                this.currentUser=userInfoService.registeredUser;
                this.userLoaded=true;

                var favouriteId=userInfoService.registeredUser.favourite;

                this.favouriteItemImg=`https://ktkm-feprojs.herokuapp.com/images/${favouriteId}.jpg`;

                var favouriteItemInfo=await menuService.getMenuItem(favouriteId);
                this.favouriteItemName=favouriteItemInfo.name;
            }
        };
    }
})();