import React from 'react'

const Modal = ({ body }) => {
    return (
        <>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content background-dark text-white">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Aregar Calculo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        {body}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
