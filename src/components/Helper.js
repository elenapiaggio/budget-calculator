export function calculateBootcamp(bootcamp) {
  let increment;
  switch (bootcamp) {
    case "web":
      increment = 1.1;
      break;
    case "ux":
      increment = 1.1;
      break;

    case "bigdata":
      increment = 1.1;
      break;
    default:
      break;
  }
  return increment;
}

export function getTypeDifference(type) {
  let percentage = 0;

  switch (type) {
    case "ft":
      percentage = 20;
      break;
    case "pt":
      percentage = 30;
      break;
    case "ft_online":
      percentage = 10;
      break;
    case "pt_online":
      percentage = 15;
      break;
    default:
      break;
  }
  return percentage;
}

export function getPlan(plan){
  return (plan === 'basic') ? 1.20 : 1.50;
}

// show the first letter on UpperCase
export function changeToUpperCase(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
}