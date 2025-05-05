import LibraryItem from './LibraryItem';
import { LibraryDataProps } from '../lib/constants';

interface LibraryItemsContainerProps {
  data: LibraryDataProps[];
}

const LibraryItemsContainer = ({ data }: LibraryItemsContainerProps) => {
  return (
    <div>
      {data?.map((dataItem, index) => {
  const isLast = index === data.length - 1;
  return (
    <div key={index} className={!isLast ? "border-b-[1px] border-[#E1E1E1]" : ""}>
      <LibraryItem 
        icon={dataItem.icon} 
        name={dataItem.name} 
        date={dataItem.date} 
        avatar={dataItem.avatar}
        id={dataItem.id}
      />
    </div>
  );
})}
    </div>
  )
}

export default LibraryItemsContainer;