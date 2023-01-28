import React from 'react'

const Details = (props) => {

    return (
        <><div className="md:w-4/5  my-8 text-gray-300 md:p-10 p-2 flex flex-row">

            <div className=" w-9/12  md:px-8 md:  pl-5 md:pr-8">
                <h1 className="font-bold text-3xl md:text-6xl drop-shadow-2xl  md:mb-10 text-red-800 ">{props.title}</h1>

                {props.para.map(p => (
                    <p className='flex justify-start mt-6  md:pr-12 text-sm  sm:text-xl'>
                        {p}
                    </p>
                ))
                }


            </div>
            <aside
                style={{ height: "fit-content" }}
                className=" md:w-4/12 w-1/3 sticky md:mx-5 top-2 mt-96 md:mx-5  bg-red-700  shadow-xl flex flex-col md:gap-4"
            >


                <img src={props.image}
                    alt="Argit singh"
                    className='  ml-2 mb-2 sticky md:ml-6 md:mb-6 ' />

            </aside >


        </div></>
    )
}

export default Details;
