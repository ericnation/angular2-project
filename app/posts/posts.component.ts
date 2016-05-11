import {Component, OnInit} from "angular2/core";
import {PostService} from "./post.service.ts";
import {SpinnerComponent} from "./../shared/spinner.component.ts";
import {UsersService} from "./../users/users.service.ts";
import {PaginationComponent} from "./../shared/pagination.component.ts";

@Component({
  templateUrl: 'posts.component.html',
  providers: [PostService, UsersService],
  directives: [SpinnerComponent, PaginationComponent]
})

export class PostsComponent implements OnInit {
  posts = [];
  users = [];
  pagedPosts = [];
  postsLoading;
  commentsLoading;
  currentPost;
  pageSize = 10;

  constructor(
      private _postService: PostService,
      private  _userService: UsersService
  ){

  }

  ngOnInit() {
    this.loadUsers();
    this.loadPosts();

  }

  private loadPosts(filter?) {
    this.postsLoading = true;
    this._postService.getPosts(filter)
        .subscribe(posts => {
          this.posts = posts;
          this.pagedPosts = _.take(this.posts, this.pageSize);

        },
        null,
            () => { this.postsLoading = false; });
  }

  private loadUsers() {
    this._userService.getUsers()
        .subscribe(users => this.users = users);
  }

  reloadPosts(filter) {
    this.currentPost = null;

    this.loadPosts(filter);
  }

  select(post) {
    this.currentPost = post;

    this.commentsLoading = true;
    this._postService.getComments(post.id)
        .subscribe(comments => {
          this.commentsLoading = false;
          this.currentPost.comments = comments;
        })
  }

  onPageChanged(page) {
    var startIndex = (page - 1) * this.pageSize;
    this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
  }


}