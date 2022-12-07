import React, {useState} from 'react';
import './Portfolio.scss';
import Slider from "../Slider/Slider";

export const PortfolioTags = ['Web', 'Education'];

export type PortfolioItem = {
    headline: string;
    text: string; // including <p>
    tag: string;
    bg: string;
    date: string;
};

function Portfolio(props: {portfolioItems: PortfolioItem[]}) {
    const [activeTag, setActiveTag] = useState<string>('All');

    function allTags() {
        const tags = ['All'];
        return tags.concat(Array.from(new Set(props.portfolioItems.map(item => item.tag))));
    }

    function filteredItems() {
        if (activeTag === 'All') return props.portfolioItems;
        return props.portfolioItems.filter((item) => item.tag === activeTag);
    }

    return (
        <section className="portfolio">
            <div className="container">
                <h2 className="section-headline">Portfolio</h2>

                <div className="portfolio__select">
                    <select name="text"
                            value={activeTag}
                            onChange={(e) => setActiveTag(e.target.value)}
                            required>
                        {allTags().map((item) => (
                            <option value={item} key={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="container container--fluid">
                <div className="portfolio__slider">
                    <Slider itemWidth={'500px'} itemWidthMobile={'90%'} arrows={true}>
                        {filteredItems().map((item) => (
                            <article
                                className="portfolio__slide"
                                key={item.headline}
                                style={{background: `linear-gradient(rgba(0, 0, 0, 0.65),rgba(0, 0, 0, 0.65)),url("${item.bg}") center center / cover no-repeat`}}>
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
