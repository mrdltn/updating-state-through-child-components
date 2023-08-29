import {Post} from './Post'


export function Posts (props) {
    // const {id, name, deletePost} = props

    return <div>
            {
                props.posts.map(post => (
                    <Post
                        key={post.id}
                        id={post.id} 
                        name={post.name} 
                        deletePost={props.deletePost} 
                    />
                ))
            }
        </div>
} 