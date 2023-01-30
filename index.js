import Header from "./Header"
import React from "react";
function Footer(){
    return (
        <footer>
             <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )

}
function Aa(){
    return (
        <div>
            <Header />
       
        <h1 className="facts">

            
            facts
        </h1>
        <ol type="1">
            <li>prr</li>
            <li>prsdr</li>
            <li>prrsdf</li>
        </ol>
        <Footer />

    </div>
    )
}


ReactDOM.render(<Aa  />, document.getElementById('root'));

