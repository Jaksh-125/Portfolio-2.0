import React, { useEffect } from "react";
import Intro from "./Intro";
import ShowcaseProject from "./ShowcaseProject";
import ShowcaseInternship from "./ShowcaseInternship";


const Main = () => {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);
    return (
        <main>
            <Intro />
            <ShowcaseProject />
            <ShowcaseInternship />
        </main>
    );
};

export default Main;
