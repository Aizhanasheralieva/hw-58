import React from 'react';

interface Props extends React.PropsWithChildren {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss: () => void;
}

const Alert: React.FC<Props> = ({type, onDismiss, children}) => {
  const generalClassForAlert = `alert alert-${type}`;

  return (
    <div className={generalClassForAlert} role="alert">
      <div className="d-flex justify-content-between align-items-center">
        <span>{children}</span>
        {onDismiss && (
          <button
            type="button"
            className="btn-close"
            onClick={onDismiss}
            aria-label="Close"
          ></button>
        )}
      </div>
    </div>
  );
};

export default Alert;
