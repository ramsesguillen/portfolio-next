import Layout from '../components/Layout'
import { skills, expiriences, projects } from '../profile'
import Link  from 'next/link'


const Index = () => {
    return (
        <Layout>
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-secondary">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="profile.jpeg" alt=""  className="img-fluid"/>
                            </div>
                            <div className="col-md-8 text-light">
                                <h1 className="fw-normal">Esmeralda Arista</h1>
                                <h3 className="fw-lighter">FullStack Developer</h3>
                                <p className="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptates praesentium placeat blanditiis tempore doloribus incidunt odit debitis! Eligendi ipsa earum facilis eaque voluptatem enim maxime dolor sint? Modi, tenetur?</p>
                                <a href="/hireme">Hire me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row py-2">
                <div className="col-md-4">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Skills</h1>

                            {
                                skills.map( skill => (
                                    <div className='py-3' key={ skill.id }>
                                        <h5>{skill.skill}</h5>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{  width: `${skill.percentage}%` }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Expririence</h1>

                            <ul>
                                {
                                    expiriences.map( expirience => (
                                        <li key={ expirience.id}>
                                            <h3>{ expirience.title }</h3>
                                            <h5>{ expirience.from}-{ expirience.to}</h5>
                                            <p>{ expirience.descripcion}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                            <Link href="/expiriences">
                                <a className='btn btn-ligh'>Know more</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center text-light">Portfolio</h1>
                            </div>
                                {
                                    projects.map( project => (
                                        <div className="col-md-4 p-2" key={project.id}>
                                            <div className="card h-100">
                                                <div className="overflow">
                                                    <img src={ project.image} alt="" className='card-img-top' />
                                                </div>
                                                <div className='card-body'>
                                                    <h3>{project.title}</h3>
                                                    <p>{project.description}</p>
                                                    <a href="">Know more</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="text-center py-4">
                                    <Link href="/portfolio">
                                        <a className='btn btn-outline-light' href="">More projects</a>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Index
