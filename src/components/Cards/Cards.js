import React, { useContext, useState } from 'react';
import { CallApiSearch } from '../context/CallApi';

const Cards = (props) => {
    const { data } = useContext(CallApiSearch);

    console.log(data, '//ee')
    return (
        <>
            {
              data &&  data.map((movie, index) => {
                    return (
                        <div kay={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-[#481257] ">
                            <img className="w-full" src={movie.Poster} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{movie.Title}</div>
                                <p className="text-white text-base">
                                    Year: {movie.Year}
                                </p>
                                <p className="text-white text-base">
                                    Type: {movie.Type}
                                </p>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Cards