import { NavLink } from "react-router-dom";
import { HeaderContainer, MarvelLogo, Menu, MenuBtn } from "./styles";

import { useState } from "react";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <HeaderContainer>
      <MarvelLogo>MARVEL</MarvelLogo>
      <MenuBtn
        mobileMenu={mobileMenu}
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <span></span>
      </MenuBtn>
      <Menu mobileMenu={mobileMenu}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }): { color: string } =>
              isActive ? { color: "#fff" } : { color: "#707070" }
            }
          >
            Personagens
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/filmes"
            style={({ isActive }): { color: string } =>
              isActive ? { color: "#fff" } : { color: "#707070" }
            }
          >
            Filmes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hqs"
            style={({ isActive }): { color: string } =>
              isActive ? { color: "#fff" } : { color: "#707070" }
            }
          >
            HQs
          </NavLink>
        </li>
      </Menu>
    </HeaderContainer>
  );
};
