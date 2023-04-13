import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Notify({message}) {

  const notify = () => toast(message);
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      {/* <ToastContainer /> */}
    </div>
  );
}
