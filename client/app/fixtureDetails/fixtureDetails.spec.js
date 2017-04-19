import DetailsModule from './fixtureDetails'
import DetailsController from './fixtureDetails.controller';
import DetailsComponent from './fixtureDetails.component';
import DetailsTemplate from './fixtureDetails.html';

describe('Details', () => {
    let $rootScope, makeController;

    beforeEach(window.module(DetailsModule));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new DetailsController();
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
            expect(DetailsTemplate)
                .to.match(/{{\s?\$ctrl\.name\s?}}/g);
        });
    });

    describe('Component', () => {
        // component/directive specs
        let component = DetailsComponent;

        it('includes the intended template', () => {
            expect(component.template)
                .to.equal(DetailsTemplate);
        });

        it('invokes the right controller', () => {
            expect(component.controller)
                .to.equal(DetailsController);
        });
    });
});