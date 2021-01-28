import style from './style.module.css';

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
    const backgroundStyle = {background: urlBg ? `url(${urlBg})` : colorBg}

    return (
        <section class={style.root} id={id} style={backgroundStyle}>
            <div class={style.wrapper}>
                <article>
                    {
                        title && <div class={style.title}>
                            <h3>{title}</h3>
                            <span class={style.separator}></span>
                        </div>
                    }
                    {
                        descr && <div class={`${style.desc} ${style.full}`}>
                            <p>{descr}</p>
                        </div>
                    }
                </article>
            </div>
        </section>
    );
};

export default Layout;