import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import SearchButton from '../../buttons/SearchButton';

const Main = () => {

    return (
        <div>
            <SearchButton />
            <div class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 my-3 mx-5 justify-center">
                <Cards />
            </div>
        </div>
    )
}

export default Main