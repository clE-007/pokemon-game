import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import Bg1 from './assets/bg1.jpg'
import Bg2 from './assets/bg2.jpg'

import './App.css';

function App() {
  return (
    <>
        <Header
            title='This is title'
            descr='This is Description!'
        />
        <Layout
            id='first'
            title='SomeTitle'
            descr='Description the first'
            urlBg={Bg1}
        />
        <Layout
            id='second'
            title='SomeTitle'
            descr='Description the first'
            colorBg='#f5f5f5'
        />
        <Layout
            id='third'
            title='SomeTitle'
            descr='Description the first'
            urlBg={Bg2}
        />
        <Footer />
    </>
  );
}

export default App;
