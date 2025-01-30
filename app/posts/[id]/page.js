
const getPostsId = async (postId = '') => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!res.ok) {
        throw new Error('Failed to fetch post');
    }
    return res.json();
};

export async function getStaticProps({ params }) {
    const post = await getPostsId(params.id);
    return {
        props: {
            post,
        },
        revalidate: 60,  
    };
}

export async function getStaticPaths() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await posts.json();

    const paths = data.map(post => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: 'blocking' }; 
}

const PostById = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default PostById;
