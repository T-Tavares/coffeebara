import ss from './Loading.module.scss';
const Loading = () => {
    return (
        <div className={ss.loading}>
            <div className={ss.spinner}></div>
        </div>
    );
};
export default Loading;
