# Caars

A FREE car API for India.

## Why?

I couldn't find any free API that gives cars data in India, so why not create one myself?

## Brands

- TATA

### To Be Included

- Maruti Suzuki
- Hyundai
- Skoda
- Volkswagen
- MG
- Jeep
- Mahindra
- Toyota

## Data

### Schema

```
{
    "brand": String,
    "model": String,
    "variant": String,
    "engine": {
      "engine_type": String,
      "capacity": String,
      "power": String,
      "torque": String
    },
    "transmission": String,
    "dimensions": {
      "length": String,
      "width": String,
      "height": String,
      "wheelbase": String
    },
    "seating_capacity": Number,
    "boot_space": String,
    "price": {
      "ex_showroom": String
    },
    "img": {
      "url": String,
      "alt": String
    }
}
```

### Example

```
{
    "brand": "Tata",
    "model": "Altroz",
    "variant": "XZ+S LUX 1.2, Petrol",
    "engine": {
      "engine_type": "Petrol",
      "capacity": "1199 cc",
      "power": "88 HP",
      "torque": "115 Nm"
    },
    "transmission": "5 Speed MT",
    "dimensions": {
      "length": "3990 mm",
      "width": "1755 mm",
      "height": "1523 mm",
      "wheelbase": "2501 mm"
    },
    "seating_capacity": 5,
    "boot_space": "345 L",
    "price": {
      "ex_showroom": "₹9,19,990"
    },
    "img": {
      "url": "https://cars.tatamotors.com/content/dam/tml/pv/products/altroz/year-2023/ice/xz-plus-os/arcade-grey/main-images/arcade-grey-left.png",
      "alt": "Tata Altroz arcade grey"
    }
}
```

---
