const schedule = [
  { day: 'Senin', date: 9, label: 'Hari ini', available: ['08.00', '13.00', '15.00'], full: ['10.00'] },
  { day: 'Selasa', date: 10, label: 'Selasa', available: ['10.00'], full: ['08.00', '13.00', '15.00'] },
  { day: 'Rabu', date: 11, label: 'Rabu', available: ['08.00', '10.00', '13.00', '15.00'], full: [] },
  { day: 'Kamis', date: 12, label: 'Kamis', available: [], full: ['08.00', '10.00', '13.00', '15.00'] },
  { day: 'Jumat', date: 13, label: 'Jumat', available: ['13.00', '15.00'], full: ['08.00', '10.00'] }
];

let selectedDate = null;
let selectedTime = null;
const dates = document.querySelector('#dates');
const times = document.querySelector('#times');
const availability = document.querySelector('#availability');
const book = document.querySelector('#book');

function updateBook() { book.disabled = !(selectedDate && selectedTime); }

function renderTimes() {
  times.innerHTML = '';
  selectedTime = null;
  if (!selectedDate) return updateBook();
  const slots = ['08.00', '10.00', '13.00', '15.00'];

  slots.forEach((slot) => {
    const button = document.createElement('button'); 
    button.className = 'time'; 
    button.textContent = slot;
    const full = selectedDate.full.includes(slot); 
    button.disabled = full;

    if (!full) button.onclick = () => { 
      selectedTime = slot; 
      document.querySelectorAll('.time').forEach(
        x => x.classList.remove('selected')
      ); 
      button.classList.add('selected'); updateBook(); 
    };
    times.append(button);
  });

  availability.textContent = selectedDate.available.length ? `${selectedDate.available.length} jam tersedia pada ${selectedDate.day}, ${selectedDate.date} Nov.` : 'Semua jam pada tanggal ini sudah penuh.';
  updateBook();
}

schedule.forEach((item) => {
  const button = document.createElement('button'); 
  button.className = 'date'; 
  button.disabled = !item.available.length;
  button.innerHTML = `<strong>${item.date}</strong><small>${item.label}</small>`;
  button.onclick = () => { 
    selectedDate = item; 
    document.querySelectorAll('.date').forEach(
      x => x.classList.remove('selected')
    ); 
    button.classList.add('selected'); 
    renderTimes(); 
  };
  dates.append(button);
});

selectedDate = schedule[0];
dates.firstElementChild.classList.add('selected');
renderTimes();
book.onclick = () => {
  document.querySelector('#confirmation-date').textContent = `${selectedDate.day}, ${selectedDate.date} November 2026`;
  document.querySelector('#confirmation-time').textContent = `${selectedTime} WIB`;
  document.querySelector('#booking-screen').classList.add('hidden'); document.querySelector('#success-screen').classList.remove('hidden');
};
document.querySelector('#new-booking').onclick = () => { selectedDate = null; selectedTime = null; dates.querySelectorAll('.date').forEach(x => x.classList.remove('selected')); times.innerHTML = ''; availability.textContent = 'Pilih tanggal untuk melihat jam tersedia.'; updateBook(); document.querySelector('#success-screen').classList.add('hidden'); document.querySelector('#booking-screen').classList.remove('hidden'); };

const bookingScreen = document.querySelector('#booking-screen');
const detailsScreen = document.querySelector('#details-screen');
const detailsButton = document.querySelector('#workshop-details');
const detailsBack = document.querySelector('#details-back');
if (detailsScreen && detailsButton && detailsBack) {
  function showDetails() { 
    bookingScreen.classList.add('hidden'); 
    detailsScreen.classList.remove('hidden'); 
    window.scrollTo(0, 0); 
  }

  detailsButton.onclick = showDetails;
  detailsButton.onkeydown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') { 
      event.preventDefault(); 
      showDetails(); 
    }
  };

  detailsBack.onclick = () => { 
    detailsScreen.classList.add('hidden'); 
    bookingScreen.classList.remove('hidden'); 
  };
}

const addCalendar = document.querySelector('#add-calendar');
const toast = document.querySelector('#toast');
let toastTimeout;
if (addCalendar && toast) {
  addCalendar.onclick = () => {
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2000);
  };
}
