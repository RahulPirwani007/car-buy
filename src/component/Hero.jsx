import React, { useState } from "react";

const Hero = ({ searchTerm }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [fuelType, setFuelType] = useState([]);
  const [seatingCapacity, setSeatingCapacity] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let carList = [
    {
      id: 1,
      brand: "Toyota",
      model: "Camry",
      price: 30000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://www.financialexpress.com/auto/images/model-camry-seo-image-1733759689821.jpg",
    },
    {
      id: 2,
      brand: "Honda",
      model: "Civic",
      price: 25000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80&q=80",
    },
    {
      id: 3,
      brand: "Ford",
      model: "Fusion",
      price: 22000,
      fuel_type: "Hybrid",
      seating_capacity: 5,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMK65s5T6OcILl0ge1nX9mJh2CFyR7WiHU6A&s",
    },
    {
      id: 4,
      brand: "BMW",
      model: "3 Series",
      price: 40000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BMW_G20_%282022%29_IMG_7316_%282%29.jpg/800px-BMW_G20_%282022%29_IMG_7316_%282%29.jpg",
    },
    {
      id: 5,
      brand: "Audi",
      model: "A4",
      price: 35000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/47030/audi-a3-new-left-side-view0.jpeg?q=80",
    },
    {
      id: 6,
      brand: "Mercedes-Benz",
      model: "C-Class",
      price: 45000,
      fuel_type: "Diesel",
      seating_capacity: 5,
      image_url:
        "https://www.financialexpress.com/wp-content/uploads/2022/05/Mercedes-Benz-C-Class-1.jpg",
    },
    {
      id: 7,
      brand: "Chevrolet",
      model: "Malibu",
      price: 23000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://di-uploads-pod3.dealerinspire.com/coylechevybuickgmc/uploads/2021/03/2021-Chevy-Malibu-Overview-Left.jpg",
    },
    {
      id: 8,
      brand: "Nissan",
      model: "Altima",
      price: 27000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRevdkzAt8nkBXDjJpZcO5HqikSzkmitQrdIQ&s",
    },
    {
      id: 9,
      brand: "Hyundai",
      model: "Sonata",
      price: 21000,
      fuel_type: "Hybrid",
      seating_capacity: 5,
      image_url:
        "https://imgd-ct.aeplcdn.com/664x415/cw/cars/discontinued/hyundai/sonata-2001-2005.jpg?q=80",
    },
    {
      id: 10,
      brand: "Kia",
      model: "Optima",
      price: 24000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7guZzf4xM4el5VCvmKGkOH9Bd83GC97UQ_A&s",
    },
    {
      id: 11,
      brand: "Mazda",
      model: "6",
      price: 28000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2018_Mazda6_Sport_NAV%2B_Diesel_2.2_Front.jpg/800px-2018_Mazda6_Sport_NAV%2B_Diesel_2.2_Front.jpg",
    },
    {
      id: 12,
      brand: "Tesla",
      model: "Model 3",
      price: 55000,
      fuel_type: "Electric",
      seating_capacity: 5,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcdk4fJGId8OzC5CPn44ukPkoiWJTMFnOEg&s",
    },
    {
      id: 13,
      brand: "Volkswagen",
      model: "Passat",
      price: 26000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://www.carscoops.com/wp-content/uploads/2024/04/VW-Passat-1-China-4.jpg",
    },
    {
      id: 14,
      brand: "Subaru",
      model: "Legacy",
      price: 32000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFxfQreBvonD6b0crqS9KbhJPJyCj5NrEVA&s",
    },
    {
      id: 15,
      brand: "Chrysler",
      model: "300",
      price: 37000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0FZZMKBupFMvlBLiVvCn50VHFrfvvACtuLA&s",
    },
    {
      id: 16,
      brand: "Lexus",
      model: "IS",
      price: 43000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://tmna.aemassets.toyota.com/is/image/toyota/lexus/images/models/is/2025/performance/Lexus-IS-a-new-breed-of-Fsport-mobile-750x448-LEX-ISG-MY25-0093.jpg?wid=750&hei=448",
    },
    {
      id: 17,
      brand: "Jaguar",
      model: "XE",
      price: 49000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpmy97eFY4wja0QmQwdIra_tgDD-Gdv-oPBg&s",
    },
    {
      id: 18,
      brand: "Porsche",
      model: "Macan",
      price: 60000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://images-porsche.imgix.net/-/media/85253570EB6041668103DB92F476DC76_F0963A1C37654174A4797CAB7C6E68C3_macan-gts-side?w=2560&h=811&q=45&crop=faces%2Centropy%2Cedges&auto=format",
    },
    {
      id: 19,
      brand: "Volvo",
      model: "S60",
      price: 39000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/27032/s60-exterior-right-front-three-quarter-3.jpeg?q=80",
    },
    {
      id: 20,
      brand: "Land Rover",
      model: "Discovery",
      price: 67000,
      fuel_type: "Diesel",
      seating_capacity: 7,
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/2016_Land_Rover_Discovery_Sport_SE_Tech_T_2.0_Front.jpg/1200px-2016_Land_Rover_Discovery_Sport_SE_Tech_T_2.0_Front.jpg",
    },
    {
      id: 21,
      brand: "Jeep",
      model: "Grand Cherokee",
      price: 55000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://media.assettype.com/evoindia/2021-01/9ac79dc9-8191-452e-96f0-76ecb2f80bb6/Jeep_Grand_Cherokee.jpg",
    },
    {
      id: 22,
      brand: "Ram",
      model: "1500",
      price: 46000,
      fuel_type: "Diesel",
      seating_capacity: 5,
      image_url:
        "https://www.ramtrucks.com/content/dam/fca-brands/na/ramtrucks/en_us/2025/ram-1500/gallery/desktop/my25-ram-1500-gallery-open-1-d.jpg",
    },
    {
      id: 23,
      brand: "Ford",
      model: "F-150",
      price: 50000,
      fuel_type: "Gasoline",
      seating_capacity: 5,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFx-S0SFYezx5paIZIvhZppy4UujnEBUA8kA&s",
    },
    {
      id: 24,
      brand: "Chevrolet",
      model: "Tahoe",
      price: 65000,
      fuel_type: "Gasoline",
      seating_capacity: 7,
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/2/22/2022_Chevrolet_Tahoe_RST%2C_front_3.7.22.jpg",
    },
    {
      id: 25,
      brand: "Honda",
      model: "Pilot",
      price: 48000,
      fuel_type: "Gasoline",
      seating_capacity: 8,
      image_url:
        "https://www.usnews.com/object/image/0000018c-457f-dc8f-addc-ef7fda470001/24-honda-pilot-ext1.jpg?update-time=1701973208102&size=responsive640",
    },
    {
      id: 26,
      brand: "Toyota",
      model: "Highlander",
      price: 51000,
      fuel_type: "Hybrid",
      seating_capacity: 7,
      image_url:
        "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-highlander-102-66e97932a6f77.jpg?crop=1.00xw:0.846xh;0,0.154xh&resize=2048:*",
    },
    {
      id: 27,
      brand: "Nissan",
      model: "Armada",
      price: 72000,
      fuel_type: "Gasoline",
      seating_capacity: 8,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasZZ8doZ3LQMbcAB9pfM-wLB8Xdt1WYlnlg&s",
    },
    {
      id: 28,
      brand: "GMC",
      model: "Yukon",
      price: 74000,
      fuel_type: "Gasoline",
      seating_capacity: 8,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIErlY7nY_FM-LLuaE_f7GZI3pNKMLDA2Gw&s",
    },
    {
      id: 29,
      brand: "Buick",
      model: "Enclave",
      price: 52000,
      fuel_type: "Gasoline",
      seating_capacity: 7,
      image_url:
        "https://media.ed.edmunds-media.com/buick/enclave/2024/oem/2024_buick_enclave_4dr-suv_avenir_fq_oem_1_1600.jpg",
    },
    {
      id: 30,
      brand: "Ford",
      model: "Expedition",
      price: 65000,
      fuel_type: "Gasoline",
      seating_capacity: 8,
      image_url:
        "https://cdn-fastly.autoguide.com/media/2023/06/26/12922999/2019-ford-expedition-pros-and-cons.jpg?size=720x845&nocrop=1",
    },
  ];

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) =>
        prev.filter((category) => category !== value)
      );
    }
  };

  const handleFuelTypeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFuelType((prev) => [...prev, value]);
    } else {
      setFuelType((prev) => prev.filter((fuel) => fuel !== value));
    }
  };

  const handleSeatingCapacityChange = (event) => {
    const { value, checked } = event.target;
    const capacityValue = Number(value);
    if (checked) {
      setSeatingCapacity((prev) => [...prev, value]);
    } else {
      setSeatingCapacity((prev) =>
        prev.filter((capacity) => capacity !== value)
      );
    }
  };

  const handlePriceChange = (e) => {
    const newPrice = Number(e.target.value);
    setPriceRange([0, newPrice]); // Set only the upper limit
  };

  let filterItem = carList.filter((item) => {
    const isBrandMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.brand);
    const isPriceMatch =
      item.price >= priceRange[0] && item.price <= priceRange[1];
    const isFuelTypeMatch =
      fuelType.length === 0 || fuelType.includes(item.fuel_type);

    const isSeatingCapacityMatch =
      seatingCapacity.length === 0 ||
      seatingCapacity.includes(item.seating_capacity.toString());

    const isSearchTermMatch =
      searchTerm === "" ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.model.toLowerCase().includes(searchTerm.toLowerCase());

    return (
      isBrandMatch &&
      isPriceMatch &&
      isFuelTypeMatch &&
      isSeatingCapacityMatch &&
      isSearchTermMatch
    );
  });

  const carsPerPage = 10;
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filterItem.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(filterItem.length / carsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <main className="container">
        <div className="left">
          <h1>Filter</h1>
          <div className="brandCategory">
            <h2>Brand Category</h2>
            <div className="item">
              {[
                "Audi",
                "BMW",
                "Chevrolet",
                "Chrysler",
                "Ford",
                "Honda",
                "Hyundai",
                "Jaguar",
                "Kia",
                "Toyota",
                "Mercedes-Benz",
                "Nissan",
                "Mazda",
                "Tesla",
                "Volkswagen",
                "Subaru",
                "Lexus",
                "Porsche",
                "Volvo",
                "Land Rover",
              ].map((brand) => (
                <label key={brand} className="labelContainer">
                  <input
                    type="checkbox"
                    value={brand}
                    onChange={handleCategoryChange}
                  />
                  <div className="checkmark"></div>
                  {brand}
                </label>
              ))}
            </div>
          </div>
          <div className="fuelCategory">
            <h2>Fuel Category</h2>
            <div className="item">
              <label className="labelContainer">
                <input
                  type="checkbox"
                  value="Gasoline"
                  onChange={handleFuelTypeChange}
                />
                <div className="checkmark"></div>
                Gasoline
              </label>
              <label className="labelContainer">
                <input
                  type="checkbox"
                  value="Hybrid"
                  onChange={handleFuelTypeChange}
                />
                <div className="checkmark"></div>
                Hybrid
              </label>
              <label className="labelContainer">
                <input
                  type="checkbox"
                  value="Diesel"
                  onChange={handleFuelTypeChange}
                />
                <div className="checkmark"></div>
                Diesel
              </label>
              <label className="labelContainer">
                <input
                  type="checkbox"
                  value="Electric"
                  onChange={handleFuelTypeChange}
                />
                <div className="checkmark"></div>
                Electric
              </label>
            </div>
          </div>
          <div className="seatingCapacityCategory">
            <h2>Seating Capacity</h2>
            <div className="item">
              <label className="labelContainer">
                <input
                  type="checkbox"
                  value="5"
                  onChange={handleSeatingCapacityChange}
                />
                <div className="checkmark"></div>5 Seats
              </label>

              <label className="labelContainer">
                <input
                  type="checkbox"
                  value="7"
                  onChange={handleSeatingCapacityChange}
                />
                <div className="checkmark"></div>7 Seats
              </label>
              <label className="labelContainer">
                <input
                  type="checkbox"
                  value="8"
                  onChange={handleSeatingCapacityChange}
                />
                <div className="checkmark"></div>8 Seats
              </label>
            </div>
          </div>
          <div className="priceRange">
            <h2>Price Range</h2>
            <div className="range-container">
              <input
                type="range"
                min="0"
                max="100000"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="range-input"
              />
              <div className="price-values">
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          {currentCars.map((item) => (
            <div className="rightContainer" key={item.id}>
              <img src={item.image_url} alt={item.brand} />
              <div className="detailList">
                <h1>{item.brand}</h1>
                <h2>{item.model}</h2>
                <p>Price: ${item.price}</p>
                <p>Fuel Type: {item.fuel_type}</p>
                <p>Seating Capacity: {item.seating_capacity}</p>
              </div>
              <div className="btn">
                <button className="buyBtn">Buy</button>
                <button className="sellBtn">Sell</button>
              </div>
            </div>
          ))}
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <i className="bx bx-chevrons-left"></i>
            </button>
            <div className="pageNumbers">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <i className="bx bx-chevrons-right"></i>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
