import TeamModule from './team'
import TeamController from './team.controller';
import TeamComponent from './team.component';
import TeamTemplate from './team.html';

describe('Team', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TeamModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TeamController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(TeamTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TeamComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TeamTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TeamController);
      });
  });
});
