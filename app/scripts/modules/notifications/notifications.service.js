'use strict';


angular.module('deckApp.notifications.service', [
  'deckApp.utils.rx',
  'deckApp.settings',
])
  .factory('notificationsService', function(RxService, settings) {
    var stream = new RxService.Subject();

    return {
      create: function(config) {
        if(settings.feature.notifications === true) {
          stream.onNext({
            title: config.title,
            message: config.message,
            href: config.href,
            timestamp: config.hideTimestamp ? '' : Date.now(),
            autoDismiss: config.autoDismiss,
            strong: config.strong
          });
        }
      },
      subscribe: stream.subscribe.bind(stream),
    };
  });
