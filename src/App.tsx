import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';


const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState(true);

  const openModal = () => setShowModal(true);
  const cancel = () => setShowModal(false);

  const closeAlert = () => {
    setShowWarning(!showWarning);
  }

  return (
    <>
      <div>
        <div className="container mt-5">
          <button className="btn btn-primary mb-5" onClick={openModal}>
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
          {showWarning && (<Alert
            type="warning"
            onDismiss={closeAlert}
          >This is a warning type alert
          </Alert>
          )}
          <Alert type="success">
            This is a success type alert without close button
          </Alert>
        </div>
      </div>
  </>);
};

export default App;
