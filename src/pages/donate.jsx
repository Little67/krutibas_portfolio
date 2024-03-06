import React, { useEffect, useState } from 'react'
import SEO from '../data/seo';
import { Helmet } from 'react-helmet';
import INFO from "../data/user";
import NavBar from '../components/common/navBar';
import Logo from '../components/common/logo';
import Footer from '../components/common/footer';
import { Link } from 'react-router-dom';
import * as gtag from "./../analytics/gtga";
import QRCode from "react-qr-code";


const Donate = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const currentSEO = SEO.find((item) => item.page === "invitations");

    const [input, setinput] = useState({
        vpa: "8763339816@okbizaxis",
        amount: "",
    });
    const [invalid, setinvalid] = useState({
        show: false,
        text: "",
    });
    const [generated, setgenerated] = useState({
        show: false,
        url: "",
    });
    console.log("Link generated ", generated);
    const [copied, setcopied] = useState(false);


    function generate() {
        // generate a deep link
        const vpa = input.vpa;
        const amount = input.amount;

        console.log("I am outside a link");
        if (vpa && vpa !== "" && vpa.includes("@") &&  amount !== "") {
            console.log("I am inside a link");

            const deeplink = `upi://pay?pn=withUpier&pa=${vpa}&cu=INR${amount
                ? `&am=${amount.includes(".")
                    ? amount
                    : `${amount}.0`
                }`
                : ""
                }`;
            console.log(deeplink);
            setgenerated({
                show: true,
                // url: `${window.location.protocol}//${window.location.hostname
                url: deeplink,
            });
            //   gtag.event({
            //     action: "create_payment_link",
            //     category: "engagement",
            //     label: `Vpa: ${vpa} - Amount: ${amount || "null"}`,
            //     value: `Created payment Deep Link by user`,
            //   });
        } else {
            setinvalid({
                show: true,
                text: !amount || amount === "" ? "* Please enter amount" : "Invalid amount",
            });
        }
        return;
    }


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
                <NavBar />
                <div className="content-wrapper">
                    <div className="projects-logo-container">
                        <div className="projects-logo">
                            <Logo width={46} link={true} />
                        </div>
                    </div>
                    <div className="projects-container min-h-screen ">
                        <h1 className='text-center title' style={{
                            width: '100%',
                        }} >Contribute!</h1>
                        {!generated.show ? (
                            <>
                                {/* Enter Amount section & Proceeds*/}

                                <div className='border border-red-500 min-h-96 p-3' >
                                    <div className='hidden' >
                                        <p className="">Enter Your VPA (UPI ID)</p>
                                        <input
                                            type="text"
                                            placeholder="UPI ID"
                                            className=""
                                            onChange={(e) =>
                                                setinput({ ...input, vpa: e.target.value })
                                            }
                                            value={input.vpa}
                                        />
                                    </div>
                                    <div>
                                        <p className="">
                                            Amount ={" "}
                                            <input
                                                type="number"
                                                placeholder="₹"
                                                className='border'
                                                onChange={(e) =>
                                                    setinput({ ...input, amount: e.target.value })
                                                }
                                                value={input.amount}
                                            />
                                            {" ₹"}
                                        </p>
                                    </div>
                                    <div>

                                        <button className='p-2 border bg-sky-500' onClick={generate} >Proceed</button>
                                    </div>
                                </div>

                                {/* Enter Amount section Proceeds ends */}
                            </>
                        ) : (
                            <>
                                {/* Pay section start */}
                                <div className="">
                                    <p className="text-center">
                                        If you are in PC Scan It with any UPI App to Pay
                                    </p>
                                    <div className="flex justify-center items-center" >
                                     <QRCode value={generated.url} className="qrsvg" size={200} />
                                    </div>
                                    
                                    <div className='m-2 mt-10' >
                                        <p className="text-center">
                                            Or <br />
                                            If you are in phone click <span className='text-sky-500' >proceed to PAY</span>
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <a
                                            href={generated.url}
                                            // target="_blank"
                                            rel="noopener noreferrer"
                                            className="border bg-sky-600 p-2 rounded text-white"
                                            onClick={()=>{
                                                console.log("__",generated.url);
                                            }}
                                        >
                                            Proceed to P A Y
                                        </a>
                                    </div>
                                </div>
                                {/* Pay section end */}
                            </>
                        )}
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Donate