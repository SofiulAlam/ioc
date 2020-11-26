import { IDoughContainer } from '../interface/IDough';

import 'mocha';
import { expect } from 'chai';

describe('Container', () => {
    let container: IContainer;

    beforeEach(() => {
        container = new Container();
    });

    describe('resolve()', () => {
        it('should resolve an instance when registered with a class Literal', () => {
            @Injectable()
            class DoughClass {}
            container.register(DoughClass);
            const instance = container.resolve(DoughClass);
            expect(instance).to.be.ok;
            expect(instance instanceof DoughClass).to.be.true;
        });

        it('should resolve an instance when registered "useClass" attribute', () => {
            @Injectable()
            class DoughClass {}
            const testToken = 'IDoughClass';

            container.register({ token: testToken, useClass: DoughClass });
            const instance = container.resolve(testToken);
            expect(instance).to.be.ok;
            expect(instance instanceof DoughClass).to.be.true;
        });

    }
    
    describe('createChild()', () => {
        it('should create child container', () => {
            const childContainer: any = container.createChild();
            expect(childContainer).to.be.ok;
            expect(childContainer.parent).to.equal(container);
        });
    });

    describe('Errors', () =>{

        it('should throw an error if provided token is not registered', () => {
            @Injectable()
            class DoughClass {}
            container.register([{ token: 'Token', useClass: DoughClass }]);

            const throwableFunc = () => container.resolve('NotRegisteredToken');
            expect(throwableFunc).to.throw();
        });    
        
        it('should resolve container instance when injected into class Literal', () => {
            @Injectable()
            class DoughClass {
                constructor(@Inject(container) public a: IDoughContainer) {}
            }

            container.register({ token: DoughClass, useClass: DoughClass });
            const actual = container.resolve(DoughClass);
            expect(actual).to.be.ok;
            expect(actual.a).to.be.ok;
            expect(actual.a).to.equal(container);
        });
    }
};