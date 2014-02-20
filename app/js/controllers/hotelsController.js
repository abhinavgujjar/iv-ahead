myApp.controller('MyCtrl1', function($scope) {

	$scope.updaVote = function (hotel){
		hotel.rating++;
	};

	$scope.hotels = [
	{
		name : 'Lalit Ashok',
		location : '<i>Delhi</i><script>alert("BOO");</script>',
		rating: 5,
		image: 'img/ashok.jpg',
		dailyRate: 500,
		amenities: {
			wifi: true,
			swimming: true,
			sauna: false
		},
		reviews: [{
			author: 'abhinav',
			comment: 'good one'
		}]
	},
	{
		name: 'Hyatt Regency',
		lcoation: 'Mumbai',
		rating: 10,
		dailyRate: 350,
		image: 'img/hyatt.jpg'
	},
	{
		name: 'Taj Residency',
		location: 'New Delhi',
		rating : 3,
		dailyRate: 350,
		image: 'img/taj.jpg'
	},
	{
		name: 'Country Inn',
		lcoation: 'Dubai',
		rating: 7,
		dailyRate: 350,
		image: 'img/countryinn.jpg'
	},
	{
		name: 'Royal Orchid',
		lcoation: 'Bangalore',
		rating: 2,
		dailyRate: 350,
		image: 'img/royalorchid.jpg'
	},
	{
		name: 'Radisson',
		lcoation: 'Mumbai',
		rating: 3,
		dailyRate: 350,
		image: 'img/radisson.jpg'
	}
	]
}
);