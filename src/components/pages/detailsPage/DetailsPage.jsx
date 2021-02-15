import React from 'react';
import DetailsPageContent from './DetailsPageContent';
import DetailsUpdatePage from './DetailsUpdatePage';

function DetailsPage(props) {
    return (
        <div>
            <DetailsPageContent>
                <h1>A Big Title</h1>
                <div className='viewUpdatesContainer'>
                    <button>Description</button>
                    <button>Updates</button>
                </div>
            </DetailsPageContent>
            <DetailsUpdatePage>
                <h1>A Big Title</h1>
                <div className='viewUpdatesContainer'>
                    <button>Description</button>
                    <button>Updates</button>
                </div>
            </DetailsUpdatePage>
        </div>
    );
}

export default DetailsPage;