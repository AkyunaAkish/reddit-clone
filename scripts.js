angular.module('redditClone', ['angularMoment'])
	.controller('RedditController', function($scope) {
		$scope.articles = [];
		$scope.submit = function() {
			$scope.article = $scope.post;
			$scope.article.isCommentFormVisible = false;
			$scope.article.areCommentsVisible = false;
			$scope.article.timestamp = new Date();
			$scope.article.voteCount = 0;
			$scope.article.commentCount = 0;
			$scope.article.comments = [];
			$scope.article.upvote = function() {
				this.voteCount += 1
			};
			$scope.article.downvote = function() {
				this.voteCount -= 1
			};
			$scope.article.showCommentForm = function() {
				this.isCommentFormVisible = (!this.isCommentFormVisible) ? true : false;
			};
			$scope.article.showComments = function() {
				console.log('show comments hit');
				this.areCommentsVisible = (!this.areCommentsVisible) ? true : false;
			}
			$scope.article.addComment = function(article, author, comment) {
				var Comment =	function(artc, auth, comm) {
					this.article = artc,
					this.author = auth,
					this.comment = comm
				};
				var newComment = new Comment(article, author, comment);

				this.comments.push(newComment);
				this.commentCount = this.comments.length;
				this.isCommentFormVisible = false;
			};
			$scope.post = {};
			$scope.articles.push($scope.article);
		};
		$scope.selection = function(str) {
			$scope.displaySelectedOrder = (str === '-timestamp') ? 'Date' : 'Votes';
			$scope.selectedOrder = str;
		};
		$scope.selectedOrder = '-timestamp';
		$scope.displaySelectedOrder = 'Date';
	})