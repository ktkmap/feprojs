(()=>{
    const app=angular.module("LunchCheck",[]);
    app.controller("LunchCheckController",LunchCheckController);

    LunchCheckController.$inject=["$scope"];
    function LunchCheckController($scope)
    {
        $scope.lunchInputValue="";
        $scope.lunchMessage="";
        $scope.status=null; //null,error,success

        $scope.buttonClick=buttonClick;

        function buttonClick()
        {
            var numLunch=$scope.lunchInputValue.split(",").filter((x)=>{
                return x.trim().length;
            });
            console.log(numLunch);

            numLunch=numLunch.length;

            if (!numLunch)
            {
                $scope.lunchMessage="Please enter data first";
                $scope.status="error";
            }

            else if (numLunch<=3)
            {
                $scope.lunchMessage="Enjoy!";
                $scope.status="success";
            }

            else
            {
                $scope.lunchMessage="Too much!";
                $scope.status="success";
            }
        }
    }
})();