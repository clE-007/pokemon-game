import {useHistory} from 'react-router-dom';

const NotFoundPage = () => {
    const history = useHistory();

    const handleClickButton = () => {
        history.push('/');
    }

    return (
        <div>
            <h1>This is 404 Page! Not found!</h1>

            <button onClick={handleClickButton}>Back to HomePage</button>
        </div>
    );
};

export default NotFoundPage;