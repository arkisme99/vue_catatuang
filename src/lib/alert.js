import Swal from "sweetalert2";

export const alertSuccess = async (message) => {
  return Swal.fire({
    toast: true, // mode toast (kecil, pojok)
    position: "top-end", // pojok kanan atas
    icon: "success",
    title: message,
    showConfirmButton: false, // tanpa tombol OK
    timer: 2500, // auto close 2 detik
    timerProgressBar: true, // ada loader (progress bar)
    background: "#41882cff",
    color: "#fff",
    didOpen: (toast) => {
      // pause/resume loader saat mouse hover
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
};

export const alertError = async (message) => {
  return Swal.fire({
    icon: "error",
    title: "Ups !",
    text: message,
  });
};

export const alertWarning = async (errors) => {
  return Swal.fire({
    icon: "warning",
    title: "Ups !",
    html: errors,
  });
};
