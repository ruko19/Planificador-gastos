export const formatearCantidades = cantidad => {
    return Number(cantidad).toLocaleString('es-Us',{
        style: 'currency',
        currency: 'USD'
    })
}