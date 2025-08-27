import Swal from "sweetalert2"

export const alertSuccess = async (message) => {
    return Swal.fire({
        icon: 'success',
        title: 'Sukses Proses',
        text: message
    })
}


export const alertError = async (message) => {
    return Swal.fire({
        icon: 'error',
        title: 'Ups !',
        text: message
    })
}

export const alertWarning = async (errors) => {
    return Swal.fire({
        icon: 'warning',
        title: 'Ups !',
        html: errors
    })
}