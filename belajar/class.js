class TiketPesawat {
    constructor(namaPenumpang, lokasiSekarang, tujuan, jumlahPenumpang, harga, totalHarga) {
        this.namaPenumpang = namaPenumpang
        this.lokasiSekarang = lokasiSekarang
        this.tujuan = tujuan
        this.jumlahPenumpang = jumlahPenumpang
        this.harga= harga
        this.totalHarga = totalHarga*1
    }
}


class TiketPesawatt {
    #daftar 
    constructor() {
        this.#daftar = []
    }
    get daftas() {
        return this.#daftar
    }
    tambahTiketPesawat(namaPenumpang, lokasiSekarang, tujuan, jumlahPenumpang, harga, totalHarga) {
        const newTiketPesawat = new TiketPesawat(namaPenumpang, lokasiSekarang, tujuan, jumlahPenumpang, harga, totalHarga)
        this.#daftar.push(newTiketPesawat)
    }

     hitungTiketPesawat() {
        return this.#daftar.reduce((totalHarga,cv) => {
            cv.jumlahPenumpang;
            cv.harga;
            return totalHarga = (cv.jumlahPenumpang * cv.harga)
        }, 0)
    }

    hapusTiketPesawat(ind) {
        this.#daftar.splice(ind,1)
    }

    editTiketPesawat(ind, namaPenumpang, lokasiSekarang, tujuan, jumlahPenumpang, harga, totalHarga) {
        const newTiketPesawat = new TiketPesawat(namaPenumpang, lokasiSekarang, tujuan, jumlahPenumpang, harga, totalHarga)
        this.#daftar[ind] = newTiketPesawat
    }
}