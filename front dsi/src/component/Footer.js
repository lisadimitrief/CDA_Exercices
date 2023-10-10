import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <footer style={{ marginTop:'20px', backgroundColor: 'grey', padding: '20px 0' }}>
            <Container>
                <p style={{ margin: 0, textAlign: 'center', color: 'white' }}>
                    © Tous droits réservés - {new Date().getFullYear()}
                </p>
            </Container>
        </footer>
    );
}

export default Footer;