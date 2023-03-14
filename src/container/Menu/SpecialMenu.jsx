import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import MenuItem from "../../components/Menuitem/MenuItem";
import { data, images } from "../../constants";

import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <section className="specialmenu__container--box" id="menu">
      <div className="specialmenu__container--header">
        <SubHeading
          title="Tailor-Made Drink Experience"
          className="spoon__img"
        />
        <h2>Liquid Delight</h2>
      </div>

      <div className="specialmenu__container--body">
        <div>
          <h3 className="specialmenu__container--headertext">Wine & Beer</h3>
          {data.wines.map((wine) => {
            return (
              <MenuItem
                key={wine.title}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              ></MenuItem>
            );
          })}
        </div>
        <div className="specialmenu__container--imagebox">
          <img
            src={images.menu}
            alt="la-cuisine"
            className="specialmenu__container--image"
          />
        </div>
        <div>
          <h3 className="specialmenu__container--headertext">Cocktails</h3>
          {data.cocktails.map((cocktail) => {
            return (
              <MenuItem
                key={cocktail.title}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              ></MenuItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
