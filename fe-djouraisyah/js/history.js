// history.js
document.addEventListener("DOMContentLoaded", async () => {
  const userLogin = JSON.parse(localStorage.getItem("user"));
  const orderHistoryContainer = document.getElementById("order-history");

  try {
    const response = await fetch(
      `http://localhost:3000/api/orders/${userLogin.id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch order history");
    }

    const orders = await response.json();

    if (orders.length === 0) {
      orderHistoryContainer.innerHTML = "<p>Tidak ada riwayat pesanan</p>";
      return;
    }

    orders.forEach((order) => {
      const orderDiv = document.createElement("div");
      orderDiv.className = "order";

      const orderDetailsDiv = document.createElement("div");
      orderDetailsDiv.className = "order-details";

      orderDetailsDiv.innerHTML = `
        <p>ID Pesanan: ${order.id}</p>
        <p>Tanggal: ${new Date(order.date).toLocaleString()}</p>
        <p>Item:</p>
        <ul>
          ${order.items
            .map(
              (item) => `
            <li>${item.product_name} - ${
                item.quantity
              } x Rp${item.price.toLocaleString()}</li>
          `
            )
            .join("")}
        </ul>
        <p>Total: Rp${order.items
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toLocaleString()}</p>
      `;

      const printButton = document.createElement("button");
      printButton.className = "print";
      printButton.textContent = "Print";
      printButton.addEventListener("click", () => {
        const printWindow = window.open("", "_blank");
        printWindow.document.write(`
          <html>
            <head>
              <title>Print</title>
              <link rel="stylesheet" href="styles.css">
            </head>
            <body>
              ${orderDetailsDiv.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      });

      const downloadButton = document.createElement("button");
      downloadButton.className = "download";
      downloadButton.textContent = "Download PDF";
      downloadButton.addEventListener("click", async () => {
        const pdfContent = `
          <html>
            <head>
              <title>Download PDF</title>
              <link rel="stylesheet" href="styles.css">
            </head>
            <body>
              ${orderDetailsDiv.innerHTML}
            </body>
          </html>
        `;

        const pdfBlob = new Blob([pdfContent], { type: "application/pdf" });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        const a = document.createElement("a");
        a.href = pdfUrl;
        a.download = `order-${order.id}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });

      orderDiv.appendChild(orderDetailsDiv);
      orderDiv.appendChild(printButton);
      orderDiv.appendChild(downloadButton);
      orderHistoryContainer.appendChild(orderDiv);
    });
  } catch (error) {
    console.error("Error:", error);
    orderHistoryContainer.innerHTML =
      "<p>Gagal mengambil riwayat pesanan. Silakan coba lagi nanti.</p>";
  }
});
