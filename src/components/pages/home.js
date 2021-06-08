import React from 'react';
import AppHeader from "../appHeader";
import PersonalData from "../personalData";
import Education from "../education";
import Experience from "../experience";
import OtherInformation from "../otherInformation";
import AppFooter from "../appFooter";

export const Home = () => {
    return (
        <>
            <AppHeader/>
            <PersonalData/>
            <Education/>
            <Experience/>
            <OtherInformation/>
            <AppFooter/>
        </>
    )
}