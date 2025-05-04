import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f1d4b3] font-sans">
      <div className="relative z-0">
        <BackgroundHeading />

        <main className="z-10 grid h-[636px] w-[972px] grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden rounded-[8px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.08)]">
          <Header />
          <TodoList />
          <Sidebar />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
