import React from "react";
import "./InputComponentStyles.css";
import {Form} from "react-bootstrap";
export const InputComponent = ({handleInputChange}) => {

    return (
        <div className="calculator-form m-4">
            <div className="mt-2">
                <Form.Label className="m-0 p-0">Tool</Form.Label>
                <Form.Text className="form-text d-block" id="input-tool" muted>
                    What tool are you using?
                </Form.Text>
                <Form.Control
                    type="text"
                    name="tool"
                    placeholder="e.g. Hammer drill"
                    required={true}
                    onChange={handleInputChange}
                />
            </div>

            <div className="mt-2">
                <Form.Label>Output (m/s²)</Form.Label>
                <Form.Text className="form-text d-block" id="input-output" muted>
                    What vibration level?
                </Form.Text>
                <Form.Control
                    min={1}
                    max={100}
                    type="number"
                    name="vibrationLevel"
                    placeholder="e.g. 10"
                    required={true}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <Form.Label className="m-0 p-0">Minutes</Form.Label>
                <Form.Text className="form-text d-block" id="input-minutes" muted>
                    How long will you use it?
                </Form.Text>
                <Form.Control
                    min={1}
                    type="number"
                    name="minutes"
                    placeholder="e.g. 20"
                    onChange={handleInputChange}
                />
            </div>
        </div>
    )
}