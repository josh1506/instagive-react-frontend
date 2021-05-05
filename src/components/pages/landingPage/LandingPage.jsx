import React, { useState } from 'react';
import Footer from '../../common/Footer';
import Content from './Content';
import Posts from './Posts';
import ShowContent from './ShowContent';

function LandingPage(props) {
    const [openModal, setModal] = useState(false);

    return (
        <div>
            <ShowContent {...props} />
            <Content openModal={openModal} setModal={setModal}/>
            <Posts {...props} />
            <Footer openModal={openModal} setModal={setModal} />

        </div>
    );
}

export default LandingPage;