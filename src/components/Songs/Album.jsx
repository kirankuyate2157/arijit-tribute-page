import React from 'react'

const Album = (props) => {
    return (
        <>
            <div className="py-2">
                <div className=" md:px-8 px-4 flex justify-center  hover:border-x-2 hover:border-red-500">
                    <img src={props.image}
                        alt={props.name}
                        className="md:h-46 lg:h-64 h-20 w-64 " />

                </div>
            </div>
        </>
    )
}

export default Album;