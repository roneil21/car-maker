<template>
    <div id="create-car">
        <!-- <div v-if="!completed"> -->

        <h1>Create Your Dream Car</h1>
        <form>
            <label>Manufacturer:
                <input type="text" placeholder="Enter the Car Manufacturer" v-model="newManufacturer" />
            </label>
            <label>Type of Car:
                <input type="text" placeholder="Enter the Type of Car" v-model="newType" />
            </label>
            <label>Color:
                <input type="text" placeholder="Enter the Color of the Car" v-model="newColor" />
            </label>
            <button @click.prevent="addCar" class="create-btn">Create</button>
        </form>

        <!-- </div> -->
        <!-- <div v-if="completed"> -->
        <div v-for="(car, index) in cars" :key="index" class="preview">

            <h2 class="prev-title">Car Lists</h2>
            <div class="car-label" v-if="!car.editing">
                <p>Manufacturer: <span>{{ car.manufacturer }}</span></p>
            </div>
            <input v-else type="text" v-model="car.manufacturer" />

            <div class="car-label" v-if="!car.editing">
                <p>Type: <span>{{ car.type }}</span></p>
            </div>
            <input v-else type="text" v-model="car.type" />

            <div class="car-label" v-if="!car.editing">
                <p>Color: <span>{{ car.color }}</span></p>
            </div>
            <input v-else type="text" v-model="car.color" />

            <div class="update-btn">
                <button @click="editCar(car)" class="edit-btn" v-show="!car.editing">Edit</button>
                <button @click="deleteCar(index)" class="delete-btn" v-show="!car.editing">Delete</button>
            </div>
            <div>
                <button @click="doneEdit(car)" class="done-btn" v-show="car.editing">Done</button>
            </div>
        </div>
        <!-- </div> -->

    </div>
</template>

<script>
const STORAGE_KEY = "car-storage"
export default {
    data() {
        return {
            newManufacturer: '',
            newType: '',
            newColor: '',
            idForCar: 1,
            cars: [{
                id: 0,
                manufacturer: '',
                type: '',
                color: '',
                completed: false,
                editing: false,

            }]
        }
    },
    methods: {
        addCar() {
            if (this.newManufacturer.trim().length == 0 || this.newType.trim().length == 0 || this.newColor.trim().length == 0) {
                return
            }
            this.cars.push({
                id: this.idForCar,
                manufacturer: this.newManufacturer,
                type: this.newType,
                color: this.newColor,
                completed: false,
                editing: false,

            });
            this.newManufacturer = '';
            this.newType = '';
            this.newColor = '';
            this.idForCar++;

            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cars));
        },
        editCar(car) {
            car.editing = true;
        },
        doneEdit(car) {
            car.editing = false;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cars));
        },
        deleteCar(index) {
            this.cars.splice(index, 1);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cars));
        },
    },
    created() {
        this.cars = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        this.$emit("authenticated", true);
    },
}
</script>

<style scoped>
#create-car * {
    box-sizing: border-box;
}

#create-car {
    margin: 20px auto;
    width: 500px;
    background-color: rgb(0, 0, 0, 0.5);
    padding: 50px 50px 20px 50px;
    display: block;
    border-radius: 20px;
    border: 1px solid #C69749;
    box-shadow: 0 3px 10px rgb(198 151 73 / 0.3);
}

h1 {
    text-align: center;
    margin: 20px auto;
    background: #000000;
    color: #C69749;
    opacity: 100%;
}

button {
    width: 80px;
    margin-top: 10px;
    border: 2px solid #C69749;
    border-radius: 300px;
    letter-spacing: 2px;
    color: #fff;
    text-align: center;
    padding: 9px;
    font-weight: 500;
    font-size: 13px;
    cursor: pointer;
    background-color: transparent;
    position: relative;
    left: 80%;
}

.update-btn {
    position: relative;
    right: 20%;
}

.edit-btn {
    margin-right: 20px;
}

button:hover {
    color: #000000;
    border: 2px solid #000000;
    background-color: #bd7603;
}

label {
    color: #C69749;
    opacity: 100%;
    font-weight: 600;
}

input[type="text"] {
    display: block;
    width: 100%;
    padding: 8px;
    margin: 10px auto;
    color: #000000;
    border: 1px solid #000000;
    background-color: #e4e4e4;
    font-weight: 500;
    opacity: 100%;
    border-radius: 10px;
}

.preview {
    display: block;
}


.prev-title {
    text-align: center;
    color: #C69749;
}

.car-label {
    color: #C69749;
}

.car-label p {
    letter-spacing: 0px;
}

span {
    color: #fff;
}

@media screen and (max-width: 650px) {
    #create-car {
        margin: auto;
        padding: auto;
        width: 250px;
    }

    button {
        width: 70px;
        font-size: 11px;
        left: 55%;
    }

    .create-btn {
        left: 70%;
    }
    .done-btn{
        left: 70%;
    }

}</style>