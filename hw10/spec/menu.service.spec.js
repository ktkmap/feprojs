describe("menu",()=>{
    var menuService;
    var $httpBackend;
    var apiPath;

    beforeEach(()=>{
        module("common");

        inject(($injector)=>{
            menuService=$injector.get("MenuService");
            $httpBackend=$injector.get("$httpBackend");
            apiPath=$injector.get("ApiPath");
        });
    });

    it("should return correct menu item info",async ()=>{
        $httpBackend.whenGET(`${apiPath}/menu_items/A4.json`).respond("hello");
        menuService.getMenuItemNoAsync("A4").then((res)=>{
            expect(res.data).toEqual("hello");
        });
        $httpBackend.flush();
    });
});