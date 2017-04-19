import angular from 'angular';
import Fixture from './fixture/fixture';
import Navbar from './navbar/navbar';
import Warning from './warning/warning';
import FixtureDetails from '../../fixtureDetails/fixtureDetails';
import Team from '../../fixtureDetails/team/team';

let componentsModule = angular.module('app.shared.components', [
    Fixture,
    Navbar,
    Warning,
    FixtureDetails,
    Team
])

.name;

export default componentsModule;