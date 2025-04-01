import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import InfosPratiques from './pages/InfosPratiques';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Contact from './pages/Contact';
import Billetterie from './pages/Billetterie';
import WIP from './pages/WIP';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'infos',
        element: <InfosPratiques />,
      },
      {
        path: 'legal',
        element: <MentionsLegales />,
      },
      {
        path: 'privacy',
        element: <PolitiqueConfidentialite />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'billetterie',
        element: <Billetterie />,
      },
    ],
  },
]);