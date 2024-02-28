export function main() {
  const checkInIdx = process.argv.indexOf('-in');
  const checkOutIdx = process.argv.indexOf('-out');
  const numberOfGuestsIdx = process.argv.indexOf('-guests');

  const checkInDate = process.argv[checkInIdx + 1];
  const checkOutDate = process.argv[checkOutIdx + 1];
  const numberOfGuests = process.argv[numberOfGuestsIdx + 1];

  console.log(`Check-in date: ${checkInDate}`);
  console.log(`Check-out date: ${checkOutDate}`);
  console.log(`Number of guests: ${numberOfGuests}`);
}

main();
