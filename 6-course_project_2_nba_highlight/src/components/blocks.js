import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal'; // this package
import 'animate.css/animate.css'; // CSS animation effects library

const generateBlocks = ({blocks}) => {

    if (blocks) {
        return blocks.map((item) => {
            return (
                <Reveal effect="animated fadeInUp" className={`item ${item.type}`}>
                    <div className="veil"></div>
                    <div
                        className="image"
                        style={{
                        background: `url(/images/blocks/${item.image}) no-repeat`
                    }}>
                
                    </div>
                    <div className="title">
                        <Link to={item.link}>{item.title}</Link>
                    </div>
                </Reveal>
            )
        })
    }
}

const Blocks = (props) => {
    return (
        <div className="home_block">
            {generateBlocks(props)}
        </div>
    )
}

export default Blocks;