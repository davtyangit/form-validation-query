import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useFunctional = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
    setSuccess(false);
  };

  const notify = () => toast.success('Succesfully sent!');

  const sendRequest = (values) => {
    axios
      .post(
        '/',
        JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          message: values.message,
          phone: values.phone,
        }),
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        setSuccess(true);
        console.log(error);
        setTimeout(() => {
          closeModal();
        }, 200);
      });
  };

  return {
    isOpen,
    success,
    openModal,
    notify,
    sendRequest,
    closeModal,
  };
};
