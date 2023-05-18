describe('Bemenet ellenőrzése', () => {
    it('50 inputként', () => {
        let act = checkInput(50);
        expect(act).toBe(true);
        
    });
});