import Handler from './handler/Handler';

import '../style/index.css';

(() => {

  kintone.events.on('portal.show', Handler.handleIndexShow);

})();