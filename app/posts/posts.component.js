"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var post_service_ts_1 = require("./post.service.ts");
var spinner_component_ts_1 = require("./../shared/spinner.component.ts");
var users_service_ts_1 = require("./../users/users.service.ts");
var pagination_component_ts_1 = require("./../shared/pagination.component.ts");
var PostsComponent = (function () {
    function PostsComponent(_postService, _userService) {
        this._postService = _postService;
        this._userService = _userService;
        this.posts = [];
        this.users = [];
        this.pagedPosts = [];
        this.pageSize = 10;
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        this.loadPosts();
    };
    PostsComponent.prototype.loadPosts = function (filter) {
        var _this = this;
        this.postsLoading = true;
        this._postService.getPosts(filter)
            .subscribe(function (posts) {
            _this.posts = posts;
            _this.pagedPosts = _.take(_this.posts, _this.pageSize);
        }, null, function () { _this.postsLoading = false; });
    };
    PostsComponent.prototype.loadUsers = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    PostsComponent.prototype.reloadPosts = function (filter) {
        this.currentPost = null;
        this.loadPosts(filter);
    };
    PostsComponent.prototype.select = function (post) {
        var _this = this;
        this.currentPost = post;
        this.commentsLoading = true;
        this._postService.getComments(post.id)
            .subscribe(function (comments) {
            _this.commentsLoading = false;
            _this.currentPost.comments = comments;
        });
    };
    PostsComponent.prototype.onPageChanged = function (page) {
        var startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
    };
    PostsComponent = __decorate([
        core_1.Component({
            templateUrl: 'posts.component.html',
            providers: [post_service_ts_1.PostService, users_service_ts_1.UsersService],
            directives: [spinner_component_ts_1.SpinnerComponent, pagination_component_ts_1.PaginationComponent]
        })
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map