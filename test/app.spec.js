describe('Megszámoluk hogy  versenyző nem ért célba', () => {
    it('10, 5 inputra 5 sikertelen célba érés', () => {
        let act = getUnsuccessCount(10,5);
        expect(act).toBe(5)
    })
   it('100,89 inputra 11 sikertelen célba érés', () => {
    let act = getUnsuccessCount(100,89);
        expect(act).toBe(11)
   });
   it('1000,999 inputra 1 sikertelen célba érés', () => {
    let act = getUnsuccessCount(100,999);
        expect(act).toBe(1)
   });
   it('10000,7500 inputra 2500 sikertelen célba érés', () => {
    let act = getUnsuccessCount(10000,7500);
        expect(act).toBe(2500)
   });
   it('765,685 inputra 80 sikertelen célba érés', () => {
    let act = getUnsuccessCount(765,865);
        expect(act).toBe(80)
   });
    })
    describe('Megszámoluk hogy  versenyző nem ért célba százalékban', () => {
        it('10,5 inputra 50%', () => {
            let act = getUnsuccessPercent(10,5);
            expect(act).toBeCloseTo(50)
        });
        it('100,89 inputra 11%', () => {
            let act = getUnsuccessPercent(100,89);
            expect(act).toBeCloseTo(11)
        });
        it('1000,999 inputra 0.1%', () => {
            let act = getUnsuccessPercent(1000, 999);
            expect(act).toBeCloseTo(0.1)
        });
        it('10000,7500 inputra 25%', () => {
            let act = getUnsuccessPercent(10000,7500);
            expect(act).toBeCloseTo(25)
        });
        it('765,865 inputra 10.45%', () => {
            let act = getUnsuccessPercent(765,685);
            expect(act).toBeCloseTo(10.45)
        });
    });

