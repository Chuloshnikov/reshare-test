import LibrarySectionHeader from "./components/LibrarySectionHeader";
import SectionHeader from "./components/SectionHeader";


export default function Home() {
  return (
    <div className="py-5 px-10 flex flex-col gap-3">
      <LibrarySectionHeader/>
      <SectionHeader title="All"/>
    </div>
  );
}
