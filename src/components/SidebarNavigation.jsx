import React from "react";
import { TfiTwitter } from "react-icons/tfi";
import { BiHomeCircle } from "react-icons/bi";
import { HomeIcon } from "@primer/octicons-react";

const SidebarNavigation = () => {
  return (
    <>
      <aside className="sidebar">
        <nav>
          <div className="nav__wrapper">
            <div className="upper__nav">
              <ul>
                <li>
                  <a href="/home">
                    <div className="icon">
                      <TfiTwitter />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/home">
                    <div className="icon">
                      <BiHomeCircle />
                    </div>
                    <span>Home</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="profile__nav">profile</div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default SidebarNavigation;
