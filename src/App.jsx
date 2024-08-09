import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Whoweare from './Pages/Whoweare'
import Mainlayout from './Component/Layout/Mainlayout'
import OurPeople from './Pages/OurPeople'
import StateBranches from './Pages/StateBranches'
import Codeofconduct from './Pages/Codeofconduct'
import Become from './Home Section/Become'
import MemberRoutes from './Pages/Routes'
import Upgrades from './Pages/Upgrades'
import News from './Home Section/News'
import ConferenceEvents from './Pages/Events'
// import Eventupdates from './Pages/updates'
import Trainings from './Pages/Training'
import Consultancy from './Pages/Consultancy'
import Research from './Pages/Research'
import contactCipdm from './Pages/contact'
import Gallery from './Pages/Gallery'
import NewsEvent from './Pages/NewsEvent'
import BecomeMember from './Pages/Become'
import Articleone from './Pages/Articleone'
import ArticleTwo from './Pages/ArticleTwo'
import ArticleThree from './Pages/ArticleThree'
import Article from './Pages/updates'

import States from './Pages/States'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />} >
    // <Route index element={<Homepage />} />
    // <Route path='/whoweare' element={<Whoweare />} />
    // <Route path='/our-people' element={<OurPeople />} />
    // <Route path='/become-a-member' element={<BecomeMember />} />
    // <Route path='/Membership-routes' element={<MemberRoutes />} />
    // <Route path='/member-upgrade' element={<Upgrades />} />
    // <Route path='/news' element={<NewsEvent/>} />
    // <Route path='/code-of-conduct' element={<Codeofconduct />} />
    // <Route path='/Events' element={<ConferenceEvents />} />
    // <Route path='/Articles' element={<Article />} />
    // <Route path='/Training' element={<Trainings />} />
    // <Route path='/consultancy' element={<Consultancy />} />
    // <Route path='/research' element={<Research />} />
    // <Route path='/Gallery' element={<Gallery />} />
    // <Route path='/Our-offices' element={<StateBranches />} />
    // <Route path='/Contact-us' element={<contactCipdm />} />
    // <Route path='/Article-one' element={<Articleone />} />
    // <Route path='/Article-two' element={<ArticleTwo />} />
    // <Route path='/Article-three' element={<ArticleThree />} />
    // <Route path='/state-cordinators' element={<States />} />
    </Route>
  ),
)


const App = () => {
  return (<RouterProvider router={router}/>)     
}

export default App


