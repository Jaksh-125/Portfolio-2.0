import React from "react";
import Internship from "./Internship";
import { Link } from "react-router-dom";
import { allInternships } from "./utils/helper";

const ShowcaseInternship = () => {
    let showcaseInternships = allInternships.slice(0, 3);
    return (
        <section className='my-36 lg:mx-7 '>
            <header className='xl:my-12'>
                <h1 className='text-clr-2'>/03</h1>
                <h2 className='text-2xl lg:text-3xl'>Recent Internships</h2>
            </header>
            <section>
                <div>
                    {showcaseInternships.map((internship, index) => {
                        return <Internship key={index} internship={internship} />;
                    })}
                </div>
                <Link
                    to={"/internships"}
                    data-aos='fade'
                    data-aos-duration='9000'
                    data-aos-delay='300'
                    data-aos-offset='0'
                    className='underline my-14 underline-offset-8 hover:no-underline hover:text-[#606060]'
                >
                    All Internships &rarr;
                </Link>
            </section>
        </section>
    );
};

export default ShowcaseInternship;
