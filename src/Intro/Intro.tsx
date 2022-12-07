import React from 'react';
import './Intro.scss';
import Slider from "../Slider/Slider";

function Intro() {
    return (
        <section className="intro">
            <Slider itemWidth={'100%'} arrows={true} arrowsInside={true} pagination={true}>
                <div className="intro__slide intro__slide--1">
                    <div className="container">
                        <h2 className="intro__slide-headline slider-animate">Hello, I am Marián Ligocký.</h2>
                        <p className="intro__slide-subheadline slider-animate">front-end and back-end developer</p>
                        <a className="button slider-animate" href="#portfolio">See my works</a>
                    </div>
                </div>
                <div className="intro__slide intro__slide--2">
                    <div className="container">
                        <h2 className="intro__slide-headline slider-animate">I want to work for InQool</h2>
                        <p className="intro__slide-subheadline slider-animate">I want to become a better developer and to gain experiences. And also I want to see how other people solve the problems.</p>
                        <a className="button slider-animate" href="#skills">See my skills</a>
                    </div>
                </div>

                <div className="intro__slide intro__slide--3">
                    <div className="container">
                        <h2 className="intro__slide-headline slider-animate">I like to know how things work</h2>
                        <p className="intro__slide-subheadline slider-animate">I am fed up with small websites. I want to think in the bigger picture.</p>
                        <a className="button slider-animate" href="#portfolio">See my works</a>
                    </div>
                </div>
            </Slider>
        </section>
    );
}

export default Intro;
