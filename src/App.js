import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CardViewer from './CardViewer';
import HomePage from './HomePage';
import WeatherViewer from './WeatherViewer';
import ImageViewer from './components/ImageViewer';
import VideoViewer from './Videos/VideoViewer';
import NewAccordion from './Accordion/NewAccordion';
import WikipediaApi from './Accordion/WikipediaApi';
import Translate from './Accordion/Translate';
import DropDownMenu from './Accordion/DropDownMenu';
import SharedLayout from './SharedLayout';

const items = [
    {
        title: "What is React",
        content: "React is a popular Javascript Library"
    },
    {
        title: "why use react",
        content: "React is used to create dynamic UI"
    },
    {
        title: "How to use React",
        content: "React is used by creating components"
    }
]

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SharedLayout />}>
                    <Route index element={<HomePage />}  />
                    <Route path='/cardViewer' element={<CardViewer />}/>
                    <Route path ='/imageViewer' element={<ImageViewer />} />
                    <Route path ='/videoViewer' element = {<VideoViewer />} />
                    <Route path='/weatherViewer' element={<WeatherViewer />} />
                    <Route path='/accordion' element={<NewAccordion items={items} />} />
                    <Route path='/wikipediaApi' element={<WikipediaApi />} />
                    <Route path='/translate' element={<Translate />} />
                    <Route path='/dropdown' element={<DropDownMenu />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        )
    }
}

export default App;