import { Sidebar } from "../components/layout/Sidebar";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-dark text-white">
        <div className="min-h-screen">
          <Sidebar />;
        </div>
      </div>
    </>
  );
}
