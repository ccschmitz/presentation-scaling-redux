# Scaling Redux

## Outline

* Why
  * Getting started with Redux can be overwhelming - so many files!
    * All the examples you read talk about how easy it is, but still somewhat complex even at
    * Do I need to test each of these?!?
  * We did some internal tech talks early on and it was not well-received - too intimidating.
  * Redux is simple, but it's not easy.
  * The hardest part of adopting Redux was finding conventions and patterns that worked for our team.
* Core problems
  * State design - inconsistency across pages
    * Inconsistency - not reusable
    * Tons of extra effort deciding where to put things
    * Railroad analogy
  * Single store connection passing data down
    * Prop drilling problem
    * Frustrating when you're 4 levels deep and realize you need some additional data and have to touch files at every level
    * *This is not a performance problem*, and *can* be more efficient than having a single connection at the top level
      * Run your own perf tests - I'm not a doctor
  * Getting data into the store
    * Show Redux actions file for a resource - we don't need all this, it's the same across every actions file!
    * Show entity actions
    * We consider it a code smell if you need to write a custom action or reducer
  * Getting data out
    * Lots of complex logic in `mapStateToProps`
    * Lots of things that needed to be shared across the app
    * Potential performance bottlenecks
    * Selectors to the rescue!
  * Manipulating data
    * Tracking changes, dirty status, and validation errors
    * redux-form can help, but adds another level of complexity
    * We have developed a library of components that hide most of the form setup so developers can focus on the requirements of their form with our pre-built components
    * We have unique concerns because of Rails
    * Again, shared actions were a huge help here
* Actionable suggestions
  * Talk to your team and figure out what parts they are struggling with
  * Look for opportunities to make the right thing easy to do by abstracting things away
  * Build it at least twice and look for patterns before abstracting
  * Normalize your state
  * Don't write reducers and actions for every resource in your application
  * Share logic across your app for getting data out of the store
  * Use a library of form components that handle the hard part of managing data
    * Check out redux-form and final-form (I'm sure there are a lot more!)
* Doing all this will increase your velocity and make it manageable for your team to be productive with Redux.
  * Remember Drew? https://cl.ly/213I0Q3K2942
