import { createPortal } from 'react-dom';

export const CountryTableDetailsModal = ({ modalState, setModalState }) => {

    const handleCloseModal = (e) => {
        setModalState({
            isOpen: false,
            country: {}
        });
    }

    return createPortal(
        <>
            <div
                className="modal fade show"
                tabIndex="-1"
                style={{ display: modalState.isOpen ? 'block' : 'none' }}
                role="dialog"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Common Name: {modalState.country.name.common}</h5>
                            <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                        </div>
                        <div className="modal-body">
                            <p>Official Name: {modalState.country.name.official}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>
    , document.getElementById('modal-root'));
};
