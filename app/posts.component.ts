import {Component, OnInit} from "angular2/core";
import {PostService} from "./post.service";
import {SpinnerComponent} from "./spinner.component";
import {UsersService} from "./users.service";

@Component({
  templateUrl: 'app/posts.component.html',
  providers: [PostService, UsersService],
  directives: [SpinnerComponent]
})

export class PostsComponent implements OnInit {
  posts = [];
  users = [];
  postsLoading;
  commentsLoading;
  currentPost = null;

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
          this.postsLoading = false;
          this.posts = posts;
        });
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
}