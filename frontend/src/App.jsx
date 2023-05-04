import { useState } from "react";
import "./App.css"

// Utilizando ChatEngine para crear la interfaz. 
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  // A continuación debo crear dos componentes 'AuthPage' y 'ChatsPage' para que esto funcione. 
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;