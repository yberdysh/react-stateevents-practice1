# react-stateevents-hw

- App.js now has a state that holds a "favorites" array. This array is being passed to the Favorites component responsible for rendering DogCard components for every dog in the "favorites" array
- App also has an addToFavorites function that accepts an argument "dogObj" and adds that argument to the "favorites" array in state. This function is being passed to the DogsList component and is to be invoked by a DogCard when a User clicks on the Favorite/Unfavorite button
- a DogCard rendered by the Favorites component must have the ability to invoke a callback that removes that dog from the "favorites" array in the App.js state

# What are we practicing?

- changing state of a parent component
- passing a callback function as a prop to be used by a child component
- manipulating arrays in state
- rendering a component from multiple parents
- changing component behavior based on its parent
