import React, {useState} from 'react';
import logo from './logo.svg';
import './_variables.scss';
import './App.scss';
import './Global/Button.scss';
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Portfolio from "./Portfolio/Portfolio";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import AddProject from "./AddProject/AddProject";
import addProject from "./AddProject/AddProject";

function App() {
    const [isModal, setIsModal] = useState(false);

    function addProject() {
        setIsModal(true);
    }

    function modalClose() {
        setIsModal(false);
    }

    return (
        <div className="app">
            <div className={`app__content ${isModal ? 'app__content--modal-open' : ''}`}>
                <Header/>
                <div id="home">
                    <Intro/>
                </div>

                <div id="portfolio">
                    <Portfolio/>
                </div>

                <div id="skills">
                    <Skills/>
                </div>

                <Footer handleAddProject={addProject}/>
            </div>

            {isModal &&
                <AddProject handleClose={modalClose}></AddProject>
            }

        </div>);
}

export default App;
