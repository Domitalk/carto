import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
// import ResponsiveContainer from '../components/ResponsiveContainer'

// TO DO 
// Needs to conditionally render signin/login switch 
// This guy needs some front-end routing 

const LoginForm = () => (
    // <ResponsiveContainer>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Log-in to your account
        </Header>
        <Form size='large'>
            <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
            />

            <Button color='teal' fluid size='large'>
                Login
            </Button>
            </Segment>
        </Form>
        <Message>
            New to us? <a href='#'>Sign Up</a>
        </Message>
        </Grid.Column>
    </Grid>
    // </ResponsiveContainer>
)

export default LoginForm
