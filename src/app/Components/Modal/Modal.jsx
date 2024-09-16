import ss from './Modal.module.scss';

const Modal = ({title, children, closeModalHandler}) => {
    const backdropClickHandler = e => {
        if (e.target === e.currentTarget) closeModalHandler();
    };

    return (
        <div onClick={backdropClickHandler} className={ss.backdrop}>
            <div className={ss.container}>
                <div className={ss.header}>
                    <button onClick={closeModalHandler}>{'<'}</button>
                    <h1>{title}</h1>
                </div>
                <div className={ss.content}>{children}</div>
                <div className={ss.footer}>
                    <p>©️ All rights reserved to Capy</p>
                </div>
            </div>
        </div>
    );
};
export default Modal;
