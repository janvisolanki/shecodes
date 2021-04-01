import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{ basket, user }] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    console.log(basket);
    return (<nav className="header">
        <Link to="/">
            <img className="header_logo" src="https://images.indianexpress.com/2021/01/myntra.png" alt="" />
        </Link>
        <div className="header_search">
            <SearchIcon className="header_searchIcon" />
            <input type="text" className="header_searchInput" />
        </div>

        <div className="header_nav">

            <Link to={!user && "/login"} className="header_link">
                <div onClick={login} className="header_option">
                    <PersonOutlineOutlinedIcon />
                    <span className="header_optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                </div>
            </Link>

            <Link to="/" className="header_link">
                <div className="header_option">
                    < GroupOutlinedIcon />
                    <span className="header_optionLineTwo">Groups</span>
                </div>
            </Link>

            <Link to="/wishlist" className="header_link">
                <div className="header_option">
                    <FavoriteBorderOutlinedIcon />
                    <span className="header_optionLineTwo">Wishlist</span>
                </div>
            </Link>

            <Link to="checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo header_basketcount">{basket?.length}</span>
                </div>
            </Link>

        </div>
    </nav >
    );

}

export default Header