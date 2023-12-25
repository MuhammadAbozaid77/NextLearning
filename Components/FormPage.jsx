"use client" ;
import React, { useState } from 'react';
import CreateModal from './CreateModal';

export default function FormPage() {
    const [showCreateModal, setShowCreateModal] = useState(false);

  return <>
  
    <div className='relative h-[100vh]'>

            <div className='flex  p-5 justify-end items-center'>
                    <button className='px-3 py-2 text-[16px] bg-slate-700 rounded text-white hover:bg-slate-500 duration-100 transition-all'
                        onClick={()=>setShowCreateModal(true)}
                    > 
                        Create New Form 
                    </button>
            </div>
            
            {
                showCreateModal  && (
                    <CreateModal onClose={()=>setShowCreateModal(false)}/>
                )
            }
    </div>


  </>
}
