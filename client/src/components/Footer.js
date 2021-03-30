import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div className="index-page sidebar-collapse">
            <div className="main">
            <footer className="footer" data-background-color="black">
                <div className=" container ">
                    <div className="copyright" id="copyright">Copyright 
                        &copy; {year}, NowDevelopment Lab. by 
                        <a href="https://www.linkedin.com/in/andrei-botea-b7ab9427/"> Andrei Botea</a>
                    </div>
                </div>
            </footer>
            </div>
        </div>
    )
}

export default Footer
