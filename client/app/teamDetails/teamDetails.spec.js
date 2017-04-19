import TeamDetailsModule from './teamDetails'
import TeamDetailsController from './teamDetails.controller';
import TeamDetailsComponent from './teamDetails.component';
import TeamDetailsTemplate from './teamDetails.html';

describe('TeamDetails', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TeamDetailsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TeamDetailsController();
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
      expect(TeamDetailsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TeamDetailsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TeamDetailsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TeamDetailsController);
      });
  });
});
