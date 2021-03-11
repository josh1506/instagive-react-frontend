import React from 'react';
import Footer from '../../common/Footer';
import Content from './Content';
import Posts from './Posts';
import ShowContent from './ShowContent';

function LandingPage(props) {


    return (
        <div>
            <ShowContent {...props} />
            <Content />
            <Posts {...props} />
            <Footer/>

        </div>
    );
}

export default LandingPage;