import { LeftSidebar, RightSidebar, MainContent, TopBar } from "./components"

function App() {
  return (
    <div className="flex h-screen w-screen flex-row">
      <LeftSidebar />
      <div className="flex h-full flex-col bg-white">
        <TopBar />
        <div className="flex flex-1 flex-grow">
          <MainContent />
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default App
