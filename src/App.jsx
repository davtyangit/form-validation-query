import { Modal } from './components/modal/Modal';
import RequestForm from './components/request-form/RequestForm'
import { ToastContainer } from 'react-toastify';
import { useFunctional } from './components/custom/useFunctional';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { isOpen, success, openModal, notify, sendRequest, closeModal } = useFunctional()

  return (
    <div className="container">
      {success && notify()}
      <ToastContainer autoClose={2000} />

      {
        isOpen && <Modal className='form' openModal={openModal} >
          <RequestForm sendRequest={sendRequest} closeModal={closeModal} title='form to send data to backend' />
        </Modal>
      }

      {!isOpen && <button className='open-btn' onClick={() => openModal()}>Open modal</button>}
    </div>
  );
}

export default App;
