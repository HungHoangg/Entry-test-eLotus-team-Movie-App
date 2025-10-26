import { Routes, Route, Navigate } from "react-router-dom";
import NowPlaying from "../pages/NowPlaying/NowPlaying";
import MainLayout from "../layouts/MainLayout";
import TopRated from "../pages/TopRated/TopRated";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import {
  TOP_RATED_ROUTER,
  NOW_PLAYING_PATH,
  DETAIL_MOVIE_PATH,
} from "../utils/constant";

function AppRouter() {
  return (
    <MainLayout>
      <Routes>
        {/*Because web don't have homepage, so im navigate it to now-playing" */}
        <Route path="/" element={<Navigate to={NOW_PLAYING_PATH} replace />} />
        <Route path={NOW_PLAYING_PATH} element={<NowPlaying />} />
        <Route path={TOP_RATED_ROUTER} element={<TopRated />} />
        <Route path={DETAIL_MOVIE_PATH} element={<MovieDetail />} />
      </Routes>
    </MainLayout>
  );
}

export default AppRouter;
