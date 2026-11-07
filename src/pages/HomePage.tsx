import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-dark text-white">
        <div className="min-h-screen">
          <Sidebar />
          <main className="min-w-0 flex-1 lg:ml-64">
            <Header />
          </main>
        </div>
      </div>
    </>
  );
}
