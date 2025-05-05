import SearchInput from "./SearchInput";


const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-[1px] border-[#E1E1E1]">
        <h2 className="font-normal text-[13px] ml-5">Library</h2>
        <SearchInput/>
    </div>
  )
}

export default Header;