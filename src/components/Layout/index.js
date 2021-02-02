import s from './style.module.css';
import cn from 'classnames';

const Layout = ({ id, title, urlBg, colorBg, children }) => {
    const backgroundStyle = {background: urlBg ? `url(${urlBg})` : colorBg}

    return (
        <section className={s.root} id={id} style={backgroundStyle}>
            <div className={s.wrapper}>
                <article>
                    {
                        title && <div className={s.title}>
                            <h3>{title}</h3>
                            <span className={s.separator}></span>
                        </div>
                    }
                    {
                        children && <div className={cn(s.desc, s.full)}>
                            {children}
                        </div>
                    }
                </article>
            </div>
        </section>
    );
};

export default Layout;
