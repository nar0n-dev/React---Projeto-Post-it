import './styles.css'

export const PostCard = ({ thumbnail, title, body }) =>(
    <div className="post">
        <img src={thumbnail} className="post-thumbnail" alt="logo" />
        <div className="post-title">
            {title}
        </div>
        <p>
            {body}
        </p>
    </div>
)
