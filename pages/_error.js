import Layout from '../components/Layout'

const _error = ({ statusCode }) => {
    return (
        <Layout>
            {
                statusCode ?
                    <p className="text-center">Cound not load your page: Status Code { statusCode }</p>
                    :
                    <p className="text-center">Cound not load your page</p>

            }
        </Layout>
    )
}

export default _error