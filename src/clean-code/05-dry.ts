type Size = '' | 's' | 'm' | 'l' | 'xl'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',

    ) { }

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((this[key] as string).length <= 0) throw Error(`${key} no existe`)
                    break
                case 'number':
                    if ((this[key] as number) <= 0) throw Error(`${key} es cero`)
                    break
                default:
                    throw Error(`${typeof this[key]} no soportado`)
            }
        }
        return true

    }

    toString() {
        if (!this.isProductReady) return

        return `${this.name} (${this.price}) ${this.size}`
    }
}

(() => {
    const bluePants = new Product('Blue large pants', 10, 'm')
    console.log(bluePants.toString())
})()