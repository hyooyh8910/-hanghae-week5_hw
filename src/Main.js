import React from "react";
import { Toast } from "react-bootstrap";
import ToastHeader from 'react-bootstrap/ToastHeader'

function Main() {
    return (
        <div>
            <Toast>
                <ToastHeader closeButton="true">
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </ToastHeader>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
        </div>
    );
}

export default Main;