import React from 'react';
import Posts from './Posts';
import ShowContent from './ShowContent';

function LandingPage(props) {
    return (
        <div>
            <ShowContent />
            <Posts {...props} />
        </div>
    );
}

export default LandingPage;