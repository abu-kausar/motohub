"use client"

import {SearchManufacturer} from "@/components";
import { useState } from "react";

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');

    const handleSubmit = () => { };

    return (
        <form className='searchbar' onSubmit={handleSubmit}>
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
            </div>
        </form>
    )
}

export default SearchBar;