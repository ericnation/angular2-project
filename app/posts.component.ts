import {Component, OnInit} from "angular2/core";
import {PostService} from "./post.service";
import {SpinnerComponent} from "./spinner.component";

@Component({
  templateUrl: 'app/posts.component.html',
  providers: [PostService],
  directives: [SpinnerComponent]
})

export class PostsComponent implements OnInit {
  posts = [];
  postsLoading = true;
  commentsLoading;
  currentPost = null;

  constructor(private _postService: PostService){

  }

  ngOnInit() {
    this._postService.getPosts()
        .subscribe(posts => {
          this.postsLoading = false;
          this.posts = posts;
        });
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