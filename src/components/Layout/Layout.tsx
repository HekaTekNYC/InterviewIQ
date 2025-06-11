import React, {ReactNode} from "react"
import Navbar from "../Navigation/NavbarMain/NavbarMain"

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => (
  <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
    <Navbar />
    <main
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        marginTop: "70px",
      }}
    >
      {children}
    </main>
    {/* <Footer /> */}
  </div>
)

export default Layout
