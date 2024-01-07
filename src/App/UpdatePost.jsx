import AppInput from "../components/atoms/Input";
import AppLabel from "../components/atoms/Label";
import AppButton from "../components/atoms/Button";

import "../css/forms.css";
import AppTextArea from "../components/atoms/TextArea";
import { useRouteLoaderData } from "react-router-dom";

function UpdatePost() {
  const data = useRouteLoaderData('post');
  const post = data.post;

  return (
    <main>
      <h1>Update post</h1>
      <form action="/posts/<%= post.post_id %>/edit" method="POST">
        <div className="form-control">
          <AppLabel htmlFor="title">
            Title
          </AppLabel>
          <AppInput
            type="text"
            id="title"
            defaultValue={post ? post.title : ''}
            name="title"
            required
          />
        </div>
        <div className="form-control">
          <AppLabel htmlFor="summary">
            Summary
          </AppLabel>
          <AppInput
            type="text"
            id="summary"
            defaultValue={post ? post.summary : ''}
            name="summary"
            maxLength="255"
            required
          />
        </div>
        <div className="form-control">
          <AppLabel htmlFor="content">
            Post Content
          </AppLabel>
          <AppTextArea id="content" name="content" required rows="5">
          {post ? post.content : ''}
          </AppTextArea>
        </div>
        <AppButton>
          Update Post
        </AppButton>
      </form>
    </main>
  );
}

export default UpdatePost;
