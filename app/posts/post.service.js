"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
require('rxjs/add/operator/map');
var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
        this._url = 'http://jsonplaceholder.typicode.com/posts';
    }
    PostService.prototype.getPosts = function (filter) {
        var url = this._url;
        if (filter && filter.userId) {
            url += '?userId=' + filter.userId;
        }
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getComments = function (postId) {
        return this._http.get(this._url + '/' + postId + '/comments')
            .map(function (res) { return res.json(); });
    };
    PostService = __decorate([
        core_1.Injectable()
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map