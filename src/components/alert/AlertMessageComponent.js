import React from "react";

export const AlertMessageComponent = ({consumedPoints}) => {
    let points = consumedPoints;
    let message;

    if (points <= 100) {
        message = "Looking good! So far, you're under the exposure action value - keep working safely.";
    } else if (points < 400) {
        message = "Be aware! You're above the exposure action value - look for ways to control vibration to reduce your risk.";
    } else {
        message = "Stop work! You've reached the exposure limit value - no more vibrations for you today.";
    }

    let className;

    if (points <= 100) {
        className = "alert alert-success";
    } else if (points < 400) {
        className = "alert alert-warning";
    } else {
        className = "alert alert-danger";
    }

    return (
        <div className="m-4">
            <div className={className} role="alert">
                {message}
            </div>
        </div>
    );
}