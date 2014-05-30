describe('PhoneListCtrl', function(){
	beforeEach(module('phonecatApp'));//load phonecatApp module before each test
	it('should create "phones" model with 3 phones', inject(function($controller){// inject $controller service into test function
		var scope = {},
		ctrl = $controller('PhoneListCtrl', {$scope: scope});//create instance of PhoneListCtrl

		expect(scope.phones.length).toBe(3);//verify 
	}));
});
