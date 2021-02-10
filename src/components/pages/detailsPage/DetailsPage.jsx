import React from 'react';
import OtherPosts from './../../common/OtherPosts';
import DetailsPageContent from './DetailsPageContent';

function DetailsPage(props) {
    return (
        <div>
            <DetailsPageContent />
            <OtherPosts />
        </div>
    );
}

export default DetailsPage;