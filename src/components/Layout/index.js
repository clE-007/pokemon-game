import style from './style.module.css';

const Layout = ({ id, title, urlBg, colorBg, children }) => {
    const backgroundStyle = {background: urlBg ? `url(${urlBg})` : colorBg}

    return (
        <section className={style.root} id={id} style={backgroundStyle}>
            <div className={style.wrapper}>
                <article>
                    {
                        title && <div className={style.title}>
                            <h3>{title}</h3>
                            <span className={style.separator}></span>
                        </div>
                    }
                    {
                        children && <div className={`${style.desc} ${style.full}`}>
                            {children}
                        </div>
                    }
                </article>
            </div>
        </section>
    );
};

export default Layout;
