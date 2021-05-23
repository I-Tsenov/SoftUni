function vacation(count, groupType, day) {
  let totalPrice = 0;

  switch (groupType) {
    case "Students":
      switch (day) {
        case "Friday":
          totalPrice = count * 8.45;
          break;
        case "Saturday":
          totalPrice = count * 9.80;
          break;
        case "Sunday":
          totalPrice = count * 10.46;
          break;
      }
      if (count >= 30) {
        totalPrice -= totalPrice * 0.15;
      }
      break;

    case "Business":
      if (count >= 100) {
        count -= 10;
      }
      switch (day) {
        case "Friday":
          totalPrice = count * 10.90;
          break;
        case "Saturday":
          totalPrice = count * 15.60;
          break;
        case "Sunday":
          totalPrice = count * 16;
          break;
      }
      break;

    case "Regular":
      switch (day) {
        case "Friday":
          totalPrice = count * 15;
          break;
        case "Saturday":
          totalPrice = count * 20;
          break;
        case "Sunday":
          totalPrice = count * 22.50;
          break;
      }
      if (count >= 10 && count <= 20) {
        totalPrice -= totalPrice * 0.05;
      }
      break;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(2, "Business", "Saturday");
