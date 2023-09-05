import React from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = () => {
    const [post, setPost] = useState({title: '', body: ''});


    return (
        <form>
        <MyInput
          value={post.title} 
          onChange={e => setPost({...post, title: e.target.value})} 
          type="text" 
          placeholder="Post name"
        />
        <MyInput 
          value={post.body} 
          onChange={e => setPost({...post, body: e.target.value})} 
          type="text" 
          placeholder="Description"
        />

        <MyButton onClick={addNewPost}>Add post</MyButton>
      </form>
    )
}

export default PostForm;
