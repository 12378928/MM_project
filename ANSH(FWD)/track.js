
// document.getElementById('trackBtn').addEventListener('click', function () {
//   const orderId = document.getElementById('orderId').value.trim();
//   const resultBox = document.getElementById('result');

//   // Sample demo data (you can replace with real database/API later)
//   const orders = {
//     "ORD101": "Processing - Expected Delivery: 5 Nov 2025",
//     "ORD102": "Shipped - Reaching You Soon!",
//     "ORD103": "Out for Delivery",
//     "ORD104": "Delivered on 2 Nov 2025",
//     "ORD105": "Cancelled - Refund Initiated"
//   };

//   if (orderId === "") {
//     resultBox.textContent = "⚠️ Please enter your Order ID!";
//     resultBox.style.color = "yellow";
//     return;
//   }

//   if (orders[orderId]) {
//     resultBox.textContent = `✅ Order ${orderId} Status: ${orders[orderId]}`;
//     resultBox.style.color = "lightgreen";
//   } else {
//     resultBox.textContent = " Order ID not found. Please check again.";
//     resultBox.style.color = "red";
//   }
// });



// track.js

document.getElementById('trackBtn').addEventListener('click', function () {
  const orderId = document.getElementById('orderId').value.trim();
  const resultBox = document.getElementById('result');
  const mapBox = document.getElementById('map');

  // 🔹 Sample Ahmedabad areas (villages) with coordinates
  const areas = {
    Chandkheda: { lat: 23.1025, lon: 72.5800 },
    Maninagar: { lat: 22.9965, lon: 72.6075 },
    Bopal: { lat: 22.9822, lon: 72.4532 },
    Naroda: { lat: 23.0833, lon: 72.6700 },
    Sanand: { lat: 22.9338, lon: 72.3818 },
    Gota: { lat: 23.0942, lon: 72.5227 },
    Sola: { lat: 23.0701, lon: 72.5282 },
    Sarkhej: { lat: 22.9825, lon: 72.5010 }
  };

  const areaNames = Object.keys(areas);

  // 🔹 Random start and destination
  const start = areaNames[Math.floor(Math.random() * areaNames.length)];
  let destination = areaNames[Math.floor(Math.random() * areaNames.length)];

  // Make sure start ≠ destination
  while (destination === start) {
    destination = areaNames[Math.floor(Math.random() * areaNames.length)];
  }

  // 🔹 Sample order status (based on random route)
  const statuses = [
    "Preparing order",
    "Packed and ready to ship",
    "Shipped from warehouse",
    "Out for delivery",
    "Delivered successfully"
  ];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  // 🔹 Handle empty input
  if (orderId === "") {
    resultBox.textContent = "⚠️ Please enter your Order ID!";
    resultBox.style.color = "yellow";
    mapBox.style.display = "none";
    return;
  }

  // 🔹 Show order status
  resultBox.textContent = `✅ Order ${orderId} Status: ${randomStatus} from ${start} to ${destination}`;
  resultBox.style.color = "lightgreen";

  // 🔹 Show Google Maps route between start & destination
  mapBox.style.display = "block";
  const mapUrl = `https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=${areas[start].lat},${areas[start].lon}&destination=${areas[destination].lat},${areas[destination].lon}&zoom=12`;

  mapBox.innerHTML = `<iframe width="100%" height="100%" style="border:0;" loading="lazy" allowfullscreen src="${mapUrl}"></iframe>`;
});
