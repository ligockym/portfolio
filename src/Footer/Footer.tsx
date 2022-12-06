import React from 'react';
import './Footer.scss';

type MyProps = {
    handleAddProject: CallableFunction
};

class Footer extends React.Component<MyProps> {
    render() {
        return (
            <footer className="footer">
                <div className="footer__container container">
                    <div className="footer__socials">
                        <a href="https://www.facebook.com/">
                            <img src="icons/facebook.svg" alt={"Facebook"} height="40"/>
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src="icons/instagram.svg" alt={"Instagram"} height="40"/>
                        </a>
                    </div>

                    <a className="button"
                       href={void (0)}
                       onClick={(e) => this.props.handleAddProject(e)}>Add project</a>
                </div>
            </footer>
        );
    }

}

export default Footer;
