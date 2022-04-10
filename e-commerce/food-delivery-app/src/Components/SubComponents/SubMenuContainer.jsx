import React from "react";
import { ChevronRightRounded } from "@mui/icons-material";
import '../Styles/SubMenuContainer.css';

function SubMenuContainer() {
    return (
        <div className="subMenuContianer">
            <h3>Menu Category</h3>
            <div className="viewAll">
                <p>View All</p>
                <i>
                    <ChevronRightRounded />
                </i>
            </div>
        </div>
    );
}

export default SubMenuContainer;