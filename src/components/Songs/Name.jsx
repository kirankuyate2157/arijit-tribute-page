import React from 'react'

const Name = (props) => {
    return (
        <>

            <div className="hover:bg-red-600 text-white font-bold  w-full flex  py-5 ">
                <h1 className=" px-3 ">{props.index < 9 ? '0' + (props.index + 1) : props.index + 1}</h1>
                <div className=" flex flex-row w-full justify-between px-5">
                    <h1>{props.name}</h1>
                    <h2>{props.duration}</h2>
                </div>
            </div>



        </>
    )
}

export default Name;