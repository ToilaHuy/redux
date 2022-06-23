import PostAuthors from './PostAuthors';
import TimeAgo from './TimeAgo';
import ReactionBtn from './ReactionBtn';

const PostsExcerpt = ({ post }) => {
    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthors userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionBtn post={post} />
        </article>
    );
};

export default PostsExcerpt;
