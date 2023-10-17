interface Ave {
    come(): void
}

interface AveVoladora {
    vuela(): void
}

interface AveNadadora {
    nada(): void
}

interface AveCorredora {
    corre(): void
}


class Tucan implements Ave, AveVoladora {
    come() { }
    vuela() { }
}

class Colibri implements Ave, AveVoladora {
    come() { }
    vuela() { }
}

class Pinguino implements Ave, AveNadadora {
    come() { }
    nada() { }
}

class Avestruz implements Ave, AveCorredora {
    come() { }
    corre() { }
}
