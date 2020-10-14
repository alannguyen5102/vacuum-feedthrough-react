import React from 'react';
import './Footer.scss';
import { version } from '../../package.json';
export default class Footer extends React.Component {
    public appVersion: string = version;
    render() {
        return (
            <footer>
                <h3>
                    Contact BCE
                </h3>
                <address>
                    <span className="glyphicon glyphicon-earphone"></span>
                    <b>Phone: </b>
                    <a href="tel:510-274-1990">
                        (510) 274-1990
                    </a>
                    <br></br>

                    <span className="glyphicon glyphicon-envelope"></span>
                    <b>Email: </b>
                    <a href="mailto:sales@belilove.com">
                        sales@belilove.com
                    </a>
                    <br></br>

                    <span className="glyphicon glyphicon-time"></span>
                    <b>Business Hours: </b>
                    7:00AM - 4:00PM PST
                </address>
                <h6>
                    Version: { this.appVersion }
                </h6>
            </footer>
        );
    }
}
