# Binar Chapter 4 - Car Management Dashboard

<br><br>

## Description Project
The following project is related to restful api using expressjs. Overall used to perform management on rental cars. This project can load pages and also be used as api to manage rental car data. The available APIs are used to get cars, show car, update car, destroy car
<br><br>

## Installation

  #### 1. Clone Repository
  #### 2. Install All Dependencies
   ```sh
   npm install
   ```
 #### 3. set up your database setup your database according to the configuration file located in config/config.json

 #### 4. Run the script in the package.json file, for example :
a. for create new database
   ```sh
   npm run db:create
   ```
b. for migrate tables
   ```sh
   npm run db:migrate
   ```
c. run seeders
   ```sh
   npm run db:seed
   ```
d. for other scripts, please check the package.json file

#### 5. (Optional) Create an .env file by copy and rename file .env.example. Then fill in the port and node_env variable (by default both have values)

<br>

## ERD
[erd](erd.png)

<br>

## Endpoint

### Web
#### 1. Index Page (GET) = http://base_url
#### 2. Add Car Page (GET) = http://base_url/add
#### 3. Edit Car Page (GET) = http://base_url/edit/:id
#### 4. Add Car (POST) = http://base_url/add
#### 5. Edit Car (PUT) = http://base_url/edit/:id
#### 5. Delete Car (DELETE) = http://base_url/delete/:id

<br>

### Api
#### 1. Get All Cars (GET) = http://base_url/api/car
example response :
```json
{
	"status": true,
	"message": "data rental mobil binar",
	"total": 25,
	"data": [
		{
			"id": 1,
			"name": "Ford",
			"type": "F150",
			"price": 200000,
			"image": "./images/car/car01.min.jpg",
			"size": "small",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 2,
			"name": "BMW",
			"type": "X5",
			"price": 800000,
			"image": "./images/car/car02.min.jpg",
			"size": "large",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 3,
			"name": "Lincoln",
			"type": "MKZ",
			"price": 900000,
			"image": "./images/car/car03.min.jpg",
			"size": "large",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 4,
			"name": "BMW",
			"type": "M5",
			"price": 900000,
			"image": "./images/car/car04.min.jpg",
			"size": "large",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 5,
			"name": "Lincoln",
			"type": "Navigator",
			"price": 200000,
			"image": "./images/car/car05.min.jpg",
			"size": "small",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 6,
			"name": "Ford",
			"type": "Fiesta",
			"price": 900000,
			"image": "./images/car/car06.min.jpg",
			"size": "medium",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 7,
			"name": "Honda",
			"type": "Accord",
			"price": 900000,
			"image": "./images/car/car07.min.jpg",
			"size": "medium",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 8,
			"name": "Lincoln",
			"type": "Navigator",
			"price": 300000,
			"image": "./images/car/car08.min.jpg",
			"size": "small",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 9,
			"name": "Buick",
			"type": "LaCrosse",
			"price": 1000000,
			"image": "./images/car/car09.min.jpg",
			"size": "large",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 10,
			"name": "BMW",
			"type": "X5",
			"price": 300000,
			"image": "./images/car/car10.min.jpg",
			"size": "large",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 11,
			"name": "Chevy",
			"type": "Malibu",
			"price": 700000,
			"image": "./images/car/car11.min.jpg",
			"size": "small",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 12,
			"name": "BMW",
			"type": "X3",
			"price": 800000,
			"image": "./images/car/car12.min.jpg",
			"size": "medium",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 13,
			"name": "Chevy",
			"type": "Malibu",
			"price": 900000,
			"image": "./images/car/car13.min.jpg",
			"size": "large",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 14,
			"name": "Chevy",
			"type": "Malibu",
			"price": 700000,
			"image": "./images/car/car14.min.jpg",
			"size": "small",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 15,
			"name": "Lincoln",
			"type": "MKS",
			"price": 900000,
			"image": "./images/car/car15.min.jpg",
			"size": "medium",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 16,
			"name": "Chevy",
			"type": "Silverado",
			"price": 200000,
			"image": "./images/car/car16.min.jpg",
			"size": "large",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 17,
			"name": "Lincoln",
			"type": "MKS",
			"price": 1000000,
			"image": "./images/car/car17.min.jpg",
			"size": "small",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 18,
			"name": "Dodge",
			"type": "Ram",
			"price": 700000,
			"image": "./images/car/car18.min.jpg",
			"size": "large",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 19,
			"name": "Ford",
			"type": "F150",
			"price": 600000,
			"image": "./images/car/car19.min.jpg",
			"size": "large",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 20,
			"name": "Audi",
			"type": "A4",
			"price": 700000,
			"image": "./images/car/car20.min.jpg",
			"size": "large",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 21,
			"name": "Dodge",
			"type": "Durango",
			"price": 400000,
			"image": "./images/car/car21.min.jpg",
			"size": "large",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 22,
			"name": "Audi",
			"type": "S5",
			"price": 300000,
			"image": "./images/car/car22.min.jpg",
			"size": "large",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 23,
			"name": "Toyota",
			"type": "Camry",
			"price": 200000,
			"image": "./images/car/car23.min.jpg",
			"size": "large",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 24,
			"name": "Nissan",
			"type": "Pathfiner",
			"price": 600000,
			"image": "./images/car/car24.min.jpg",
			"size": "large",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		},
		{
			"id": 25,
			"name": "Honda",
			"type": "Civic",
			"price": 1000000,
			"image": "./images/car/car25.min.jpg",
			"size": "small",
			"createdAt": "2023-04-14T07:08:55.679Z",
			"updatedAt": "2023-04-14T07:08:55.679Z"
		}
	]
}
```

