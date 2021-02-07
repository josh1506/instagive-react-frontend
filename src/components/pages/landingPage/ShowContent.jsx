import React from 'react';
import '../../../style/landingPage/showContent.css'

function ShowContent(props) {
    return (
        <div class='showContent'>
            {/* show content */}
            <div class='contentDetailsContainer'>
                <div className="contentDetails">
                    <h1>Welcome to InstaGive</h1>
                    <div>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</div>
                </div>
            </div>
        </div>
    );
}

export default ShowContent;