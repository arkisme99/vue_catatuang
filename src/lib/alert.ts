import Swal, { SweetAlertResult } from "sweetalert2";

export const alertSuccess = async (
  message: string
): Promise<SweetAlertResult> => {
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

export const alertDanger = async (
  message: string
): Promise<SweetAlertResult> => {
  return Swal.fire({
    toast: true, // mode toast (kecil, pojok)
    position: "top-end", // pojok kanan atas
    icon: "error",
    title: message,
    showConfirmButton: false, // tanpa tombol OK
    timer: 2500, // auto close 2 detik
    timerProgressBar: true, // ada loader (progress bar)
    background: "#882c2cff",
    color: "#fff",
    didOpen: (toast) => {
      // pause/resume loader saat mouse hover
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
};

export const alertError = async (
  message: string
): Promise<SweetAlertResult> => {
  return Swal.fire({
    icon: "error",
    title: "Ups !",
    text: message,
  });
};

export const alertWarning = async (errors: any): Promise<SweetAlertResult> => {
  return Swal.fire({
    icon: "warning",
    title: "Ups !",
    html: errors,
  });
};

export const alertConfirm = async (
  message: string,
  textYes = "Ya",
  textNo = "Batal"
): Promise<SweetAlertResult> => {
  return Swal.fire({
    icon: "warning",
    title: "Apakah Anda yakin?",
    text: message,
    showCancelButton: true,
    confirmButtonText: textYes,
    cancelButtonText: textNo,
    confirmButtonColor: "#e3342f", // merah danger
    cancelButtonColor: "#6c757d", // abu-abu netral
    reverseButtons: true, // tombol Batal di kiri
    focusCancel: true, // default fokus di Batal
    background: "#fefefe", // warna background modal
    color: "#333", // warna teks
  });
};

export function handleError(e: unknown) {
  if (e instanceof Promise) {
    // tidak perlu eksekusi karena sudah di-handle di apiFetch
    return;
  }

  if (e instanceof Error) {
    alertError(e.message);
    return;
  }

  alertError(String(e));
}
