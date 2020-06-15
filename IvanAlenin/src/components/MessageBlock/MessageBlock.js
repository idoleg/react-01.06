import React from "react";

export const MessageBlock = ({name, content, position}) => {
    return (
        position === "left"
            ?
            <div className="media w-75 mb-3">
                <p className="rounded-circle mt-auto text-monospace">
                    {name.substr(0, 1).toUpperCase()}
                </p>
                {/*<img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"*/}
                {/*    alt="user" width="50" className="rounded-circle"/>*/}
                <div className="media-body ml-3">
                    <div className="bg-light rounded px-3 py-2 shadow-lg">
                        <p className="mb-0 text-muted">{content}</p>
                    </div>
                    <p className="small text-muted text-shadow-g">{name}&nbsp; 12:00 PM | Aug 13</p>
                </div>
            </div>
            :
            <div className="media ml-auto w-75 mb-3">
                <div className="media-body ml-3">
                    <div className="bg-success rounded px-3 py-2 shadow-lg">
                        <p className="mb-0 text-light ">{content}</p>
                    </div>
                    <p className="small text-muted text-shadow-g">{name}&nbsp; 12:00 PM | Aug 13</p>
                </div>
            </div>


    )
}


