import ScheduleWidgetLogic from '../logic/ScheduleWidgetLogic';
import ScheduleWidget from '../constant/ScheduleWidget';

const Handler = {

  handleIndexShow() {
    ScheduleWidgetLogic.insertHtmlTemplate();
    ScheduleWidgetLogic.setDailySchedule();
  }
};

export default Handler;