// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function formatTitle(title) {   
//     if(!title || title === "/") {
//         return "UnityCare Pharmacy";
//     }

//     // Split title by slashes and capitalize each part

//     const parts = title.split("/").filter(Boolean);

// // convert each segment to title "online-medicine" -> "Online Medicines"

// const formattedParts = parts.map((part) => part.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()))

// // Join Breadcrumbs 
// const breadCrumbs = formattedParts.join(" ")
// return `${breadCrumbs} - UnityCare Pharmacy`;
// }


// const DynamicTitle = () => {
//     const Location = useLocation();
//     useEffect(() => {
//         document.title = formatTitle(Location.pathname);
//     }, [Location]);
//     return null;
// }

// export default DynamicTitle








// The following files were edited around the same time. They may be related to the changes made in DynamicTitle.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function formatTitle(title) {   
    if(!title || title === "/") {
        return "UnityCare Pharmacy";
    }

    // Split title by slashes and capitalize each part
    const parts = title.split("/").filter(Boolean);

    // Get only the last segment (current page)
    const lastPart = parts[parts.length - 1]

// convert each segment to title "online-medicine" -> "Online Medicines"
const formattedParts = lastPart.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
return `${formattedParts} - UnityCare Pharmacy`;
}


const DynamicTitle = () => {
    const Location = useLocation();
    useEffect(() => {
        document.title = formatTitle(Location.pathname);
    }, [Location]);
    return null;
}

export default DynamicTitle