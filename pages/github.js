import Layout from '../components/Layout'
import Error from './_error'

const Github = ( { user, statusCode } ) => {

    if ( statusCode ) {
        return <Error statusCode={ statusCode}/>
    }
    console.log(user)
    return (
        <Layout footer={ false }>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{ user.name }</h1>
                        <img src={ user.avatar_url} alt="" />
                        <p>{user.bio }</p>
                        <a href={ user.blog} target="_blank" className='btn btn-outline-secondary my-2'>My Blog</a>
                        <a href={ user.html_url} target="_blank" className='btn btn-outline-secondary'>Go to Github</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const resp = await fetch('https://api.github.com/users/ramsesguillen')
    const data = await resp.json()

    const statusCode = resp.status > 200 ? resp.status : false;

    return {
        props: {
            user: data,
            statusCode
        }
    }
}

export default Github
