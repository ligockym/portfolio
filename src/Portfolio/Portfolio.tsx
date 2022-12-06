import React from 'react';
import './Portfolio.scss';
import Slider from "../Slider/Slider";

export enum PortfolioTag {
    Web = "Web",
    Education = "Education",
}

type PortfolioItem = {
    headline: string;
    text: string; // including <p>
    tag: PortfolioTag;
    bg: string;
    date: string;
};

function Portfolio() {
    const items: PortfolioItem[] = [
        {
            headline: 'MôjAltánok',
            text: `<p>Web development of e-shop that sells garden furniture and buildings. I worked on integrations among systems, automatic
                    synchronization of products and full-stack enhancements.</p>
                    <p>Web is based on Wordpress and WooCommerce.</p>`,
            tag: PortfolioTag.Web,
            bg: 'img/altanok.jpg',
            date: '2019-2022',
        },
        {
            headline: 'Nottelo',
            text: `<p>Let's make our own to-do manager. </p>
                    <p>Web is based on Wordpress and WooCommerce.</p>`,
            tag: PortfolioTag.Web,
            bg: 'img/notello.jpg',
            date: '2019-2020',
        },
        {
            headline: 'VUT Brno',
            text: `<p>Studying on university</p>`,
            tag: PortfolioTag.Education,
            bg: 'img/fit.jpg',
            date: '2020-2022',
        },
        {
            headline: 'Climaton Bratislava',
            text: `<p>We developed an information system that helps the city with illegal dumps management.</p>`,
            tag: PortfolioTag.Education,
            bg: 'img/ba.jpg',
            date: '2022',
        }
    ]

    return (
        <section className="portfolio">
            <div className="container">
                <h2 className="section-headline">Portfolio</h2>
            </div>

            <div className="container container--fluid">
                <div className="portfolio__slider">
                    <Slider itemWidth={'500px'} itemWidthMobile={'90%'} arrows={true}>
                        {items.map((item) => (
                            <article
                                className="portfolio__slide"
                                key={item.headline}
                                style={{background: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url("${item.bg}") center center / cover no-repeat`}}>
                                <h2 className="portfolio__slide-headline">{item.headline}</h2>
                                <div className="portfolio__slide-text"
                                     dangerouslySetInnerHTML={{__html: item.text}}>
                                </div>


                                <div className="portfolio__slide-tags">
                                    <span>#{item.tag}</span>
                                </div>

                                <div>
                                    <time>Date: {item.date}</time>
                                </div>
                            </article>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
