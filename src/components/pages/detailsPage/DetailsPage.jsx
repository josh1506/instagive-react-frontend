import React from 'react';
import DetailsPageContent from './DetailsPageContent';
import DetailsUpdatePage from './DetailsUpdatePage';
import '../../../style/detailsPage/detailsPage.css'

function DetailsPage(props) {

    const renderContent = (
        <div className='details-header-container'>
            <h1 className='details-title'>A Big Title</h1>
            <div className='details-button-container'>
                <button className='details-button'>Description</button>
                <button className='details-button'>Updates</button>
            </div>
        </div>
    )

    return (
        <div>
            {/* <DetailsPageContent>{renderContent}</DetailsPageContent> */}
            {/* <DetailsUpdatePage>{renderContent}</DetailsUpdatePage> */}
        </div>
    );
}

export default DetailsPage;