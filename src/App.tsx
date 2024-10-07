import React, { useState } from 'react';
import Modal from './components/Modal/Modal';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

  const openModal = () => setShowModal(true);
  const cancel = () => setShowModal(false);

  return (
    <>
      <div className="App">
        <div className="container mt-5">
          <button className="btn btn-primary" onClick={openModal}>
            Open modal
          </button>
          <Modal
            show={showModal}
            onClose={cancel}
            title="Some kind of modal title">
            <div className="modal-body">
              <p>This is modal content</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </Modal>
        </div>
      </div>
  </>);
};

export default App;