#### 2. Get Car (GET) = http://base_url/api/car/:id
example response :
```json
{
    "status": true,
    "message": "data mobil ditemukan",
    "data": {
        "id": 1,
        "name": "Ford",
        "type": "F150",
        "price": 200000,
        "image": "./images/car/car01.min.jpg",
        "size": "small",
        "createdAt": "2023-04-06T05:21:54.249Z",
        "updatedAt": "2023-04-06T05:21:54.249Z"
    }
}
```
#### 3. Add Car (POST) = http://base_url/api/car
example request body :
```json
{
	"name": "Kijang",
	"type": "XYZ",
	"size": "medium",
	"price": 300000,
	"image": "Achmad alvin ardiansyah.jpg"
}
```
example response :
```json
{
    "status": true,
    "message": "data mobil berhasil ditambahkan",
    "data": {
        "id": 28,
        "name": "Kijang",
        "type": "XYZ",
        "size": "medium",
        "price": 300000,
        "image": "./upload/cars/1680933784602-Achmad alvin ardiansyah.jpg",
        "updatedAt": "2023-04-08T06:03:04.629Z",
        "createdAt": "2023-04-08T06:03:04.629Z"
    }
}
```

#### 4. Update Car (PUT) = http://base_url/api/car/:id
example request body :
```json
{
	"name": "Innova Edit",
	"type": "ABCD Edit",
	"size": "small",
	"price": 400000,
	"image": "image1.jpg"
}
```
example response :
```json
{
	"status": true,
	"message": "data mobil berhasil diupdate",
	"data": {
		"id": 15,
		"name": "Innova Edit",
		"type": "ABCD Edit",
		"price": 400000,
		"image": "image1.jpg",
		"size": "small",
		"createdAt": "2023-04-06T05:21:54.249Z",
		"updatedAt": "2023-04-08T06:21:38.230Z"
	}
}
```
#### 5. Delete Car (DELETE) = http://base_url/api/car/:id
example response :
```json
{
    "status": true,
    "message": "data mobil berhasil dihapus",
    "data": 1
}
```

