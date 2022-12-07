import React, {Key} from 'react';
import './Slider.scss';

type MyProps = {
    children: React.ReactNode[],
    itemWidth: string,
    itemWidthMobile?: string,
    pagination?: boolean,
    arrowsInside?: boolean,
    arrows?: boolean
};
type MyState = {
    itemWidth: string,
    pagination: boolean,
    arrowsInside: boolean,
    arrows: boolean,
    slideIndex: number,
    areAllVisible: boolean,
    touchPosition: number | null
};

class Slider extends React.Component<MyProps, MyState> {
    state: MyState = {
        itemWidth: this.props.itemWidth || '100vw',
        pagination: this.props.pagination || false,
        arrows: this.props.arrows || false,
        arrowsInside: this.props.arrowsInside || false,
        slideIndex: 0,
        areAllVisible: false,
        touchPosition: null
    }
    interval: any;
    refSlide: any = React.createRef();
    refSlides: any = React.createRef();

    componentDidMount() {
        // check whether to use itemWidth or itemWidthMobile
        window.addEventListener("resize", () => this.resizeIfNeeded());
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        window.removeEventListener("resize", this.resizeIfNeeded);
    }

    componentDidUpdate(prevProps: MyProps) {
        if (prevProps.children !== this.props.children) {
            this.resizeIfNeeded();
            this.slideChange(0);
        }
    }

    resetInterval() {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.slideNext(this.state.slideIndex);
        }, 4000);
    }

    resizeIfNeeded() {
        if (this.props.children.length == 0) return;

        const prev = this.state.itemWidth;
        const isMobile = window.innerWidth < 768;
        // if mobile does not exist, use desktop size for mobiles
        const mobile = this.props.itemWidthMobile || this.props.itemWidth;
        const itemWidth = isMobile ? mobile : this.props.itemWidth
        this.setState({itemWidth: itemWidth});

        if (prev !== itemWidth) {
            // change, reload slide
            this.slideChange(this.state.slideIndex);
        }
    }

    slidePrev(slideIndex: number) {
        const len = this.props.children.length;
        const nextSlide = (slideIndex + len - 1) % len;
        this.slideChange(nextSlide);
    }

    slideNext(slideIndex: number) {
        const len = this.props.children.length;
        const nextSlide = (slideIndex + 1) % len;
        this.slideChange(nextSlide);
    }

    slideChange(slideIndex: number) {
        // item does not exist
        if (this.props.children.length === 0) return;

        const widthOfSlides = this.refSlides.current.offsetWidth;
        const widthOfSlide = this.refSlides.current.querySelector(".slider__slide").offsetWidth;

        // determine whether all slides are visible (right arrow is then hidden)
        const visible = slideIndex + (widthOfSlides / widthOfSlide);
        const areAllVisible = visible >= this.props.children.length

        this.setState({slideIndex: slideIndex, areAllVisible: areAllVisible});
        this.resetInterval();
    }

    handlePaginationClick(index: number) {
        this.slideChange(index);
    }

    handlePaginationHover() {
        this.resetInterval();
    }

    handleArrowHover() {
        this.resetInterval();
    }

    // from https://dev.to/rakumairu/how-to-handle-swipe-event-on-react-carousel-24ab
    handleTouchStart(e: any) {
        const touchDown = e.touches[0].clientX;
        this.setState({
            touchPosition: touchDown
        });
    }

    handleTouchMove(e: any) {
        const touchDown = this.state.touchPosition;
        const threshold = 5;

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch;
        console.log("diff", diff);

        if (diff > threshold) {
            this.slideNext(this.state.slideIndex);
        }

        if (diff < (-1) * threshold) {
            this.slidePrev(this.state.slideIndex);
        }

        this.setState({
            touchPosition: null
        });
    }

    render() {
        return (
            <div className="slider">
                <div className="slider__inside"
                     onTouchStart={(e) => this.handleTouchStart(e)}
                     onTouchMove={(e) => this.handleTouchMove(e)}>
                    <div className="slider__slides"
                         ref={this.refSlides}
                         style={{transform: `translateX(calc((-1) * ${this.state.slideIndex} * ${this.state.itemWidth})`}}>

                        {/* Slides */}
                        {this.props.children.map((child_content, index: Key) => (
                            <div className={`slider__slide ${index === this.state.slideIndex ? 'slider__slide--active' : ''}`}
                                 style={{width: `${this.state.itemWidth}`}}
                                 ref={this.refSlide}
                                 key={index}>
                                {child_content}
                            </div>
                        ))}
                    </div>

                    {this.state.pagination &&
                        <div className={`slider__pagination`}>
                            {this.props.children.map((item, index) => (
                                <div className={`slider__pagination-item ${index === this.state.slideIndex ? 'slider__pagination-item--active' : ''}`}
                                     key={index}
                                     onClick={() => this.handlePaginationClick(index)}
                                     onMouseEnter={() => this.handlePaginationHover()}>
                                    <span></span>
                                </div>
                            ))}
                        </div>
                    }
                </div>

                {this.state.arrows &&
                    <div className={`slider__arrows ${this.state.arrowsInside ? 'slider__arrows--inside' : ''}`}>
                        <span className={`slider__arrow`}
                              onMouseEnter={() => this.handleArrowHover()}
                              onClick={() => this.slidePrev(this.state.slideIndex)}> <img src="icons/arrow-left.svg" alt="<"/></span>
                        <span className={`slider__arrow`}
                              onMouseEnter={() => this.handleArrowHover()}
                              onClick={() => this.slideNext(this.state.slideIndex)}> <img src="icons/arrow-right.svg" alt=">"/></span>
                    </div>
                }


            </div>
        );
    }
}

export default Slider;
