const data = new TiketPesawatt()
let selectedId = null
const totalHarga = document.getElementById("totalHarga")
console.log(data.hitungTiketPesawat())

// show alert

function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// clear all data

function clearFields() {
    document.querySelector("#namaPenumpang").value = "";
    document.querySelector("#lokasiSekarang").value = "";
    document.querySelector("#tujuan").value = "";
    document.querySelector("#jumlahPenumpang").value = "";
    document.querySelector("#harga").value = "";
}

// add data

document.querySelector("#tiket-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const [namaPenumpang, lokasiSekarang, tujuan, jumlahPenumpang, harga, totalHarga] = e.target
    
    
    //validate

    if(namaPenumpang.value == "" || lokasiSekarang.value == "" || tujuan.value == "" || jumlahPenumpang.value == "" || harga.value == "" || totalHarga.value == "") {
        showAlert("Please fill in all fields", "danger");
    }else {
        if(selectedId == null) {
            data.tambahTiketPesawat(namaPenumpang.value, lokasiSekarang.value,  tujuan.value, jumlahPenumpang.value, harga.value, totalHarga.value)
            showAlert("student Added", "success")
        }
        else {
            data.editTiketPesawat(selectedId, namaPenumpang.value, lokasiSekarang.value,  tujuan.value, jumlahPenumpang.value, harga.value, totalHarga.value)            
            showAlert("student info edited", "info")
            selectedId = null
        }

        clearFields();
        updateTable()
    }
})


function updateTable() {
    document.getElementById("tiket-list").innerHTML = data.daftas.map((el,ind) => {
        return `
        <tr>
            <td>${el.namaPenumpang}</td>
            <td>${el.lokasiSekarang}</td>
            <td>${el.tujuan}</td>
            <td>${el.jumlahPenumpang}</td>
            <td>${el.harga}</td>
            <td>${el.totalHarga = data.hitungTiketPesawat()}</td>
            <td>
            <a onclick="edit(${ind})" href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a onclick="hapus(${ind})" href="#" class="btn btn-danger btn-sm delete">Delete</a>
            </td>
        </tr>
    `;
    }).join("")

    //ratas.innerText = "Rata-rata IPK : " + data.hitungRata()
}
// edit data

updateTable()

function edit(ind) {
    selectedId = ind
    let datas = data.daftas[ind]
    document.querySelector("#namaPenumpang").value = datas.namaPenumpang;
    document.querySelector("#lokasiSekarang").value = datas.lokasiSekarang;
    document.querySelector("#jumlahPenumpang").value = datas.tujuan;
    document.querySelector("#tujuan").value = datas.tujuan;
    document.querySelector("#harga").value = datas.harga;
    document.querySelector("#totalHarga").value = datas.totalHarga;
}

function hapus(ind) {
    data.hapusTiketPesawat(ind)
    updateTable()
    showAlert("Student Data Deleted", "danger");

}

