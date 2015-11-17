'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.serverGroup.configure.aws.instanceArchetype.controller', [

])
  .controller('awsInstanceArchetypeCtrl', function($scope, instanceTypeService, modalWizardService) {

    var wizard = modalWizardService.getWizard();

    $scope.$watch('command.viewState.instanceProfile', function() {
      if (!$scope.command.viewState.instanceProfile || $scope.command.viewState.instanceProfile === 'custom') {
        wizard.excludePage('instance-type');
      } else {
        wizard.includePage('instance-type');
        wizard.markClean('instance-profile');
        wizard.markComplete('instance-profile');
      }
    });

    $scope.$watch('command.instanceType', function(newVal) {
      if (newVal) {
        wizard.markClean('instance-profile');
        wizard.markComplete('instance-profile');
      }
    });

  }).name;