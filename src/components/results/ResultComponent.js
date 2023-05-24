import React, {useState} from 'react';
import {InputComponent} from "../input/InputComponent";
import {Card, ProgressBar} from "react-bootstrap";
import {AlertMessageComponent} from "../alert/AlertMessageComponent";
import Button from "react-bootstrap/Button";

const formatElapsedTime = (elapsedMinutes) => {
    return `${parseInt(elapsedMinutes / 60)}hrs:${parseInt(elapsedMinutes % 60)}mins`
}

export const ResultComponent = () => {
    const [inputValues, setInputValues] = useState({tool: '', vibrationLevel: 0, minutes: 0});
    const [result, setResult] = useState("Let's get started, use the calculator to find out your vibration exposure!");
    const [variant, setVariant] = useState("success");
    const [consumedPoints, setConsumedPoints] = useState(0);
    const [consumedPointsPercentage, setConsumedPointsPercentage] = useState(0);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setInputValues(prevValues => ({...prevValues, [name]: value}));
    }

    const handleButtonClick = (event) => {
        const {tool, vibrationLevel, minutes} = inputValues;

        const pointsPerHour = vibrationLevel * vibrationLevel * 2;
        const pointsPerMinute = pointsPerHour / 60.0;
        const eavMaximumTime = 100.0 / pointsPerMinute;
        const elvMaximumTime = 400.0 / pointsPerMinute;

        const consumedPoints = Math.round(pointsPerMinute * minutes);
        const consumedPointsPercentage = Math.round(consumedPoints / 400.0 * 100.0);

        setConsumedPoints(consumedPoints);
        setConsumedPointsPercentage(consumedPointsPercentage);

        if (consumedPointsPercentage >= 60 && consumedPointsPercentage <= 80) {
            setVariant("warning")
        } else if (consumedPointsPercentage > 80) {
            setVariant("danger")
        } else {
            setVariant("success")
        }

        setResult(`This ${tool} with a vibration output of ${vibrationLevel}m/s² reaches the
                                EAV (Exposure Action Value) in ${formatElapsedTime(eavMaximumTime)} and the ELV (Exposure
                                Limit Value)
                                in ${formatElapsedTime(elvMaximumTime)}.
                                You have used ${consumedPoints} points on this tool, which is ${consumedPointsPercentage}%
                                of the maximum daily allowance!`);
    };


    const {tool, vibrationLevel, minutes} = inputValues;
    const isButtonEnabled = tool !== '' && vibrationLevel > 0 && minutes > 0;

    return (
        <div>
            <Card className="m-4">
                <InputComponent handleInputChange={handleInputChange}/>
                <div className="display-component">
                    <Button className="p-2 mb-3" onClick={handleButtonClick}
                            disabled={!isButtonEnabled}>Calculate</Button>
                </div>
            </Card>
            <Card className="m-4">
                <Card.Body>
                    <Card.Title>Result</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{consumedPointsPercentage}%</Card.Subtitle>
                    <ProgressBar now={consumedPointsPercentage} min={0}
                                 variant={variant}/>
                    <Card.Text className="mt-3">
                        {result}
                    </Card.Text>
                </Card.Body>
            </Card>
            <AlertMessageComponent consumedPoints={consumedPoints}/>
        </div>
    )
        ;
};