import axios from 'axios';

class PostRepository{

    constructor(attr){
        Object.assign(this,attr);
    }

    createPost(post){
        return axios.post('/post',post,{
            withCredentials:true
        });
    }

    createComment(data){
        return axios.post(`/post/${data.postId}/comment`,{
            content:data.content
        },{
            withCredentials:true
        });
    }

    loadMainPosts(){
        return axios.get('/posts');
    }

    loadUserPosts(id){
        return  axios.get(`/user/${id}/posts`);
    }

    loadHashtagMainPosts(tag){
        return axios.get(`/hashtag/${tag}`);
    }

    loadComments(postId){
        return axios.get(`/post/${postId}/comments`);
    }

    uploadImages(formData){
        return axios.post('/post/images',formData,{
            withCredentials:true
        });
    }

    addLike(postId){
        return axios.post(`/post/${postId}/like`,{},{
            withCredentials:true
        });
    }

    removeLike(postId){
        return axios.delete(`/post/${postId}/like`,{
            withCredentials:true
        });
    }

    addRetweet(postId){
        return axios.post(`/post/${postId}/retweet`,{},{
            withCredentials:true,
        });
    }
}

export default new PostRepository();