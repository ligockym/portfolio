import React, {useEffect, useState} from 'react';
import './_variables.scss';
import './App.scss';
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Portfolio, {PortfolioItem} from "./Portfolio/Portfolio";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import AddProject from "./AddProject/AddProject";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

function App() {
    const [isModal, setIsModal] = useState(false);
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

    function addProject() {
        setIsModal(true);
    }

    function modalClose() {
        setIsModal(false);
        updatePortfolio();
    }

    function updatePortfolio() {
        fetch('https://portfolio.marianligocky.sk/portfolio.php')
            .then(results => results.json())
            .then(data => {
                const items: PortfolioItem[] = [];
                data.forEach((item: { [x: string]: any; }) => {
                    items.push({
                        headline: item['headline'],
                        text: item['text'],
                        tags: item['tags'].split(','),
                        bg: item['bg'],
                        date: item['date']
                    });
                });

                setPortfolioItems(items);
            });
    }

    useEffect(() => {
        updatePortfolio();
    }, []);


    return (
        <div className="app">
            <div className={`app__content ${isModal ? 'app__content--modal-open' : ''}`}>
                <Header/>
                <div id="home">
                    <Intro/>
                </div>

                <div id="portfolio">
                    <Portfolio portfolioItems={portfolioItems}/>
                </div>

                <div id="skills">
                    <Skills/>
                </div>

                <Footer handleAddProject={addProject}/>
            </div>

            {isModal &&
                <AddProject handleClose={modalClose}></AddProject>
            }

            <ScrollToTop/>

        </div>);
}

export default App;
