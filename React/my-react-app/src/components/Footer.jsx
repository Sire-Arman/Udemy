import React from "react";
function footer(){
    const d = new Date().getFullYear();
    return(
        <>
        <footer>
            &copy; Arman Siddiqui {d}
        </footer>
        </>
    )
}
export default footer;