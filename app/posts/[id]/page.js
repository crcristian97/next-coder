const getPostsId = async (postId = '') => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
}

const PostById = async ({params = {}}) => {
    const post = await getPostsId(params.id);
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default PostById;