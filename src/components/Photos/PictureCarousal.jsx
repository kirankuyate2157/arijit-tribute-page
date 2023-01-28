import React from "react";
const PictureCarousalCard = (props) => {
    return (
        <>
            <div className="w-64 lg:w-80 h-80 lg:h-96 relative px-4 overflow-hidden">
                <div className="w-full h-full relative">
                    <img
                        src={props.image}
                        alt="Argit Singh"
                        className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
                    />

                    <div
                        className="w-full h-full absolute inset-0  rounded-lg"
                        style={{
                            background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
                        }}
                    />
                </div>

            </div>
        </>
    );
};

export default PictureCarousalCard;
