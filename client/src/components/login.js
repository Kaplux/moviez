import React from 'react';
import { Form, Segment, Grid, Header, Message } from 'semantic-ui-react';

export default class Login extends React.Component {

    render() {
        const lastLoginInfos = this.props.lastLoginFailed ? <Message negative>Invalid email or password</Message> : "";

        return (
            <div>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            {' '}Log-in to your account
                        </Header>
                        {lastLoginInfos}
                        <Form size='large'>
                            <Segment raised>
                                <Form.Input placeholder='Email' />
                                <Form.Input placeholder='Password' type="password" />
                                <Form.Button color='teal'>Login</Form.Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us? <a href='#'>Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }

}