import React from 'react';
import HomePage from './homePage';
import Seminars from './seminars';
import InfoSeminar from './infoSeminar';

export default function viewer(props) {
    switch(props.toDisplay) {
        case "homePage":
            return (
                <>
                  <HomePage/>  
                </>
            );
        case "seminars":
            return (
                <>
                  <Seminars/>  
                </>
            );
        case "infoSeminar":
            return (
                <>
                 <InfoSeminar/>  
                </>
            );    
    }
}
