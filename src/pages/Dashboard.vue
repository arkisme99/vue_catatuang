<template>
  <div class="max-w-6xl mx-auto px-4 py-10 space-y-12">
    <!-- Home (after login) -->
    <section id="view-home" class="animate-fadeUp">
      <div class="mb-6">
        <h2 class="text-3xl font-bold">Halo, {{ name }} 👋</h2>
        <p class="text-neutral-600 dark:text-neutral-400">
          Ini adalah halaman beranda setelah login.
        </p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <!-- Stat Cards -->
        <div
          class="p-5 rounded-2xl bg-white/80 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 card-hover"
        >
          <p class="text-sm text-neutral-500">Transaksi Bulan Ini</p>
          <p class="text-3xl font-bold">12</p>
        </div>
        <div
          class="p-5 rounded-2xl bg-white/80 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 card-hover"
        >
          <p class="text-sm text-neutral-500">Pemasukan Bulan Ini</p>
          <p class="text-2xl font-bold">Rp. 35.500.000</p>
        </div>
        <div
          class="p-5 rounded-2xl bg-white/80 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 card-hover"
        >
          <p class="text-sm text-neutral-500">Pengeluaran Bulan Ini</p>
          <p class="text-2xl font-bold">15.750.000</p>
        </div>
        <div
          class="p-5 rounded-2xl bg-white/80 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 card-hover"
        >
          <p class="text-sm text-neutral-500">Sisa Saldo</p>
          <p class="text-2xl font-bold">Rp. 150.000.000</p>
        </div>
      </div>

      <div class="mt-8 grid md:grid-cols-2 gap-6">
        <div
          class="p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 card-hover"
        >
          <h3 class="text-xl font-semibold mb-2">Quick Actions</h3>
          <div class="flex flex-wrap gap-3">
            <button
              class="px-4 py-2 rounded-xl text-white bg-gradient-to-r from-brand-500 to-sunset-600 shadow-soft"
            >
              Transaksi Baru
            </button>
            <button
              class="px-4 py-2 rounded-xl border border-black/10 dark:border-white/10 hover:border-brand-500/60"
            >
              Tambah Kategori
            </button>
            <button
              class="px-4 py-2 rounded-xl border border-black/10 dark:border-white/10 hover:border-brand-500/60"
            >
              Laporan
            </button>
          </div>
        </div>
        <div
          class="p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 card-hover"
        >
          <h3 class="text-xl font-semibold mb-2">Ringkasan</h3>
          <p class="text-neutral-600 dark:text-neutral-300">
            Semua komponen sudah responsif & siap dipakai sebagai template
            dashboard ringan.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";

const authStore = useAuthStore();

const name = computed(() => authStore.authProfile?.name ?? "Pengguna");
</script>

<style scoped></style>
