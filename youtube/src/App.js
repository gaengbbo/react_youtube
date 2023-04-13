import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import Root from './pages/Root';
import VideoDetail from './pages/VideoDetail';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      // 그냥 video목록(hottrend)
      {index: true, element: <Videos />},
      {path:'/videos', element: <Videos />},
      // 검색한 키워드의 비디오목록
      {path:'/videos/:keyword', element: <Videos  />},
      {path:'/videos/watch/:videoId', element: <VideoDetail />}
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
