import React from 'react'
import "./SuperSearchBar.css"

import { Button } from "@material-ui/core";

import LocationOnIcon from '@material-ui/icons/LocationOn';
import CategoryIcon from '@material-ui/icons/Category';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

export default function SuperSearchBar() {
    return (
        <div className="SearchBar">
            <Button className="SelectLocation">
                <LocationOnIcon className="icon" />
                <h5 style={{ marginLeft: 5 }}>Select Location</h5>
            </Button>

            <Button className="SelectCategory">
                <CategoryIcon className="icon" />
                <h5 style={{ marginLeft: 5 }}>Select Category</h5>
            </Button>

            <div className="SearchInput">
                <FormatColorTextIcon />
                <input style={{ marginLeft: 5 }} type="text" id="SearchInput" placeholder="What are you looking for ?" name="SearchInput" />
            </div>

            <div className="SearchButton">
                <Button>
                    <SearchRoundedIcon style={{ paddingRight: 2 }} />
                Search
            </Button>
            </div>

        </div>
    )
}
