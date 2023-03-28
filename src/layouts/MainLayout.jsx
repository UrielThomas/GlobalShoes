import React from 'react'
import { NavBarComponent } from '../components'
import "bootstrap/dist/css/bootstrap.min.css";

export const MainLayout = ({children}) => {
    
    const styles = {
        backgroundColor: "#343a40",
        color: "white",
    }
    return (
        <div style={styles}>
            {children}
            </div>
    )
}
