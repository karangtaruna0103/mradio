// ------------------------------
// Jadwal Siaran Otomatis Harian
// ------------------------------
const jadwal = {
  'Minggu': ['07:00 - Dangdut Hits', '14:00 - Gendang Tarling', '19:00 - DJ Malam Gen Z'],
  'Senin': ['07:00 - Music Gen Z', '11:00 - Beat Zone', '16:00 - Senja Music', '19:00 - Musik Malam'],
  'Selasa': ['07:00 - Music Gen Z', '11:00 - Beat Zone', '16:00 - Senja Music', '19:00 - Musik Malam'],
  'Rabu': ['07:00 - Music Gen Z', '11:00 - Beat Zone', '16:00 - Senja Music', '19:00 - Musik Malam'],
  'Kamis': ['07:00 - Music Gen Z', '11:00 - Beat Zone', '16:00 - Senja Music', '19:00 - Musik Malam'],
  'Jumat': ['07:00 - Music Gen Z', '11:00 - Beat Zone', '16:00 - Senja Music', '19:00 - Musik Malam'],
  'Sabtu': ['07:00 - Dangdut Hits', '14:00 - Gendang Tarling', '19:00 - DJ Malam Gen Z'],
};

const hari = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
const ulJadwal = document.getElementById("jadwal-hari-ini");

if (ulJadwal && jadwal[hari]) {
  jadwal[hari].forEach(event => {
    const li = document.createElement('li');
    li.textContent = event;
    ulJadwal.appendChild(li);
  });
}
