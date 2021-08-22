import React, { Component } from 'react'
import { Icon } from '../component/icon';
import { NavButton } from '../component/navButton';

const navigations = [
    {
        text: "Home",
        iconName: "home",
        to: "/home"
    },
    {
        text: "Explore",
        iconName: "hash",
        to: "/explore"
    },
    {
        text: "Notification",
        iconName: "bell",
        to: "/notification"
    },
    {
        text: "Message",
        iconName: "mail",
        to: "/messages"
    },
    {
        text: "Bookmarks",
        iconName: "bookmark",
        to: "/bookmarks"
    },
    {
        text: "Lists",
        iconName: "list",
        to: "/lists"
    },
    {
        text: "Profile",
        iconName: "circle",
        to: "/profile"
    },
    {
        text: "More",
        iconName: "more-horizontal",
        to: "/more"
    },
];

class SideLeft extends Component {

    render() {
        return (
            <div className="leftMenu col-2">
                <div className="nav">
                    <div className="nav__logo">
                        <Icon size={40} iconName="twitter" />
                    </div>
                    {
                        navigations.map((navigation, index) => {
                            return (
                                <NavButton key={index} {...navigation} />
                            )
                        })
                    }
                    <a className="nav__link" href="/">
                        <div className="nav__button">
                            <span>Tweet</span>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default SideLeft;
