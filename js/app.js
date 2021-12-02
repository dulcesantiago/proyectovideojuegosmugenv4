// Model === Data , View === UI, Controller === Brain - 



//MVC de Dato-Controlador-View
//Model
const model = {
    currentCar: null,
    cars: [
        {
            clickCount: 0,
            name: 'Dragon Ball Super',
            imgSrc: 'images/dragon.jpg',
        },
        {
            clickCount: 0,
            name: 'Naruto Shippuden Ultimate Ninja Blazing',
            imgSrc: 'images/naruto-shippuden.jpg',
        },
        {
            clickCount: 0,
            name: 'One Piece V2',
            imgSrc: 'images/one-piece.jpg',
        },
        {
            clickCount: 0,
            name: 'Seven Deadlo Sings',
            imgSrc: 'images/seven-deadlo-sings.png',
        },
        {
            clickCount: 0,
            name: 'Nanatsu No Taizai',
            imgSrc: 'images/nanatsu-no-taizai.png',
        },
    ],
};

// Controller
const controller = {
    init() {
        
        model.currentCar = model.cars[0];

        
        carListView.init();
        carView.init();
    },

    getCurrentCar() {
        return model.currentCar;
    },

    getCars() {
        return model.cars;
    },

    
    setCurrentCar(car) {
        model.currentCar = car;
    },

   
    incrementCounter() {
        model.currentCar.clickCount++;
        carView.render();
    },
};



// Views
const carView = {
    init() {
        
        this.carElem = document.getElementById('car');
        this.carNameElem = document.getElementById('car-name');
        this.carImageElem = document.getElementById('car-img');
        this.countElem = document.getElementById('car-count');

        
        this.carImageElem.addEventListener('click', this.clickHandler);

       
        this.render();
    },

    clickHandler() {
        return controller.incrementCounter();
    },

    render() {

        const currentCar = controller.getCurrentCar();
        this.countElem.textContent = currentCar.clickCount;
        this.carNameElem.textContent = currentCar.name;
        this.carImageElem.src = currentCar.imgSrc;
        this.carImageElem.style.cursor = 'pointer';
    },
};

const carListView = {
    init() {
       
        this.carListElem = document.getElementById('car-list');

      
        this.render();
    },

    render() {
        let car;
        let elem;
        let i;
       
        const cars = controller.getCars();

       
        this.carListElem.innerHTML = '';

        
        for(let i = 0; i < cars.length; i++) {
           
            car = cars[i];

           
            elem = document.createElement('li');
            elem.className = 'list-group-item d-flex justify-content-between lh-condensed';
            elem.style.cursor = 'pointer';
            elem.textContent = car.name;
            elem.addEventListener(
                'click',
                (function(carCopy) {
                  return function() {
                    controller.setCurrentCar(carCopy);
                    carView.render();
                  };
                })(car)
              );
 
                this.carListElem.appendChild(elem);
        }
    },
};




controller.init();