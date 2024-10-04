import ClassRoom from './0-classroom';

const initializeRooms = () => [19, 20, 34].map((n) => new ClassRoom(n));
export default initializeRooms;
