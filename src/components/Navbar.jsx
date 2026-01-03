import { useEffect, useRef, useState } from "react";
const Navbar = ({ data, setData }) => {
    const searchRef = useRef();
    const [search, setSearch] = useState("");

    useEffect(() => {
        searchRef.current.focus();
    }, []);

    useEffect(() => {
        const original = JSON.parse(localStorage.getItem("evalData")) || [];
        const filtered = original.filter((r) =>
        r.restaurantName.toLowerCase().includes(search.toLowerCase())
        );

        setData(filtered);
    }, [search]);

    return (
        <div>
            <input 
                ref={searchRef}
                placeholder="Search..."
                onChange={(e) =>
                    setSearch(e.target.value)}
            /> 
        </div>
    );
};

export default Navbar;