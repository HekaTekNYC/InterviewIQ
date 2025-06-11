import {Routes, Route, Navigate} from "react-router-dom"
import Home from "./routes/home/HomePage"
import Categories from "./routes/categories/CategoriesPage"

// Future features (preserved for later)
// import Auth from "./user/pages/Auth"
// import { AuthContext } from "./shared/context/auth-context"
// import MainNavigation from "./shared/components/Navigation/MainNavigation"
// import Register from "./components/Register"
// import UpdateFlashcard from "./components/flashcard/updateFlashcard/UpdateFlashcard"
// import UsersFlashcards from "./components/flashcard/pages/UsersFlashcards"
// import NewFlashcard from "./components/flashcard/pages/NewFlashcard"

function App() {
  // Future auth logic
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [userId, setUserId] = useState(false)

  // const login = useCallback((uid) => {
  //   setIsLoggedIn(true)
  //   setUserId(uid)
  // }, [])

  // const logout = useCallback(() => {
  //   setIsLoggedIn(false)
  //   setUserId(null)
  // }, [])

  return (
    // <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
    <>
      {/* <MainNavigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Show list of categories */}
        <Route path="/flashcards" element={<Categories />} />

        {/* Show flashcards for selected category */}
        {/* <Route path="/flashcards/:categoryId" element={<FlashcardsPage />} /> */}

        {/* Optional: flashcard detail for future */}
        {/* <Route path="/flashcards/:categoryId/:flashcardId" element={<FlashcardDetail />} /> */}

        {/* Redirect unknown paths to /flashcards */}
        <Route path="*" element={<Navigate to="/flashcards" />} />

        {/* Routes to restore later */}
        {/* <Route path="/flashcards/new" element={<NewFlashcard />} />
        <Route path="/flashcards/:userId" element={<UpdateFlashcard />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:userId/flashcards/*" element={<UsersFlashcards />} />
        <Route path="*" element={<Navigate to="/auth/login" />} /> */}
      </Routes>
    </>
    // </AuthContext.Provider>
  )
}

export default App
