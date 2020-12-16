describe("menu",()=>{
    var menuService;
    var $httpBackend;
    var apiPath;

    const testItems=["A4","C11","DS1"];

    beforeEach(()=>{
        module("common");

        inject(($injector)=>{
            menuService=$injector.get("MenuService");
            $httpBackend=$injector.get("$httpBackend");
            apiPath=$injector.get("ApiPath");
        });
    });

    it("should return correct menu item info",async ()=>{
        // $httpBackend.whenGET(`${apiPath}/menu_items/A4.json`).respond("hello");
        menuService.getMenuItem("A4").then((res)=>{
            console.log(res);
        });
    });
});