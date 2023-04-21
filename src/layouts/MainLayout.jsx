import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export const MainLayout = ({children}) => {
    
    const styles = {
        backgroundColor: "#343a40",

    }
    return (
        <div style={styles}>
            {children}
            </div>
    )
}
