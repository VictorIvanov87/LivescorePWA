import FixtureModule from './fixture';
import FixtureController from './fixture.controller';
import FixtureComponent from './fixture.component';
import FixtureTemplate from './fixture.html';

describe('Fixture', () => {
    let $rootScope, makeController;

    beforeEach(window.module(FixtureModule));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new FixtureController();
        };
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Controller', () => {
        // controller specs
        it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
            let controller = makeController();
            expect(controller)
                .to.have.property('name');
        });
    });

    describe('Template', () => {
        // template specs
        // tip: use regex to ensure correct bindings are used e.g., {{  }}
        it('has name in template [REMOVE]', () => {
            expect(FixtureTemplate)
                .to.fixture(/{{\s?\$ctrl\.name\s?}}/g);
        });
    });

    describe('Component', () => {
        // component/directive specs
        let component = FixtureComponent;

        it('includes the intended template', () => {
            expect(component.template)
                .to.equal(FixtureTemplate);
        });

        it('invokes the right controller', () => {
            expect(component.controller)
                .to.equal(FixtureController);
        });
    });
});