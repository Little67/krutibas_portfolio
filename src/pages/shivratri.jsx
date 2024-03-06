import React, { useEffect } from 'react'
import SEO from '../data/seo';
import { Helmet } from 'react-helmet';
import INFO from "../data/user";
import NavBar from '../components/common/navBar';
import Logo from '../components/common/logo';
import Footer from '../components/common/footer';
import { Link, useNavigate } from 'react-router-dom';

const Shivratri = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const currentSEO = SEO.find((item) => item.page === "invitations");
    const navigate = useNavigate();

    const coordinators = [
        {
            name: "Krutibas Dwibedi",
            image: "../krutibas_.png",
            title: "",
            link: "https://www.instagram.com/krutibasdwibedi",
        },
        {
            name: "Satyanarayan Dalei",
            image: "https://media.licdn.com/dms/image/C4D03AQHbumNxTiwY9A/profile-displayphoto-shrink_400_400/0/1626777692393?e=1715212800&v=beta&t=FnTk7ATHsKlwOZFOBYjgMDe3uOVDCY5wowZGmHTW8as",
            title: "",
            link: "https://www.linkedin.com/in/satyadalei/",
        },
    ]

    const volunteers = []

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
                                <span className='text-sky-500 font-bold' >Happy Maha Shivatri!</span> 
                                We are happy to invite you to the distribution dahi pana on the eve of holy Maha Shivratri at IGIT temple. This is not an official event rather some of the students are organizing it. We have planned to provide nearly 800 - 1000 glass of dahi panas. We will auspciously wait your presence. 
                                {/* If any one left please do not mind. */}
                                We would also like to give our sincere thanks to students like you who have contributed by providing any amount financial assistance. If you want offer your helping hand you can so by contacting 8763339816, 8327716305, 8144573354 
                                {/* or by proving some financial assistance by clicking on the below button. <br /> */}

                                {/* <Link to={"/donate"} className='bg-sky-500 p-1 border border-2-gray rounded-lg text-white mt-5' >Donate us</Link> */}
                                {/* <span className='hidden md:block' >
                                  
                                </span> */}
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
                            <div className="md:w-[45%] rounded-sm h-80 md:h-auto"
                                style={{
                                    backgroundImage: `url('../invitationa_maha_shiva_ratri.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                            </div>
                            <p className='leading-relaxed md:w-[49%] mb-5 md:mr-3 md:leading-8 text-lg text-justify' >
                                <ul>
                                    <li>Date : 8th March 2024</li>
                                    <li>Time : 09:00 AM</li>
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
                                    return (<a href={coordinator.link} target='_blank' rel="noreferrer" className='w-16 h-16 bg-red-400 rounded-full m-1 flex justify-center items-center overflow-hidden cursor-pointer' >
                                        <img src={coordinator.image} alt="profile"  />
                                    </a>)
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