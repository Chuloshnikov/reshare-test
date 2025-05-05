import LibraryItemsContainer from "./components/LibraryItemsContainer";
import LibrarySectionHeader from "./components/LibrarySectionHeader";
import SectionHeader from "./components/SectionHeader";

import {LibraryAllData, LibraryVisitedData} from "./lib/constants";


export default function Home() {
  return (
    <div className="py-5 px-10 flex flex-col gap-3">
      <LibrarySectionHeader/>
      <LibraryItemsContainer data={LibraryVisitedData}/>
      <SectionHeader title="All"/>
      <LibraryItemsContainer data={LibraryAllData}/>
    </div>
  );
}
