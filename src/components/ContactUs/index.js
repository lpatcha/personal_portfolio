import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect, use } from 'react';
import { useRef } from 'react';
import {submitLeadInfo} from '../../utilities/index';
import Alert from '@mui/material/Alert';

export default function ContactUs(){

    const email = useRef(null);
    const firstName = useRef(null);
    const lastName = useRef(null);
    const phoneNumber = useRef(null);
    const comment = useRef(null);
    let timer = useRef(null);

     useEffect(()=>{
        return ()=>{
            if(timer.current)
                clearTimeout(timer.current);
        }
    },[]);

    // const clearFromError = (validate, timer)=>{
    //    timer.current = setTimeout(()=>{
    //         if(validate){
    //             setErrors({});
    //         }
    //     },5000);
    // }

    const requiredValidation = (value, type = "required")=>{
        if(!value.trim())
            return false;
        
        if(type == "email"){
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(value)
        }
            
        return true;
    }

    const phoneNumberValidation = (value) => {
        const regex = /^\+?1?\s?(\([0-9]{3}\)|[0-9]{3})[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;
        return regex.test(value);
    }

    const [errors, setErrors] = useState({
        
    });


    const formSubmit = async (e) => {
        e.preventDefault();
        let newErrors = {};

        if(!requiredValidation(firstName?.current?.value || ''))
            newErrors.firstName = true;

        if(!requiredValidation(lastName?.current?.value || ''))
            newErrors.lastName = true;

        if(!requiredValidation(phoneNumber?.current?.value || ''))
            newErrors.phoneNumber = true;

        if(!requiredValidation(email?.current?.value, "email"))
            newErrors.email = true;

      
        if(!requiredValidation(comment?.current?.value))
            newErrors.comment = true;

        if(!phoneNumberValidation(phoneNumber?.current?.value))
            newErrors.phoneNumber = true;


        if(newErrors.firstName || newErrors.lastName || newErrors.email || newErrors.comment || newErrors.phoneNumber)
        {
            //don't perform api call
            setErrors(newErrors);
            return;
        }

        let form = {
            firstName: firstName?.current?.value,
            lastName: lastName?.current?.value,
            email: email?.current?.value,
            phoneNumber: phoneNumber?.current?.value,
            comment: comment?.current?.value
        }
        
        let result = await submitLeadInfo(form);
    

        if(!result){
            newErrors.failedToInsert = true;
            timer  = setTimeout(()=>{
                    setErrors({});
            },5000);
        }
        else{
            newErrors.success = "Record inserted successfully";
            timer  = setTimeout(()=>{
                    setErrors({});
            },5000);

            firstName?.current && (firstName.current.value= '');
            lastName?.current && (lastName.current.value= '');
            phoneNumber?.current && (phoneNumber.current.value = '');
            email?.current && (email.current.value = '');
            comment?.current && (comment.current.value = '');
            phoneNumber?.current && (phoneNumber.current.value = '');
        }

        setErrors(newErrors);
    }

    return (<>
    <div >
        <form onSubmit={formSubmit} className = "max-w-[500px] rounded-lg mx-auto bg-stone-50 p-4">
            {errors.failedToInsert && <div><span className='text-red-950'>Something went wrong while inserting the record please try later</span></div>}
            {errors.success && <Alert severity='success'>{errors.success}</Alert>}
            <div className = 'mt-2 flex flex-col items-center'>
            <TextField className = "mx-auto" inputRef = {firstName} label = "First Name" variant='outlined'/>
            {errors.firstName && <div><span className='text-red-950'>this field is required</span></div>}
            </div>
            <div className='mt-2 flex flex-col items-center'>
            <TextField className = "mx-auto" inputRef = {lastName} label = "Last Name"  variant='outlined'/>
            {errors.lastName && <div><span className='text-red-950'>this field is required</span></div>}
            </div>
            <div className='mt-2 flex flex-col items-center'>
            <TextField className = "mx-auto" inputRef = {email} label = "Email" type = "email" variant='outlined'/>
            {errors.email && <div><span className='text-red-950'>this field is required and should be in valid mail format</span></div>}
            </div>
            <div className='mt-2 flex flex-col items-center'>
            <TextField className = "mx-auto" inputRef = {phoneNumber} label = "Phone Number" variant='outlined'/>
            {errors.phoneNumber && <div><span className='text-red-950'>not a valid phone number</span></div>}
            </div>
            <div className='mt-2 flex flex-col items-center'>
            <TextField className = "mx-auto" inputRef = {comment} multiline rows = "4" label = "Comment" variant='outlined'/>
            {errors.comment && <div><span className='text-red-950'>this field is required</span></div>}
            </div>
            <div className='mt-2 flex flex-col items-center'>
            <Button className='!bg-stone-600' type = "submit" variant="contained">Submit</Button>
            </div>
        </form>
    </div>
    </>)
}