"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var post_service_1 = require("./post.service");
var spinner_component_1 = require("./spinner.component");
var users_service_1 = require("./users.service");
var PostsComponent = (function () {
    function PostsComponent(_postService, _userService) {
        this._postService = _postService;
        this._userService = _userService;
        this.posts = [];
        this.users = [];
        this.currentPost = null;
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
            _this.postsLoading = false;
            _this.posts = posts;
        });
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
    PostsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/posts.component.html',
            providers: [post_service_1.PostService, users_service_1.UsersService],
            directives: [spinner_component_1.SpinnerComponent]
        })
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map