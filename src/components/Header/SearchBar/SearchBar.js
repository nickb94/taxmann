import React from "react"
import "../Header.css"

export const SearchBar = () => {

    const [value, setValue] = React.useState("")

    return (
        <>
            <div className="searchBar-wrapper">
                <form>
                    <input
                        type="text"
                        className="searchBar"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        placeholder="Search anything on tax and corporate law in bookstore"
                    />
                </form>
            </div>
        </>
    )
}
