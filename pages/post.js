import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import { posts } from '../profile'


const Post = () => {
    const router = useRouter()

    const filteredPost = posts.find( post => post.title === router.query.title )

    console.log(filteredPost)

    return (
    <Layout>
        <div className="col-md-12">
            {/* <div className="card"> */}
                <div className="overflow">
                    <img src={filteredPost.imageURL} className='img-fluid' />
                </div>
                <div className="card-body">
                    <h1>{ filteredPost.title }</h1>
                    <p>{filteredPost.content}</p>
                </div>
            {/* </div> */}
        </div>
    </Layout>
)}


export default Post