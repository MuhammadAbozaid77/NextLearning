"use client"
import { useFormik } from 'formik';
import React from 'react';


export default function CreateModal({onClose}) {

  const handelValidate = (values)=>{
        let  errors = { } 
          

        if(!values.craeteModalName){
          errors.nameError  = "Name Required"
        }else if (!/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(values.craeteModalName)){
          errors.nameError = "Invalid Name"
        }

        return errors
  }
  const handelFormFormik = useFormik({
    initialValues : {
        "craeteModalName" : ""  ,
        "craeteModalEmail" : ""  
    },
    validate : handelValidate ,
    onSubmit : (values)=>{

    },
  })

  console.log(handelFormFormik.errors);

    
  return <>

      <div className='absolute inset-0 bg-slate-500/50  flex justify-center'
          onClick={onClose}
      >
            <div className='w-[400px] h-fit bg-white mt-[20px] shadow-lg border rounded p-3 flex flex-col justify-start'
                onClick={(e)=>e.stopPropagation()}
            >
                    <form className='w-[100%]' onSubmit={handelFormFormik.handleSubmit} >

                        <label htmlFor="craeteModalName"  > Name </label>
                        <input type="text" name="craeteModalName" id="craeteModalName"  
                            value={handelFormFormik.values.craeteModalName}
                            onChange={handelFormFormik.handleChange}
                            className='border focus:outline-none mb-1 w-[100%] h-[40px] rounded shadow-md text-[16px] px-2'
                        />
                        <div className='w-[100%] mb-5'> 
                            {handelFormFormik.errors.nameError ?  
                              <div className='w-[100%] p-1 bg-red-500/80 rounded px-2 text-white'> {handelFormFormik.errors.nameError} </div> 
                              : ""
                            } 
                        </div>



                        <label htmlFor="craeteModalEmail"> Email </label>
                        <input type="email" name="craeteModalEmail" id="craeteModalEmail"  
                            value={handelFormFormik.values.craeteModalEmail}
                            onChange={handelFormFormik.handleChange}
                            className='border focus:outline-none mb-5 w-[100%] h-[40px] rounded shadow-md text-[16px] px-2'
                        />


                        <div className='mt-3'> 
                            <button type='submit' 
                                    className='px-3 py-2 text-[16px] bg-blue-700 rounded shadow-md text-white hover:bg-slate-blue duration-100 me-3 transition-all'
                              > 
                                  Save
                            </button>
                            <button className='px-3 py-2 text-[16px] bg-red-700 rounded shadow-md text-white hover:bg-slate-red duration-100 me-3 transition-all'
                                  onClick={onClose}
                              > 
                                  Close
                            </button>
                        </div>
                    </form>

            </div>
      </div>

  </>
}
