
import { FormEvent, useState } from 'react';
import nodemailer from 'nodemailer';
import './styling.css';
interface Props {
    heading: string,
    paragraph: string
}

interface customerInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipcode: string;
}

function NavBtn({ heading, paragraph }: Props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [message, setMessage] = useState('');
    const [reparing, setReparing] = useState('');
    const [opener, setOpener] = useState('');
    const [newGarageDoor, setNewGarageDoor] = useState('');
    const [financing, setFinancing] = useState('');

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const customerInfo = {
            firstName, lastName, email, phone, zipCode, message
        };

        await fetch('http://localhost:3000/schedule-service', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerInfo)
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Email sent successfully');
                    // Reset form fields after successful submission
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setPhone('');
                    setZipCode('');
                    setMessage('');
                } else {
                    console.log(response.status);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }


    function scheduleEstimate(heading: string) {
        if (heading === 'Request Estimate')
            return (
                requestBtn_checkBox.map((_item, index) => {
                    return (
                        <div className='col-md-7'>
                            <div className="form-check" key={index}>
                                <input type="checkbox"
                                    className="form-check-input"
                                    id={_item.inputId}
                                    value={
                                        _item.inputId === 'reparing' ? reparing :
                                            _item.inputId === 'opener' ? opener :
                                                _item.inputId === 'newGarageDoor' ? newGarageDoor :
                                                    _item.inputId === 'financing' ? financing : ''
                                    }
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        switch (_item.inputId) {
                                            case 'reparing':
                                                setReparing(value);
                                                break;
                                            case 'opener':
                                                setOpener(value);
                                                break;
                                            case 'newGarageDoor':
                                                setNewGarageDoor(value);
                                                break;
                                            case 'financing':
                                                setFinancing(value);
                                                break;
                                            default:
                                                break;
                                        }
                                    }}
                                    required />
                                <label className="form-check-label" htmlFor={_item.htmlFor}>{_item.label}</label>
                            </div>
                        </div>

                    )
                })
            )
    }

    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container py-5">
                <h1 className="display-5 fw-bold">{heading}</h1>
                <p className="col-md-8 fs-4">{paragraph}</p>
                <form className="row g-4 mt-1 needs-validation" onSubmit={handleSubmit}>
                    {
                        formItems.map((_item, index) => {
                            return (
                                <div className={_item.className} key={index}>
                                    <label htmlFor={_item.labelHtmlFor} className="form-label">{_item.labelText}</label>
                                    <input
                                        type={_item.inputType}
                                        className="form-control"
                                        id={_item.inputId}
                                        value={
                                            _item.inputId === 'firstName' ? firstName :
                                                _item.inputId === 'lastName' ? lastName :
                                                    _item.inputId === 'email' ? email :
                                                        _item.inputId === 'zipCode' ? zipCode :
                                                            _item.inputId === 'phone' ? phone : ''
                                        }
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            switch (_item.inputId) {
                                                case 'firstName':
                                                    setFirstName(value);
                                                    break;
                                                case 'lastName':
                                                    setLastName(value);
                                                    break;
                                                case 'email':
                                                    setEmail(value);
                                                    break;
                                                case 'phone':
                                                    setPhone(value);
                                                    break;
                                                case 'zipCode':
                                                    setZipCode(value);
                                                    break;
                                                default:
                                                    break;
                                            }
                                        }} required />
                                </div>
                            )
                        })
                    }

                    {scheduleEstimate(heading)}

                    <div className="col-md-12">
                        <label htmlFor="message">Question Or Comments</label>
                        <textarea
                            className="form-control"
                            id="message" rows={4}
                            required
                            value={message}
                            onChange={(e) => { setMessage(e.target.value) }}></textarea>
                    </div>

                    <div className="col-12">
                        <button className="btn btn-info" type='submit'>Submit</button>
                    </div>
                </form>
            </div >
        </div >
    )
}
export default NavBtn;



const formItems = [
    {
        className: 'col-md-6',
        labelHtmlFor: 'firstName',
        labelText: 'First name',
        inputId: 'firstName',
        inputType: 'text'
    },
    {
        className: 'col-md-6',
        labelHtmlFor: 'lastName',
        labelText: 'Last name',
        inputId: 'lastName',
        inputType: 'text'
    },
    {
        className: 'col-md-6',
        labelHtmlFor: 'email',
        labelText: 'Email address',
        inputId: 'email',
        inputType: 'email'
    },
    {
        className: 'col-md-6',
        labelHtmlFor: 'phone',
        labelText: 'Phone number',
        inputId: 'phone',
        inputType: 'number'
    },
    {
        className: 'col-md-6',
        labelHtmlFor: 'zipCode',
        labelText: 'Zip code',
        inputId: 'zipCode',
        inputType: 'number'
    },
]
const requestBtn_checkBox = [
    {
        inputId: 'reparing',
        htmlFor: 'reparing',
        label: 'Repairing an Existing Garage Door'
    },
    {
        inputId: 'opener',
        htmlFor: 'opener',
        label: 'A New Garage Door Opener'
    },
    {
        inputId: 'newGarageDoor',
        htmlFor: 'newGarageDoor',
        label: 'A New Garage Door'
    },
    {
        inputId: 'financing',
        htmlFor: 'financing',
        label: 'Learning about Financing a New Garage Door'
    }

]
