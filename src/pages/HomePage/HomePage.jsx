import { useSelector } from 'react-redux';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';

import s from './HomePage.module.css';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const isLoading = useSelector(selectAuthIsLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.dailyNormaWrapper}>
          <DailyNorma />
          <WaterRatioPanel />
        </div>
        <div className={s.todayMonthWrapper}>
          <TodayWaterList />
          <MonthStatsTable />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
