import {useHistory} from 'react-router-dom';

const AboutPage = () => {
    const history = useHistory();

    const handleClickButton = () => {
        history.push('/');
    }

    return (
        <div>
            <h1>This is AboutPage!</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis molestiae, consequatur molestias quod sequi perspiciatis modi rem similique? Ipsa, repellat corrupti nemo veniam eaque quaerat eos nisi asperiores fugit.
            Impedit corporis atque ipsum quasi unde similique, numquam minus ut dolorum optio quisquam debitis eum possimus dolorem nesciunt iusto placeat fuga aut, facere doloribus maiores! Necessitatibus sit doloribus incidunt quam!
            Eaque reiciendis labore, ipsum at atque optio neque ratione dolores. Architecto molestiae minima laudantium, nobis et, asperiores ea in ducimus, assumenda quo reiciendis accusamus. Asperiores id quia repellendus consectetur dicta!
            In magnam sapiente hic, totam ratione magni iure laborum quo accusantium ad nemo pariatur voluptas maxime repellat autem voluptatem enim temporibus. Obcaecati, maxime distinctio! Ab iste in facilis dolores et.
            Voluptatum vero a beatae modi excepturi ad, obcaecati culpa. Atque veritatis sint impedit totam, ullam in praesentium eum magni nihil necessitatibus modi? Delectus sequi sapiente mollitia laboriosam velit fugiat natus?</p>

            <button onClick={handleClickButton}>Back to HomePage</button>
        </div>
    );
};

export default AboutPage;
