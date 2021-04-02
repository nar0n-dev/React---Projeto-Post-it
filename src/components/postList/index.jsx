
import { PostCard } from '../postCard';

export const ListPost = ({post}) => (

    <section
        className="posts"
    >
        {post.map(post => (

            <PostCard 
                key={post.id}
                thumbnail={post.thumbnail}
                title={post.title}
                body={post.body}
            />
        
        ))}
     </section>

);
