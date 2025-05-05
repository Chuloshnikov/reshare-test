import SearchInput from "./SearchInput";


const Header = () => {
  return (
    <div className="flex justify-between items-center">
        <h2 className="font-normal text-[13px] ml-5">Library</h2>
        <SearchInput/>
    </div>
  )
}

export default Header;