/* -- BYIMAAN -> THE FUTURE -- */

interface CountObj {
    [length:number]: Value
};
type Sym = 'K' | 'M' | 'B'
interface Value {
    sym : Sym
    total : number
}

export const intToText = ( int: number ) : string  => {
    const obj : CountObj = {
        10: {sym:'B', total: 1000000000}, 
        7: {sym:'M', total: 1000000},
        4: {sym:'K', total: 1000},
    };

    if (int > 999){
        const keys = Object.keys(obj).map(Number).sort( (a,b) => b-a );
        const size = `${int}`.length;
        for (let key of keys){
            if (size >= Number(key)) {
                const result = int / obj[key].total
                return `${parseFloat(result.toFixed(2))} ${obj[key].sym}`
            };

        };
    };
    return ''+int;
};