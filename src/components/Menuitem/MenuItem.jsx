import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, tags, price }) => (
  <div className="menuitem__container--box">
    <div className="menuitem__container--boxinside">
      <div>
        <p className="menuitem__container--title">{title}</p>
      </div>
      <div>
        <p className="menuitem__container--tags">{tags}</p>
      </div>
    </div>
    <div className="menuitem__container--dash" />
    <div>
      <p className="menuitem__container--price">{price}</p>
    </div>
  </div>
);

export default MenuItem;
