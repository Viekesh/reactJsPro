import React from "react";

function MenuContainer({ link, icon, isHome }) {
    return (
        <li className={isHome ? `active` : ``}>
            <a href={link}>
                <span className="icon">{icon}</span>
            </a>
        </li>
    );
}

export default MenuContainer;
// {/* Here we can use property "link" which we have create in a "Header.jsx" then destructure that link otherwise every time we need use as "prop dot props" because if you are not destructuring, it takes the props. So every time we want to use that property we need to use pros dot, that property name. */ }
// {/* So we don't want to do that, so what we are going to do is we just going to destructure it icon, then link these two things (icon link...ok...prefect) */ }