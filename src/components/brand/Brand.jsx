import React from "react";
import "./brand.css";

import { atlassian, dropbox, google, shopify, slack } from "./import";

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={google} alt=""></img>
            </div>
            <div>
                <img src={slack} alt=""></img>
            </div>
            <div>
                <img src={atlassian} alt=""></img>
            </div>
            <div>
                <img src={dropbox} alt=""></img>
            </div>
            <div>
                <img src={shopify} alt=""></img>
            </div>
        </div>
    );
};

export default Brand;
