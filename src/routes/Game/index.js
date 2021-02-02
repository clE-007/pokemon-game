const GamePage = ({ onChangePage }) => {
    const handleClickButton = () => {
        console.log('GamePage');
        onChangePage && onChangePage('app');
    }

    return (
        <div>
            <h1>This is GamePage!</h1>

            <button className='pink' onClick={handleClickButton}>Back to HomePage</button>
        </div>
    );
};

export default GamePage;