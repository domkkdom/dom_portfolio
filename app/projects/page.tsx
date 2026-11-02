import RecentProjects from "@/components/ui/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="relative bg-white dark:bg-black-100 text-slate-900 dark:text-white flex justify-center overflow-clip items-center flex-col mx-auto sm:px-10 px-5 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className="pt-28">
          <RecentProjects />
        </div>
        <Footer />
      </div>
    </main>
  );
}
