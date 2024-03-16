// html form elements work diff than other dom 
// eles in react 
// form elements keep some internal state(peace of data)
// comp should know whats happening in form

// we make react state be the single source of the truth
// react controls : whats  shown(value of component)
// what happens when user types (kept in state)
import './App.css'
import UsernameForm from './UsernameForm'
import SignupForm from './SignupForm'
import BetterSignupForm from './BetterSignupForm'
import ShoppingListForm from './ShoppingListForm'
import ShoppingList from './ShoppingList'
function App() {

  return (
    <>
    <ShoppingList/>
    {/* <BetterSignupForm/> */}
    {/* <SignupForm/> */}
    {/* <UsernameForm/> */}
    </>
  )
}

export default App
