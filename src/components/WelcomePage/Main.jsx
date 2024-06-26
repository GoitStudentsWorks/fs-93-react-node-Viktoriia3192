import css from '../../../src/components/WelcomePage/Main.module.css';
import WaterConsumptionTracker from '../WelcomePage/WaterConsumptionTracker';
import WhyDrinkWater from '../WelcomePage/WhyDrinkWater';

const Main = () => {
  return (
    <div className={css.container}>
      <div className={css.mainContainer}>
        <div className={css.titleContainer}>
          <h1 className={css.titleConsumption}>Water consumption tracker</h1>
          <h2 className={css.titleRecord}>
            Record daily water intake and track
          </h2>
          <WaterConsumptionTracker />
        </div>
        <div className={css.blocksContainer}>
          <WhyDrinkWater />
        </div>
      </div>
    </div>
  );
};

export default Main;
