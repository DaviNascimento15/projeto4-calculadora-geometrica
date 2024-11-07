function trianguloArea(base, height) {
    return (base * height) / 2
}

function areaRectangle(base, height) {
    return base * height
}

function areaSquare(side) {
    return side * side
}

function areaTrapeze(largerBase, smallerBase, height) {
    return ((largerBase + smallerBase) * height) / 2
}

function areaCircle(radius) {
    const pi = 3.14
    return pi * radius * radius
}

let option = prompt('escolha uma das opções:\n1. Triângulo\n2. Retângulo\n3. Quadrado\n4. Trapézio\n5. Círculo\n6. Sair')

while (option !== '6') {
    switch (option) {
        case '1':
            let triangleBase = parseFloat(prompt('Digite a base do triângulo:'))
            let triangleHeight = parseFloat(prompt('Digite a altura do triângulo:'))
            alert('Área do triângulo: ' + trianguloArea(triangleBase, triangleHeight))
            break
        case '2':
            let rectangleBase = parseFloat(prompt('Digite a base do retângulo:'))
            let rectangleHeight = parseFloat(prompt('Digite a altura do retângulo:'))
            alert('Área do retângulo: ' + areaRectangle(rectangleBase, rectangleHeight))
            break
        case '3':
            let squareSide = parseFloat(prompt('Digite o lado do quadrado:'))
            alert('Área do quadrado: ' + areaSquare(squareSide))
            break
        case '4':
let largerBase = parseFloat(prompt('Digite a base maior do trapézio:'))
            let smallerBase = parseFloat(prompt('Digite a base menor do trapézio:'))
            let trapezeHeight = parseFloat(prompt('Digite a altura do trapézio:'))
            alert('Área do trapézio: ' + areaTrapeze(largerBase, smallerBase, trapezeHeight))
            break
        case '5':
            let radius = parseFloat(prompt('Digite o raio do círculo:'))
            alert('Área do círculo: ' + areaCircle(radius))
            break
        default:
            alert('Opção inválida! Por favor, escolha uma opção válida.')
    }
    option = prompt('Escolha uma opção:\n1. Triângulo\n2. Retângulo\n3. Quadrado\n4. Trapézio\n5. Círculo\n6. Sair')
} 
