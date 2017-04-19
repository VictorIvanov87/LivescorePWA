import TablesModule from './tables'
import TablesController from './tables.controller';
import TablesComponent from './tables.component';
import TablesTemplate from './tables.html';

describe('Tables', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TablesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TablesController();
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
      expect(TablesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TablesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TablesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TablesController);
      });
  });
});
