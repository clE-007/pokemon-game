import {useHistory} from 'react-router-dom';

const ContactPage = () => {
    const history = useHistory();

    const handleClickButton = () => {
        history.push('/');
    }

    return (
        <div>
            <h1>This is ContactPage!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis quasi praesentium reprehenderit aperiam dolor corrupti temporibus adipisci corporis dignissimos nisi, quis, voluptatibus enim debitis ad quo pariatur, sit voluptates!Eum vitae fugit molestiae modi doloribus! Repudiandae aut nobis illum nesciunt, itaque odio iste laboriosam quod illo fugit dolor. Aspernatur molestias laborum rem eveniet repellendus dolorum odio laboriosam, sunt facilis?</p>

            <button onClick={handleClickButton}>Back to HomePage</button>
        </div>
    );
};

export default ContactPage;
