import React, { useEffect } from 'react'
import SEO from '../data/seo';
import { Helmet } from 'react-helmet';
import INFO from "../data/user";
import NavBar from '../components/common/navBar';
import Logo from '../components/common/logo';
import Footer from '../components/common/footer';

const Shivratri = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const currentSEO = SEO.find((item) => item.page === "invitations");

    const coordinators = [
        {
            name: "Krutibas Dwibedi",
            image: "https://avatars.githubusercontent.com/u/43999999?v=4",
            title: "Director of Digital Marketing",
            link: "",
        },
        {
            name: "Krutibas Dwibedi",
            image: "https://avatars.githubusercontent.com/u/43999999?v=4",
            title: "Director of Digital Marketing",
            link: "",
        },
        {
            name: "Krutibas Dwibedi",
            image: "https://avatars.githubusercontent.com/u/43999999?v=4",
            title: "Director of Digital Marketing",
            link: "",
        },
    ]

    const volunteers = [
        {
            name: "Krutibas Dwibedi",
            image: "https://avatars.githubusercontent.com/u/43999999?v=4",
            title: "Director of Digital Marketing",
            link: "",
        },
        {
            name: "Krutibas Dwibedi",
            image: "https://avatars.githubusercontent.com/u/43999999?v=4",
            title: "Director of Digital Marketing",
            link: "",
        },
        {
            name: "Krutibas Dwibedi",
            image: "https://avatars.githubusercontent.com/u/43999999?v=4",
            title: "Director of Digital Marketing",
            link: "",
        },
        {
            name: "Krutibas Dwibedi",
            image: "https://avatars.githubusercontent.com/u/43999999?v=4",
            title: "Director of Digital Marketing",
            link: "",
        },
        {
            name: "Krutibas Dwibedi",
            image: "https://avatars.githubusercontent.com/u/43999999?v=4",
            title: "Director of Digital Marketing",
            link: "",
        },
        {
            name: "Krutibas Dwibedi",
            image: "https://avatars.githubusercontent.com/u/43999999?v=4",
            title: "Director of Digital Marketing",
            link: "",
        },
        {
            name: "Krutibas Dwibedi",
            image: "https://avatars.githubusercontent.com/u/43999999?v=4",
            title: "Director of Digital Marketing",
            link: "",
        },
    ]

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Invitations | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>
            <div className="page-content">
                <NavBar active="/invitations/shivratri" />
                <div className="content-wrapper">
                    <div className="projects-logo-container">
                        <div className="projects-logo">
                            <Logo width={46} link={true} />
                        </div>
                    </div>
                    <div className="projects-container">
                        <h1 className="title mb-3 md:mb-5" >
                            Invitation to all <span className='text-sky-500'>IGIT</span> students!
                        </h1>
                        {/* --- ABOUT SECTION --- */}
                        <div className='flex flex-col md:flex-row min-h-72 justify-between' >
                            <p className='leading-relaxed md:w-[49%] mb-5 md:mr-3 md:leading-8 text-lg text-justify' >
                                <span className='text-sky-500 font-bold' >Happy Maha Shivatri !</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nulla rerum numquam, quis nam nihil ipsa molestias dolorem velit voluptatum eveniet deleniti, at assumenda? Delectus, doloribus laborum? Harum asperiores veniam neque voluptate sint ad doloribus architecto dolorem hic voluptatem debitis repellat nostrum in obcaecati ipsa, vitae optio ullam! Voluptatem, quae.
                                <span className='hidden md:block' >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus minus veniam illum consequatur nisi modi dolorum possimus, nostrum eum iusto est nihil debitis tenetur voluptate aliquam vel. Optio, magnam.
                                </span>
                            </p>
                            <div className="md:w-[45%] rounded-lg h-72 md:h-auto"
                                style={{
                                    backgroundImage: `url(https://images.pexels.com/photos/7104962/pexels-photo-7104962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                            </div>
                        </div>
                        {/* --- EVENT DETAILS --- */}
                        <h1 className='title text-2xl mt-5 mb-3 md:mb-5 w-full' >Event details</h1>
                        <div className='flex md:flex-row min-h-96 justify-between flex-col-reverse ' >
                            <div className="md:w-[45%] rounded-lg h-80 md:h-auto"
                                style={{
                                    backgroundImage: `url(https://images.pexels.com/photos/7104962/pexels-photo-7104962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                            </div>
                            <p className='leading-relaxed md:w-[49%] mb-5 md:mr-3 md:leading-8 text-lg text-justify' >
                                <ul>
                                    <li>Date : 8th March 2024</li>
                                    <li>Time : 12:30 PM</li>
                                    <li>Place : IGIT college Temple </li>
                                </ul>
                            </p>
                        </div>
                        {/* --- COORDINATES --- */}
                        <div>
                            <h1 className='mt-5 mb-3 text-black title' style={{
                                fontSize: "40px",
                                fontWeight: "900",
                            }} >Coordinators</h1>
                            <div className='flex flex-wrap' >
                                {coordinators.map((coordinator) => {
                                    return (<div className='w-16 h-16 bg-red-400 rounded-full m-1' >
                                    </div>)
                                })}
                            </div>

                            <h1 className='mt-5 mb-3 text-black title' style={{
                                fontSize: "40px",
                                fontWeight: "900",
                            }} >Volunteers</h1>
                             <div className='flex flex-wrap' >
                                {volunteers.map((volunteer) => {
                                    return (<div className='w-16 h-16 bg-red-400 rounded-full m-1' >
                                    </div>)
                                })}
                            </div>

                        </div>
                    </div>
                    <div className="page-footer">
                       <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Shivratri