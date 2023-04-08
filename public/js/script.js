function handleSideNav() {
	const sideNav = document.getElementById('side-nav')
	const columnContent = document.getElementById('col-content')
	sideNav.classList.toggle('d-none')
	sideNav.classList.toggle('col-3')
	sideNav.classList.toggle('col-2')
	sideNav.classList.toggle('col-sm-2')
	sideNav.classList.toggle('col-sm-0')
	columnContent.classList.toggle('col-10')
	columnContent.classList.toggle('col-12')
	columnContent.classList.toggle('col-sm-10')
	columnContent.classList.toggle('col-sm-12')
}

function clickInputFormFile() {
	const formInputFile = document.querySelector(`input[id='file']`)
	const formInputFileFake = document.querySelector(`input[id='fileInput']`)
	formInputFile.click()
	formInputFileFake.style.display = 'none'
	formInputFile.classList.remove('d-none')
}

//form validation
function formValidation() {
	const inputs = document.querySelectorAll('.input')
	const formAddOrDeleteCar = document.querySelector('form[method="post"]')
	let status = true
	inputs.forEach(input => {
		if(input.value == null || !input.value || input.value == undefined) {
			formAddOrDeleteCar.classList.add('was-validated')
			status = false
		}
	})
	return status
}

function alertConfirm(param) {
	const status = formValidation()
	if(status == false) return false
	Swal.fire({
		title: param.title,
		text: param.text,
		imageUrl: window.location.origin + '/images/icon/fi_car-cloud.svg',
		backdrop: 'rgba(0,0,0,.7)',
		showCancelButton: true,
		confirmButtonColor: '#0D28A6',
		cancelButtonText: 'Tidak',
		confirmButtonText: 'Ya'
	}).then((result) => {
		if(result.isConfirmed) {
			document.getElementById(param.formId).submit()
		}
	})
}

function handleSubmitAddCar() {
	alertConfirm({
		title: 'Tambah Data Mobil',
		text: "Yakin ingin menyimpan perubahan?!",
		formId: "formAddCar"
	})
}

function handleSubmitEditCar() {
	alertConfirm({
		title: 'Edit Data Mobil',
		text: "Yakin ingin menyimpan perubahan?!",
		formId: "formEditCar"
	})
}

function handleSubmitDeleteCar() {
	alertConfirm({
		title: 'Menghapus Data Mobil',
		text: `Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus mobil?!`,
		formId: "formDeleteCar"
	})
}

//old value search form
if(window.location.search.split('=')[0] == '?search') {
	const inputSearch = document.querySelector('#searchForm input')
	let oldValue = window.location.search.split('=')[1]
	inputSearch.value = oldValue
}

//close notification save or delete 
setTimeout(() => {
	document.getElementById('closeButtonNotif').click()
}, 1500)