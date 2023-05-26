import React,{useState} from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/SearchRounded";
import { Language } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
const Header = () => {
  const [iseMobile,setIsMobile]=useState(false);
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>
      {/*  */}
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="mobile" onClick={()=>setIsMobile(!iseMobile)}>
        {
          iseMobile? <CloseIcon/>:<MenuIcon/>
        }
        </div>
      <div className={iseMobile? "ismobile":"header__right"}>
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
        
      </div>
    </div>
  );
};

export default Header;
