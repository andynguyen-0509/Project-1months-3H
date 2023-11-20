// UserComponent.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './index';

const UserComponent = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUser(1));
    }, [dispatch]);

    if (user.loading) {
        return <div>Loading...</div>;
    }

    if (user.error) {
        return <div>Error: {user.error}</div>;
    }

    return (
        <div>
            {user.data ? (
                <div>
                    <h1>User Details:</h1>
                    <p>ID: {user.data.id}</p>
                    <p>Name: {user.data.name}</p>
                </div>
            ) : (
                <div>No user found</div>
            )}
        </div>
    );
};

export default UserComponent;
