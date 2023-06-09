import React, { useState } from 'react';
import { IProduct } from "../../model";


type CardPropsDetail = {
    data: IProduct;
};

export const Card = ({ data }: CardPropsDetail) => {

    const [More, setMore] = useState<boolean>(false);
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">

            <img className="rounded-t-lg w-[300px] h-[300px]" src={data.image} alt="" />

            <div className="p-5">

                <button onClick={() => { setMore(!More) }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {
                        !More ? "Show description" : "Hide"
                    }
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>

                {
                    More ? (<>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
                    </>) : ("")
                }
            </div>
        </div>

    )
}

export default Card
