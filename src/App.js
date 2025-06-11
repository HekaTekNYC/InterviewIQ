import {Routes, Route, Outlet, Navigate} from "react-router-dom"
import React, {useState, useCallback} from "react"
import Home from "./pages/Home"

import Auth from "./user/pages/Auth"

import {AuthContext} from "./shared/context/auth-context"
import MainNavigation from "./shared/components/Navigation/MainNavigation"
import Register from "./components/Register"
import UpdateFlashcard from "./components/flashcard/updateFlashcard/UpdateFlashcard"
import UsersFlashcards from "./components/flashcard/pages/UsersFlashcards"
import NewFlashcard from "./components/flashcard/pages/NewFlashcard"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState(false)

  const login = useCallback(uid => {
    setIsLoggedIn(true)
    setUserId(uid)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
    setUserId(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcards/new" element={<NewFlashcard />} />
        <Route path="/flashcards/:userId" element={<UpdateFlashcard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:userId/flashcards/*" element={<UsersFlashcards />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </AuthContext.Provider>
  )
}

export default App
