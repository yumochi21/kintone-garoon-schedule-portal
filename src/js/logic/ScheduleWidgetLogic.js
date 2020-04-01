import moment from 'moment';
import ScheduleWidget from '../constant/ScheduleWidget';
import GaroonSchedule from '../middleware/GaroonSchedule';

const ScheduleWidgetLogic = {

  insertHtmlTemplate() {
    const headerSpace = kintone.portal.getContentSpaceElement();
    $(headerSpace).append(ScheduleWidget);
  },

  setDailySchedule() {
    GaroonSchedule.getDailySchedule(moment().format('YYYY-MM-DD')).then(response => {
      response.events.forEach(event => {
        const $tr = $('<tr>');
        const $timeTd = $('<td>').text(
          moment(event.start.dateTime).format('HH:mm') + ' - ' + moment(event.end.dateTime).format('HH:mm')
        );
        const $titleTd = $('<td>');
        const $titleLink = $('<a>').attr('href', '/g/schedule/view.csp?event=' + event.id).attr('target', '_blank').text(event.subject);
        $titleTd.append($titleLink);

        const $facilityTd = $('<td>');
        let facilityText = '';
        event.facilities.forEach(facility => {
          if (facilityText !== '') {
            facilityText += '<br>';
          }
          facilityText += facility.name;
        });
        $facilityTd.html(facilityText);

        $tr.append($timeTd);
        $tr.append($titleTd);
        $tr.append($facilityTd);

        $('#kgs-body-table-tbody').append($tr);
      });
    });
  }
};

export default ScheduleWidgetLogic;