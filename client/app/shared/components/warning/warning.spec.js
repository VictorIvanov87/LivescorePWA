import WarningModule from './warning'
import WarningController from './warning.controller';
import WarningComponent from './warning.component';
import WarningTemplate from './warning.html';

describe('Warning', () => {
  let $rootScope, makeController;

  beforeEach(window.module(WarningModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new WarningController();
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
      expect(WarningTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = WarningComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(WarningTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(WarningController);
      });
  });
});
