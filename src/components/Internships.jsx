import React, { useEffect } from "react";
import { allInternships } from "./utils/helper";
import Internship from "./Internship";

const Internships = () => {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);
    return (
        <section className='my-20 md:px-6 lg:px-10'>
            <h1
                className='text-clr-1 text-3xl my-11 uppercase xl:text-4xl'
                data-aos='fade'
                data-aos-duration='700'
                data-aos-offset='0'
            >
                • All Internships
            </h1>
            <section className='lg:px-6'>
                {allInternships.map((internship, index) => {
                    return <Internship key={index} internship={internship} />;
                })}
            </section>
        </section>
    );
};

export default Internships;
