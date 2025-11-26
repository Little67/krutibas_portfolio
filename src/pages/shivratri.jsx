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
            name: "Alok",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2FWhatsApp%20Image%202024-03-06%20at%201.43.47%20PM.jpeg?alt=media&token=6b2a82e6-48ab-4162-a37b-cce9cec00b1f",
            title: "",
            link: "",
        },
        {
            name: "Satyanarayan Dalei",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2Fsatya.jpg?alt=media&token=938694ed-fdc3-4c7b-9c47-8ccc53c143dc",
            title: "",
            link: "https://www.linkedin.com/in/satyadalei/",
        },
        {
            name: "Abinash Kaler",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2Fbb1c34e5-2370-4fc1-a1e8-34f762d2ee3a.jpg?alt=media&token=a8b8aa5b-93dc-4fbd-b05b-ac405641dd4c",
            title: "",
            link: "https://www.instagram.com/abinash_kaler?igsh=MXh6ZGx3MzVvN2Q4bQ==",
        },
        {
            name: "Nityanarayan Nanda",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2FNityanarayan%20Nanda.jpg?alt=media&token=7dffc465-b077-4aff-9631-42a5719930cb",
            title: "",
            link: "",
        },
    ]

    const volunteers = [
        {
            name: "Anup",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2FAnup.jpg?alt=media&token=068094eb-20ba-4009-a9f6-1967a379bcfc",
            title: "",
            link: "",
        },
        {
            name: "Rudra Partap",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2FRudra%20Partap.jpg?alt=media&token=8f5f3497-7fb5-4863-bd9d-c435b08dbd5e",
            title: "",
            link: "https://www.instagram.com/_.rudra_p._?utm_source=qr&igsh=ZWR0NzZ0aXRxYTIz",
        },
        {
            name: "Pritam",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2Fpritam.jpg?alt=media&token=0b8a879e-117b-4875-a61e-20c3321f3708",
            title: "",
            link: "",
        },
        {
            name: "Abhishek Panda",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2Fishan.jpg?alt=media&token=79527c23-eb4c-41a9-8886-93cc755de3cf",
            title: "",
            link: "https://www.instagram.com/i_s_h_a_n_17/",
        },
        {
            name: "Swayambhu Mishra",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2Fswambhu.jpg?alt=media&token=1c01f9d6-1c7d-44ad-ac82-3043ff6342f2",
            title: "",
            link: "hhttps://www.instagram.com/swayambhumishra?utm_source=qr&igsh=MXRjOGw3OTlxcW14YQ==",
        },
        {
            name: "Aman Thakur",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2Faman.jpg?alt=media&token=a27f4bc0-a956-451b-8381-eacff7813cb4",
            title: "",
            link: "https://www.instagram.com/senpai.xkun?utm_source=qr&igsh=MTNocGZveWZjdHJkcQ==",
        },
        {
            name: "Bharttruhari Swain",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2Fbharat.jpg?alt=media&token=b09c170a-11c9-4411-a5fd-b29f9e031c33",
            title: "",
            link: "https://www.instagram.com/bharttruhari07/",
        },
        {
            name: "Debi prasad sethy",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2FAbhishekh%20Panda.jpg?alt=media&token=9043df43-94c7-40cf-945e-11bcba3ca3a0",
            title: "",
            link: "",
        },
        {
            name: "Prayash ranjan kuanr",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2Fred.jpg?alt=media&token=561557d5-f6f0-4225-b07b-f674a6bbac03",
            title: "",
            link: "",
        },
        {
            name: "Priyanshu Samal",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2Fb7659606-d46b-4958-80b8-91dd6396f5c6.jpg?alt=media&token=0f3db864-a318-4ea8-96e1-90f3ea963205",
            title: "",
            link: "",
        },
        {
            name: "Subham panda ",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2F412710754_725837526139628_4983489978802970846_n.jpg?alt=media&token=cee1900a-2aa1-4733-bc4b-2bf447bd0192",
            title: "",
            link: "https://www.instagram.com/_.gilded_moon007._/",
        },
        {
            name: "Sinu reddy",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2F426159537_672792804813580_5615134514639294101_n.jpg?alt=media&token=ee6c3dfb-21aa-47e8-998f-662d0d0bdbc9",
            title: "",
            link: "https://www.instagram.com/sinu_r_15/",
        },
        {
            name: "Ashish sahu",
            image: "https://firebasestorage.googleapis.com/v0/b/myproject-b43c8.appspot.com/o/krutibas_website%2Fasish.jpg?alt=media&token=2aa830ae-a19d-49fb-979b-e729cbe864d5",
            title: "",
            link: "https://www.instagram.com/_ashish_ax_107?utm_source=qr&igsh=MXNxa2JveWwzM2c1Zw==",
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
                                <span className='text-sky-500 font-bold' >Happy Maha Shivatri! </span>
                                We are happy to invite you to the distribution of dahi pana on the eve of holy Maha Shivratri at IGIT temple. This is not an official event rather some of the students are organizing it. We have planned to provide nearly 800 - 1000 glass of dahi panas. We will auspiciously wait to your presence.
                                <br />
                                <br />
                                {/* If any one left please do not mind. */}
                                We would also like to give our sincere thanks to students like you who have contributed by providing any amount of financial assistance. If you want offer your helping hand you can so by contacting 8763339816, 8327716305, 8144573354.
                                {/* or by proving some financial assistance by clicking on the below button. <br /> */}

                                <br />
                                <br />
                                <Link to={"/donate"} className='bg-sky-500 p-1 border border-2-gray rounded-lg text-white mt-5' >Contribute!</Link>
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
                            <div className="md:w-[50%] rounded-sm h-80 md:h-auto"
                                style={{
                                    backgroundImage: `url('../invitationa_maha_shiva_ratri.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                            </div>
                            <div className='leading-relaxed md:w-[40%] mb-5 md:mr-3 md:leading-8 text-lg text-justify' >
                                <ul>
                                    <li>Date : 8th March 2024</li>
                                    <li>Time : 09:00 AM</li>
                                    <li>Place : IGIT college Temple </li>
                                </ul>
                            </div>
                        </div>
                        {/* --- COORDINATES --- */}
                        <div>
                            <h1 className='mt-5 mb-3 text-black title' style={{
                                fontSize: "40px",
                                fontWeight: "900",
                            }} >Coordinators</h1>
                            <div className='flex flex-wrap' >
                                {coordinators.map((coordinator, index) => {
                                    return (<div className='mr-0.5' key={index} >
                                        {coordinator.link !== "" ?
                                            <a href={coordinator.link} target='_blank' rel="noreferrer" className='w-16 h-16 bg-gray-400 rounded-full m-1 flex justify-center items-center overflow-hidden cursor-pointer' >
                                                <img src={coordinator.image} alt="profile" />
                                            </a>
                                            :
                                            <div key={index}
                                                className='w-16 h-16 bg-gray-400 rounded-full m-1 flex justify-center items-center overflow-hidden cursor-pointer' >
                                                <img src={coordinator.image} alt="profile" />
                                            </div>
                                        }
                                        <p className='text-sm text-center text-gray-500/70' >{coordinator.name.split(" ")[0]}</p>
                                    </div>)
                                })}
                            </div>

                            <h1 className='mt-5 mb-3 text-black title' style={{
                                fontSize: "40px",
                                fontWeight: "900",
                            }} >Volunteers</h1>
                            <div className='flex flex-wrap' >
                                {volunteers.map((coordinator, index) => {
                                    return (<div className='mr-0.5' key={index} >
                                        {coordinator.link !== "" ?
                                            <a href={coordinator.link} target='_blank' rel="noreferrer" className='w-16 h-16 bg-gray-400 rounded-full m-1 flex justify-center items-center overflow-hidden cursor-pointer' >
                                                <img src={coordinator.image} alt="profile" />
                                            </a>
                                            :
                                            <div key={index}
                                                className='w-16 h-16 bg-gray-400 rounded-full m-1 flex justify-center items-center overflow-hidden cursor-pointer' >
                                                <img src={coordinator.image} alt="profile" />
                                            </div>
                                        }
                                        <p className='text-sm text-center text-gray-500/70' >{coordinator.name.split(" ")[0]}</p>
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