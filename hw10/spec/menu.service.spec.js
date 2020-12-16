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

            console.log("api path",apiPath);
        });
    });

    it("should return correct menu item",()=>{
        $httpBackend.whenGET(apiPath + '/categories.json').respond(['Lunch', 'Dessert']);
        menucategories.getCategories().then(function(response) {
          expect(response.data).toEqual(['Lunch', 'Dessert']);
        });
        $httpBackend.flush();
    });
});