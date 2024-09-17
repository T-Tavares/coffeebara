import ss from './Reservations.module.scss';

const Reservations = () => {
    return (
        <div className={ss.reservationsContainer}>
            <div className={ss.reservations}>
                <h2>Table Reservation</h2>
                <label htmlFor="people">Number of People</label>
                <input type="number" inputMode="numeric" name="people" min={1} max={10} />
                <label htmlFor="date">Date</label>
                <input type="date" name="date" />
                <label htmlFor="time">Time</label>
                <input type="time" name="Time" />
                <label htmlFor="comments">Comments</label>
                <input type="textarea" name="comments" rows="3" />
                <button>Reserve</button>
            </div>
        </div>
    );
};

export default Reservations;
