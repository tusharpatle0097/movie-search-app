import React, { useContext } from 'react'
import { CallApiSearch } from '../components/context/CallApi'
const SearchButton = () => {
    const { searchTerm, setSearchTerm } = useContext(CallApiSearch);
    return (
        <>
            <div className='flex justify-center items-center  mt-5 lg:hidden'>
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" className='cutInput' placeholder='Search...' />
            </div>
        </>
    )
}

export default SearchButton