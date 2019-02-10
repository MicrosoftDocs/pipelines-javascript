import { pipePlease } from "..";



describe('String', function () {
    describe('#indexOf', function () {
        it('should return -1 when the substring is not present', function () {
            var myString = 'test';

            expect(myString.indexOf('x')).toBe(-1);
            expect(myString.indexOf('y')).toBe(-1);
        });
    });
});

describe('pipePlease', () => {
    test('returns expected', () => {        
        // act
        expect(pipePlease()).toBe('some pipe ey');
        // assert
    });
    test('fails expected', () => {        
        // act
        expect(pipePlease()).toBe('some pipe eye');
        // assert
    });
})
