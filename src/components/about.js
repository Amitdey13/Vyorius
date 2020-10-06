import React from 'react'
import Button from './button'

function About(){
    return(
        <div className="about">
            <div className="tag orange">CONNECTING THE DISCONNECTED</div>
            <p className="brief-info">
                <span className="orange">Vyorius</span> brings unmanned
                 robots <span className="orange">together</span>,
                 wherever they are
            </p>
            <p className="info">
                With all of the operations, commanding and maintenance tools in one place,
                unmanned vehicles will stay connected and productive no matter where you’re Delivering
            </p>
            <div className="more-info-links">
                <Button color="white" bold="bold" radius="10px" size="18px" border="orangered" width="250px" height="60px" bgcolor="orangered" name="Try Vyorius" />
                <Button color="orangered" bold="bold" radius="10px" size="18px"  border="orangered" width="250px" height="60px" bgcolor="white"  name="Learn More" />
            </div>
            <div className="get-started">Need to order a delivery?<a href="###">Get Started</a></div>
        </div>
    );
}

export default About;
