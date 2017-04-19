import LeagueModule from './league'
import LeagueController from './league.controller';
import LeagueComponent from './league.component';
import LeagueTemplate from './league.html';

describe('League', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LeagueModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LeagueController();
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
      expect(LeagueTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LeagueComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LeagueTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LeagueController);
      });
  });
});
