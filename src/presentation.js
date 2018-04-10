import React from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';
import * as codeExamples from './assets/code-examples';

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

        <Slide>
          Reading documentation and tutorials, it's easy to think...
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={1} textColor="secondary">Redux is easy, amirite?!?</Heading>
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
          <Text>People felt overwhelmed by:</Text>
          <List>
            <ListItem>The number of new tools and concepts</ListItem>
            <ListItem>Lack of standards and conventions</ListItem>
            <ListItem>Amount of decisions that need to be made when building a page in React</ListItem>
          </List>
        </Slide>

        <Slide>
          <div style={{ display: 'flex' }}>
            <div>
              <Heading size={2}>Meet Drew</Heading>
              <List>
                <ListItem>One of our first engineers</ListItem>
                <ListItem>Extremely smart, talented and productive</ListItem>
                <ListItem>Hated Redux</ListItem>
              </List>
            </div>
            <div>
              <Image
                src="https://pbs.twimg.com/profile_images/728932782144000000/gn-Wza_t_400x400.jpg"
                alt="Drew"
              />
            </div>
          </div>

          <Notes>
            At this point our team is extremely productive in our new FE, and
            this talk goes over the keys that have made us successful in this
            new ecosystem.
          </Notes>
        </Slide>

        <Slide>
          The keys to making our team productive with Redux
        </Slide>

        <Slide bgColor="tertiary">
          <Heading textColor="secondary">
            State Design
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3}>Our Path:</Heading>
          <List transition={['fade']}>
            <Appear><ListItem>Minimum Viable React, TypeScript and Redux</ListItem></Appear>
            <Appear><ListItem>Server rendering</ListItem></Appear>
            <Appear><ListItem>Writing new pages in React</ListItem></Appear>
            <Appear><ListItem>Teardown and initialize on every request</ListItem></Appear>
            <Appear><ListItem>Building a library of reusable actions/reducers for each entity type</ListItem></Appear>
            <Appear><ListItem>Each page got its own reducer</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '48%' }}>
              <Text textSize={24}>Profile Store</Text>
              <CodePane
                lang="js"
                source={codeExamples.profileStore}
                overflow = "overflow"
              />
            </div>

            <div style={{ width: '48%' }}>
              <Text textSize={24}>Interview Schedule Store</Text>
              <CodePane
                lang="js"
                source={codeExamples.interviewScheduleStore}
                overflow = "overflow"
              />
            </div>
          </div>
        </Slide>

        <Slide>
          <List>
            <ListItem>Not reusable</ListItem>
            <ListItem>Lots of time spent designing state</ListItem>
          </List>
        </Slide>

        <Slide bgImage="railroad-tracks.jpg" bgDarken={0.5}>
          <Heading>The Australian Railroad System</Heading>

          <Notes>
            <p>I don't know why I remember this, but someone once told me about the
            history of the Australian railroad system. Bear with me here...</p>

            <p>Individual colonies were responsible for managing their own sections
            of the railroad, and they didn't agree on a standard width between
            each track, called a gauge. This mean they needed to build all kinds
            of custom equipment and it could only operate on the portion of the
            tracks that were the correct gauge.</p>

            <p>Nothing was reusable, and they spent tons of extra effort designing things multiple times for different gauges.</p>

            <p>This is still causing problems today!</p>
          </Notes>
        </Slide>

        <Slide>
          <Text textSize={24}>Global Store</Text>

          <CodePane
            textSize={15}
            lang="js"
            source={codeExamples.globalStore}
            overflow = "overflow"
          />

          <Notes>
            Even though we weren't a single page app, we wanted to start acting
            like one. I think this is going to be the case for most people
            transitioning from a server rendered app.
          </Notes>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading textColor="secondary">
            Populating the Store
          </Heading>
        </Slide>

        <Slide>
          <Text textSize={24}>Actions (Before)</Text>
          <CodePane
            lang="js"
            source={codeExamples.actionsBefore}
            overflow = "overflow"
          />
        </Slide>

        <Slide>
          <Text textSize={24}>Reducer (Before)</Text>
          <CodePane
            lang="js"
            source={codeExamples.reducerBefore}
            overflow = "overflow"
          />
        </Slide>

        <Slide>
          <Text textSize={24}>Actions (After)</Text>
          <CodePane
            textSize={16}
            lang="js"
            source={codeExamples.entityActions}
            overflow = "overflow"
          />
        </Slide>

        <Slide>
          <Text textSize={24}>Reducer (After)</Text>
          <CodePane
            textSize={16}
            lang="js"
            source={codeExamples.entitiesReducer}
            overflow = "overflow"
          />
        </Slide>

        <Slide>
          <Text textSize={24}>Fetching Data</Text>
          <CodePane
            textSize={16}
            lang="js"
            source={codeExamples.fetchEntity}
            overflow = "overflow"
          />

          <Notes>It's almost considered a code smell if you're writing your own actions and reducers.</Notes>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading textColor="secondary">
            Connected Components
          </Heading>
        </Slide>

        <Slide>
          One connected component to rule them all
        </Slide>

        <Slide>
          We got bad advice!
        </Slide>

        <Slide>
          More connections made everything easier
        </Slide>

        <Slide>
          and we get better performance!
        </Slide>

        <Slide>
          <Image src="performance-1.png" />
          <Notes>This is what the render path looked like for us with a single connected component.</Notes>
        </Slide>

        <Slide>
          <Image src="performance-2.png" />
          <Notes>Making the connection lower in the hierarchy got us a more ideal render path.</Notes>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading textColor="secondary">
            Getting Data Into Components
          </Heading>
        </Slide>

        <Slide>
          With all these new connections, we have a lot more <Code>mapStateToProps</Code>
        </Slide>

        <Slide>
          <CodePane
            lang="js"
            textSize={16}
            source={codeExamples.messyMapStateToProps}
            overflow = "overflow"
          />
        </Slide>

        <Slide>
          <CodePane
            lang="js"
            textSize={16}
            source={codeExamples.selectorsMapStateToProps}
            overflow = "overflow"
          />
        </Slide>

        <Slide>
          <Text>Why is this great?</Text>
          <List>
            <ListItem>Reusable</ListItem>
            <ListItem>Testable</ListItem>
            <ListItem>Optimized</ListItem>
            <ListItem>Standardized</ListItem>
          </List>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading textColor="secondary">
            Manipulating Data
          </Heading>
        </Slide>

        <Slide>
          In our app, creates and updates are typically performed via forms.
        </Slide>

        <Slide>
          Shared actions help with the request, but how do we track changes? Optimistic updates? Error handling stuff?
        </Slide>

        <Slide>
          Redux Form lays the foundation for our reusable components
        </Slide>

        <Slide>
          <Text>Form Component Definition</Text>
          <CodePane
            lang="js"
            textSize={16}
            source={codeExamples.formFieldExample}
            overflow = "overflow"
          />
        </Slide>

        <Slide>
          <Text>Example Form</Text>
          <CodePane
            lang="js"
            textSize={20}
            source={codeExamples.formExample}
            overflow = "overflow"
          />
        </Slide>

        <Slide bgColor="tertiary">
          <Heading textColor="secondary">
            Caching
          </Heading>
        </Slide>

        <Slide>
          Why fetch data twice?
        </Slide>

        <Slide>
          <Text>Global Store w/ Requests</Text>
          <CodePane
            lang="js"
            textSize={16}
            source={codeExamples.globalStoreWithRequests}
            overflow = "overflow"
          />
        </Slide>

        <Slide>
          <Text>Changes to <Code>fetchEntity</Code></Text>
          <CodePane
            lang="js"
            textSize={16}
            source={codeExamples.fetchEntityAndStoreRequest}
            overflow = "overflow"
          />
        </Slide>

        <Slide>
          What if we let our components declare the data they need and we handle the rest?
        </Slide>

        <Slide>
          <Text>Declarative Data Fetching</Text>
          <CodePane
            lang="js"
            textSize={16}
            source={codeExamples.declarativeDataFetching}
            overflow = "overflow"
          />
        </Slide>

        <Slide bgColor="tertiary">
          <Heading textColor="secondary">
            Getting Feedback
          </Heading>
        </Slide>

        <Slide>
          <Text>Feedback Channels</Text>
          <List>
            <ListItem>Code Reviews</ListItem>
            <ListItem>Slack</ListItem>
            <ListItem>Pair Programming</ListItem>
            <ListItem>Architecture Design Docs</ListItem>
            <ListItem>NPS Survey</ListItem>
          </List>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading textColor="secondary">
            Remember Drew?
          </Heading>
        </Slide>

        <Slide>
          <p>He approves 😎</p>
          <Image src="drew-approved.png" />
        </Slide>

        <Slide>
          <Text>
            Chris Schmitz
            (<a href="http://twitter.com/ccschmitz">@ccschmitz</a>)
          </Text>
          <br />
          <Text>
            <a href="http://joinhandshake.com">http://joinhandshake.com</a>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
