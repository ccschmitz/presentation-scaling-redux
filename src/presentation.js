// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#2c68ad',
    tertiary: '#fcce0e',
    quarternary: '#2c68ad',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Scaling Redux
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Best practices and patterns that scale with your team
          </Text>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={1} textColor="secondary">Redux is easy, amirite?!?</Heading>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={1} textColor="secondary">NO!!!</Heading>
        </Slide>

        <Slide>
          <p><b>What you read about</b></p>
          <List>
            <ListItem>Actions</ListItem>
            <ListItem>Reducers</ListItem>
            <ListItem>Store</ListItem>
          </List>
        </Slide>

        <Slide>
          <p><b>What you actually need to know about</b></p>
          <List>
            <ListItem>Dispatch</ListItem>
            <ListItem>Action Creators</ListItem>
            <ListItem>combineReducers</ListItem>
            <ListItem>bindActionCreators</ListItem>
            <ListItem>Async actions</ListItem>
            <ListItem>Provider</ListItem>
            <ListItem>Routing</ListItem>
            <ListItem>Debugging</ListItem>
            <ListItem>Middleware</ListItem>
            <ListItem>How do I get time travel debugging?</ListItem>
            <ListItem>Do I need sagas?</ListItem>
            <ListItem>How do I test all of this?!?</ListItem>
          </List>
        </Slide>

        <Slide>
          <p><b>Bottom line:</b> Redux is simple, but not easy.</p>
        </Slide>

        <Slide>
          <Heading size={2}>Reaction after early tech talks</Heading>
          <br/>
          <Heading>😥</Heading>
        </Slide>

        <Slide>
          <p>TODO: Use Drew as an example...</p>
        </Slide>

        <Slide>
          <p>Let's go over the basics</p>
        </Slide>

        <Slide>
          <p>Redux manages your app's state</p>
          <p>TODO: Take examples from docs: https://redux.js.org/basics/actions</p>
        </Slide>

        <Slide>
          <p>Drew approved ✅</p>
          <Image src="https://cl.ly/213I0Q3K2942/Image%202018-04-02%20at%209.48.08%20AM.png" />
        </Slide>
      </Deck>
    );
  }
}
