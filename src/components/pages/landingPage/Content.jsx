import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import imgWave from '../../../img/wave.png'

function Content(props) {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="md" style={{ display: 'flex', textAlign: 'center' }}>
                <div>
                    <img src="" alt="Image 1" />
                    <div>All organization are certified guaranteed</div>
                </div>
                <div>
                    <img src="" alt="Image 1" />
                    <div>Donate anonymously</div>
                </div>
                <div>
                    <img src="" alt="Image 1" />
                    <div>asdasdasdc adasd asd asd asdasdasd</div>
                </div>
                <div>
                    <img src="" alt="Image 1" />
                    <div>asdasdasdc adasd asd asd asdasdasd</div>
                </div>
            </Container>
            <img src={imgWave} alt="wave" style={{ opacity: 0.4, height: 200, width: '100%' }} />
        </div>
    );
}

export default Content;