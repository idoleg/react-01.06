import React from "react";

export const ContactBlock = ({name, content, position}) => {
    return (
        position === "left"
            ?
            <div className="d-flex  w-50  alert alert-secondary shadow" role="alert">
                <strong>{name}<span>: &nbsp; </span> </strong> {content}
            </div>
            :
            <div className="d-flex ml-auto w-50  alert alert-primary shadow" role="alert">
                <strong>{name}<span>: &nbsp; </span> </strong> {content}
            </div>
    )
}