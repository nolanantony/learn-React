import Chat from "./chat.jsx"; // Importing the Chat component
function App() {
  const username = "chai aur code"
  return (
    <>
    <h1>Hello {username}</h1>
    <p>How are you doing? </p>
    <Chat /> {/* Using the Chat component here */}
    </>
  )
}

export default App
 