/* App Controllers */
//PhoneCatCtrl.$inject = ['$route'];
function PhoneCatCtrl($route) {
  var self = this;

  $route.when('/home',
              {template: 'partials/home.html',   controller: HomeCtrl});
  $route.when('/phones',
              {template: 'partials/phone-list.html',   controller: PhoneListCtrl});
  $route.when('/phones/:phoneId',
              {template: 'partials/phone-detail.html', controller: PhoneDetailCtrl});
  $route.otherwise({redirectTo: '/home'});

  $route.onChange(function(){
    self.params = $route.current.params;
  });

  $route.parent(this);
}

//HomeCtrl
function HomeCtrl() {
  var self = this;
}

//PhoneListCtrl.$inject = ['Phone'];
function PhoneListCtrl(Phone_) {
  this.orderProp = 'age';
  this.phones = Phone_.query();
}

//PhoneDetailCtrl.$inject = ['Phone'];
function PhoneDetailCtrl(Phone_) {
  var self = this;

  self.phone = Phone_.get({phoneId: self.params.phoneId}, function(phone) {
    self.mainImageUrl = phone.images[0];
  });

  self.setImage = function(imageUrl) {
    self.mainImageUrl = imageUrl;
  }
}

