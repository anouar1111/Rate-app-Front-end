import React, {useState} from 'react';
import AddSection from '../components/AddSection';
import BigPart from '../components/BigPart';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchSection from '../components/SearchSection';
import SideBar from '../components/SideBar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}  />
            <Navbar toggle={toggle}/>
            <BigPart/>
            <SearchSection/>
            <AddSection/>
            <Footer/>
        </>
    )
}

export default Home
