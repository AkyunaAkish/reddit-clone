angular.module('redditClone', ['angularMoment'])
	.controller('RedditController', ['$scope', function($scope) {
		$scope.articles = [];
		$scope.submit = function() {
			$scope.article = $scope.post;
			$scope.article.timestamp = new Date();
			$scope.article.voteCount = 0;
			$scope.article.upvote = function() {
				this.voteCount += 1
			};
			$scope.article.downvote = function() {
				this.voteCount -= 1
			};
			$scope.post = {};
			$scope.articles.push($scope.article);
		};
		$scope.selection = function(str) {
			$scope.selectedOrder = str;
		};
		$scope.selectedOrder = '-timestamp';
	}])