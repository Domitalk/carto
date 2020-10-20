import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import ResponsiveContainer from '../components/ResponsiveContainer'


const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
// const HomepageHeading = ({ mobile }) => (
//   <Container text>
//     <Header
//       as='h1'
//       content='Find your issues'
//       inverted
//       style={{
//         fontSize: mobile ? '2em' : '4em',
//         fontWeight: 'normal',
//         marginBottom: 0,
//         marginTop: mobile ? '1.5em' : '3em',
//       }}
//     />
//     <Header
//       as='h2'
//       content='Put your money where your heart is'
//       inverted
//       style={{
//         fontSize: mobile ? '1.5em' : '1.7em',
//         fontWeight: 'normal',
//         marginTop: mobile ? '0.5em' : '1.5em',
//       }}
//     />
//     <Button primary size='huge'>
//       Get Started
//       <Icon name='right arrow' />
//     </Button>
//   </Container>
// )

// HomepageHeading.propTypes = {
//   mobile: PropTypes.bool,
// }

// /* Heads up!
//  * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
//  * It can be more complicated, but you can create really flexible markup.
//  */
// class DesktopContainer extends Component {
//   state = {}

//   hideFixedMenu = () => this.setState({ fixed: false })
//   showFixedMenu = () => this.setState({ fixed: true })

//   render() {
//     const { children } = this.props
//     const { fixed } = this.state

//     return (
//       <Media greaterThan='mobile'>
//         <Visibility
//           once={false}
//           onBottomPassed={this.showFixedMenu}
//           onBottomPassedReverse={this.hideFixedMenu}
//         >
//           <Segment
//             inverted
//             textAlign='center'
//             style={{ minHeight: 700, padding: '1em 0em' }}
//             vertical
//           >
//             <Menu
//               fixed={fixed ? 'top' : null}
//               inverted={!fixed}
//               pointing={!fixed}
//               secondary={!fixed}
//               size='large'
//             >
//               <Container>
//                 <Menu.Item as='a' active>
//                   Home
//                 </Menu.Item>
//                 <Menu.Item as='a'>Issues</Menu.Item>
//                 <Menu.Item as='a'>Elections</Menu.Item>
//                 <Menu.Item as='a'>Get Involved</Menu.Item>
//                 <Menu.Item position='right'>
//                   <Button as='a' inverted={!fixed}>
//                     Log in
//                   </Button>
//                   <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
//                     Sign Up
//                   </Button>
//                 </Menu.Item>
//               </Container>
//             </Menu>
//             <HomepageHeading />
//           </Segment>
//         </Visibility>

//         {children}
//       </Media>
//     )
//   }
// }

// DesktopContainer.propTypes = {
//   children: PropTypes.node,
// }

// class MobileContainer extends Component {
//   state = {}

//   handleSidebarHide = () => this.setState({ sidebarOpened: false })

//   handleToggle = () => this.setState({ sidebarOpened: true })

//   render() {
//     const { children } = this.props
//     const { sidebarOpened } = this.state

//     return (
//       <Media as={Sidebar.Pushable} at='mobile'>
//         <Sidebar.Pushable>
//           <Sidebar
//             as={Menu}
//             animation='overlay'
//             inverted
//             onHide={this.handleSidebarHide}
//             vertical
//             visible={sidebarOpened}
//           >
//             <Menu.Item as='a' active>
//               Home
//             </Menu.Item>
//             <Menu.Item as='a'>Issues</Menu.Item>
//             <Menu.Item as='a'>Elections</Menu.Item>
//             <Menu.Item as='a'>Get Involved</Menu.Item>
//             <Menu.Item as='a'>Log in</Menu.Item>
//             <Menu.Item as='a'>Sign Up</Menu.Item>
//           </Sidebar>

//           <Sidebar.Pusher dimmed={sidebarOpened}>
//             <Segment
//               inverted
//               textAlign='center'
//               style={{ minHeight: 350, padding: '1em 0em' }}
//               vertical
//             >
//               <Container>
//                 <Menu inverted pointing secondary size='large'>
//                   <Menu.Item onClick={this.handleToggle}>
//                     <Icon name='sidebar' />
//                   </Menu.Item>
//                   <Menu.Item position='right'>
//                     <Button as='a' inverted>
//                       Log in
//                     </Button>
//                     <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
//                       Sign Up
//                     </Button>
//                   </Menu.Item>
//                 </Menu>
//               </Container>
//               <HomepageHeading mobile />
//             </Segment>

//             {children}
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </Media>
//     )
//   }
// }

// MobileContainer.propTypes = {
//   children: PropTypes.node,
// }

// const ResponsiveContainer = ({ children }) => (
//   /* Heads up!
//    * For large applications it may not be best option to put all page into these containers at
//    * they will be rendered twice for SSR.
//    */
//   <MediaContextProvider>
//     <DesktopContainer>{children}</DesktopContainer>
//     <MobileContainer>{children}</MobileContainer>
//   </MediaContextProvider>
// )

// ResponsiveContainer.propTypes = {
//   children: PropTypes.node,
// }

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Find Issues That Matter 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              You can discover issues and legistation that's important to you.
              Research and donate to the things that you care about.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Discover What You Can Vote On 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Whether it's a proposition or locally elected official, find out where your vote counts.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I'm making my voice heard"
            </Header>
            <p style={{ fontSize: '1.33em' }}>I decide, and not just what party I belong to.</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I didn't even know about all of the local elections I was eligible to vote for."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Brosive</b> Chief BernieBro
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Find Out More, Make Your Participation Noticed.
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Don't let the things you care about be ignored. Don't become just another demographic.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Hot Issues</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          The 2020 Presidential Election 
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          The Presidential Election this year is going to have a bigger impact that ever before due to the potential implications it will have on the Senate in a hisotorically crucial election that will potentially determine the future of both parties and their legacies.
        </p>
        <Button as='a' size='large'>
          More About The Election
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>About Us</List.Item>
                {/* <List.Item as='a'>Gazebo Plans</List.Item> */}
              </List>
            </Grid.Column>
            {/* <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column> */}
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Non-Partisan 
              </Header>
              <p>
                We are dedicated to spreading the truth. Because of that, we don't believe in politically balanced views as comparing one party to another is by definition a subjective analysis rather than an objective and factual one. 
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout