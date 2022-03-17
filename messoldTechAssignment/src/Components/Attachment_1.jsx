import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Styles/attachment_1.css";

class Attachment_1 extends Component {

    render() {
        return (
            <div className="attachment_1 flex absolute_center">
                <Link to="/">
                    <button className="button a_1">Attachment 1</button>
                </Link>
                <Link to="/Attachment_2">
                    <button className="button a_2">Attachment 2</button>
                </Link>
                <div className="elements">
                    <div className="box flex">
                        <div className="box_1">
                            <h4 className="h_a_1">Description</h4>
                            <p className="para_a_1">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Commodi quos a reiciendis dolores perspiciatis corporis.
                            </p>
                            <h4 className="h_a_1">Material</h4>
                            <p className="para_a_1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Molestiae adipisci quisquam earum deleniti? A magnam qui esse
                                minus, libero deserunt nemo temporibus unde sequi architecto
                                animi repellat dolorem laborum ducimus.
                            </p>
                            <h4 className="h_a_1">Garement</h4>
                            <p className="para_a_1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!
                            </p>
                            <div className="scale flex absolute_center">

                                <div className="dot common_dots"></div>
                                <div className="line"></div>
                                <div className="dot"></div>
                                <div className="line"></div>
                                <div className="dot dot_3"></div>
                                <div className="line"></div>
                                <div className="dot"></div>
                                <div className="line"></div>
                                <div className="dot common_dots"></div>

                            </div>
                            <div className="values flex">
                                <h5>Light</h5>
                                <h5>Medium</h5>
                                <h5>Heavy</h5>
                            </div>
                        </div>
                        <div className="box_2">
                            <h4 className="h_a_1">Specifications</h4>
                            <p className="para_a_1">
                                <u>
                                    <li>Lorem, ipsum.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>lorem</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem, ipsum.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem, ipsum.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>lorem</li>
                                </u>
                            </p>
                        </div>
                        <div className="box_3">
                            <h4 className="h_a_1">Essentials</h4>
                            <p className="para_a_1">Lorem  className="h_a_1"ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam placeat quos sint architecto eveniet, unde voluptate, libero ex vero necessitatibus dolorem nesciunt deserunt maxime nobis eligendi iusto molestiae. Autem repellat nesciunt deserunt accusantium quas rem perferendis nulla quidem reiciendis?</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Attachment_1;
